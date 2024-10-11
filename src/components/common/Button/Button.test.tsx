import customRender from "@/__test__/customRender";
import { screen, fireEvent } from "@testing-library/dom";
import { describe, expect, test, it, vi } from "vitest";

import Button from "@/components/common/Button/Button";

describe("components/button/Button", () => {
  test("정의되어 있어야 한다", () => {
    expect(Button).toBeDefined();
  });

  describe("children", () => {
    test("string children", () => {
      customRender(<Button>test</Button>);
      expect(screen.getByText("test")).toBeInTheDocument();
    });

    test("element children", () => {
      customRender(
        <Button>
          <h1>test</h1>
        </Button>,
      );
      expect(screen.getByRole("heading")).toBeInTheDocument();
    });
  });

  describe("onClick test", () => {
    it("active onClick", () => {
      const onClickMocking = vi.fn();

      customRender(<Button onClick={onClickMocking}>test</Button>);

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(onClickMocking).toBeCalledTimes(1);
    });
  });
});
