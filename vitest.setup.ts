//vitest.setup.ts
import "@testing-library/jest-dom/vitest";

import { afterAll, beforeAll } from "vitest";
import { server } from "./src/mocks/mock";
import { afterEach } from "node:test";


beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
