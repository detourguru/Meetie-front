import { useCallback, useRef, useState } from "react";

import type { Meta, StoryFn } from "@storybook/react";

import Textarea, { type TextareaProps } from "@/components/common/Textarea/Textarea";
import mdx from "@/components/common/Textarea/Textarea.mdx";

const meta: Meta<typeof Textarea> = {
  title: "Example/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      page: mdx,
    },
  },
  tags: ["!autodocs"],
};

export default meta;

const PrimaryTemplate: StoryFn<TextareaProps> = ({ ...props }) => {
  const textareaRef = useRef(null);
  const [value, setValue] = useState("12345");

  const handleChangeValue = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return (
    <div className="w-[300px]">
      <Textarea ref={textareaRef} value={value} autoFocus onChange={handleChangeValue} {...props} />
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
