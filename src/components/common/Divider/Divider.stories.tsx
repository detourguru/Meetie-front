import type { Meta, StoryObj } from "@storybook/react";

import Divider from "@/components/common/Divider/Divider";
import mdx from "@/components/common/Divider/Divider.mdx";

const meta: Meta<typeof Divider> = {
  title: "Example/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    docs: {
      page: mdx,
    },
  },
  tags: ["!autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Divider의 방향 스타일",
      table: {
        type: { summary: "horizontal" },
      },
    },
  },
};

export default meta;

export const DirectionProps: StoryObj<typeof Divider> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center w-[200px] h-[100px]">
        <p className="text-medium-18 w-[90px]">horizontal</p>
        <Divider className="bg-black" />
      </div>
      <div className="flex gap-4 items-center w-[200px] h-[100px]">
        <p className="text-medium-18 w-[90px]">vertical</p>
        <div className="flex justify-center h-[100px]">
          <Divider className="bg-black" direction="vertical" />
        </div>
      </div>
    </div>
  ),
};
