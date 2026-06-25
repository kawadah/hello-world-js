import { expect, test } from "vitest"

import { helloWorld } from "./index"

test("returns Hello, world!", () => {
  expect(helloWorld()).toBe("Hello, world!")
})
