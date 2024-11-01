import { useCallback, useRef, useState } from "react";

import type { Meta, StoryFn } from "@storybook/react";

import Input, { type InputProps } from "@/components/common/Input/Input";
import mdx from "@/components/common/Input/Input.mdx";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      page: mdx,
    },
  },
  tags: ["!autodocs"],
};

export default meta;

const PrimaryTemplate: StoryFn<InputProps> = ({ ...props }) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("12345");

  const handleChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return (
    <div className="w-[300px]">
      <Input ref={inputRef} value={value} autoFocus onChange={handleChangeValue} {...props} />
    </div>
  );
};

export const Primary = {
  render: PrimaryTemplate,
  args: {
    disabled: false,
    readOnly: false,
    placeholder: "this is placeholder",
  },
};
