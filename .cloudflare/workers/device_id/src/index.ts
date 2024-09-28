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
	const deviceIdCookie = serialize(COOKIE_NAME, crypto.randomUUID());

	// Proxy the request; set the device_id cookie
	const newRequest = new Request(request);
	const newRequestCookies = 
		requestCookies === '' ? deviceIdCookie : `${requestCookies}; ${deviceIdCookie}`;

	newRequest.headers.set(COOKIE_HEADER, newRequestCookies);
    const response = await fetch(newRequest);

	// Clone the response; append the device_id cookie
    const newResponse = new Response(response.body, response as ResponseInit);
    newResponse.headers.append(SET_COOKIE_HEADER, deviceIdCookie);

    return newResponse;
  },
} satisfies ExportedHandler<Env>;