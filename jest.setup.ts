import "@testing-library/jest-dom";
import React from "react";

// ✅ MUST be first — TextEncoder polyfill
import { TextEncoder, TextDecoder } from "util";

globalThis.TextEncoder = TextEncoder as any;
globalThis.TextDecoder = TextDecoder as any;

// Now safe to import these
import { File, Blob } from "buffer";
import { FormData, Headers, Request, Response } from "undici";

globalThis.React = React;

// Web API polyfills
globalThis.File = File as any;
globalThis.Blob = Blob as any;
globalThis.FormData = FormData as any;
globalThis.Headers = Headers as any;
globalThis.Request = Request as any;
globalThis.Response = Response as any;

// Optional fetch mock
if (!globalThis.fetch) {
  globalThis.fetch = jest.fn();
}
