import { describe, expect, test } from "vitest";

import Button from "@/components/common/Button/Button";

describe("components/button/Button", () => {
  test("정의되어 있어야 한다", () => {
    expect(Button).toBeDefined();
  });
});
