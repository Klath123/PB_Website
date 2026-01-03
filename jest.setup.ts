// jest.polyfills.ts
import { TextEncoder, TextDecoder } from "util";
import { File, Blob } from "buffer";

// These MUST exist before undici is imported
(globalThis as any).TextEncoder = TextEncoder;
(globalThis as any).TextDecoder = TextDecoder;
(globalThis as any).File = File;
(globalThis as any).Blob = Blob;
