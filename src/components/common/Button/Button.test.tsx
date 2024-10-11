import { createRef } from "react";

import { screen, fireEvent } from "@testing-library/dom";

import { describe, expect, test, it, vi } from "vitest";

import Button from "@/components/common/Button/Button";

import customRender from "@/__test__/customRender";

describe("components/button/Button", () => {
  test("button is defined", () => {
    expect(Button).toBeDefined();
  });

  describe("children", () => {
    test("has string children", () => {
      customRender(<Button>button</Button>);
      expect(screen.getByText("button")).toBeInTheDocument();
    });

    test("has heading children", () => {
      customRender(
        <Button>
          <h1>button</h1>
        </Button>,
      );
      expect(screen.getByRole("heading")).toBeInTheDocument();
    });
  });

  describe("onClick test", () => {
    it("active onClick", () => {
      const onClickMocking = vi.fn();

      customRender(<Button onClick={onClickMocking}>button</Button>);

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(onClickMocking).toBeCalledTimes(1);
    });
  });

  describe("ref test", () => {
    it("ref connect button element", () => {
      const ref = createRef<HTMLButtonElement>();

      customRender(<Button ref={ref}>test</Button>);

      const button = screen.getByRole("button");

      expect(ref.current).toBe(button);
    });
  });
});
