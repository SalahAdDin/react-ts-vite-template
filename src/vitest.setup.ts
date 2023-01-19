import { afterAll, afterEach, beforeAll } from "vitest";

import "@testing-library/react";

import server from "../mocks/server";

// Establish API mocking before all tests.

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
