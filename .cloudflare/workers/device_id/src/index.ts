import { parse, serialize } from "cookie";
import { COOKIE_HEADER, COOKIE_NAME, SET_COOKIE_HEADER } from "./const";

/**
 * Only add the cookie header for device_id if it doesn't already exist.
 */
export default {
  async fetch(request, env, ctx): Promise<Response> {
    // Properly parse the cookies from the request
	const requestCookies = request.headers.get(COOKIE_HEADER) || "";
    const parsedCookies = parse(requestCookies);

	// Exit early if the cookie already exists
    if (parsedCookies[COOKIE_NAME] != null) {
      return fetch(request)
    }

	// Generate the new device_id cookie
 const deviceId = crypto.randomUUID();
	const deviceIdCookie = serialize(COOKIE_NAME, deviceId, {
   domain: '.thenullpointer.net',
   maxAge: 5 * 365 * 24 * 60 * 60,
   path: '/',
   secure: false,
   httpOnly: false,
   sameSite: false,
 });

	// Proxy the request; set the device_id cookie
	const newRequest = new Request(request);
 const newRequestDeviceIdCookie = serialize(COOKIE_NAME, deviceId);
	const newRequestCookies = 
		requestCookies === '' ? newRequestDeviceIdCookie : `${requestCookies}; ${newRequestDeviceIdCookie}`;

	newRequest.headers.set(COOKIE_HEADER, newRequestCookies);
    const response = await fetch(newRequest);

	// Clone the response; append the device_id cookie
    const newResponse = new Response(response.body, response as ResponseInit);
    newResponse.headers.append(SET_COOKIE_HEADER, deviceIdCookie);

    return newResponse;
  },
} satisfies ExportedHandler<Env>;