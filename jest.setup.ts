import '@testing-library/jest-dom';

global.File = globalThis.File as any;
global.Blob = globalThis.Blob as any;
global.FormData = globalThis.FormData as any;