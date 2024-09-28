// test/index.spec.ts
import { createExecutionContext, env, waitOnExecutionContext } from 'cloudflare:test';
import { parse } from 'cookie';
import { describe, expect, it } from 'vitest';
import { COOKIE_NAME } from '../src/const';
import worker from '../src/index';

const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

describe('DeviceID Worker', () => {
	it('responds with cookie header if the device_id cookie does not exist', async () => {
		const request = new IncomingRequest('http://example.com');

		// Create an empty context to pass to `worker.fetch()`.
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);

		// Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
		await waitOnExecutionContext(ctx);
		const cookies = parse(response.headers.get('Set-Cookie') || "");
		
		expect(cookies[COOKIE_NAME]).toBeDefined();
	});

	it('responds without cookie header if the device_id cookie exists', async () => {
		const request = new IncomingRequest('http://example.com');
		request.headers.append('Cookie', `${COOKIE_NAME}=2e627196-63f8-4839-826f-3f2918ce2631`);

		// Create an empty context to pass to `worker.fetch()`.
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);

		// Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
		await waitOnExecutionContext(ctx);
		const cookies = parse(response.headers.get('Set-Cookie') || "");
		
		expect(cookies[COOKIE_NAME]).toBeUndefined();
	});
});
