import type { Meta, StoryObj } from "@storybook/react";

import type { ButtonProps } from "@/components/common/Button/Button";
import Button from "@/components/common/Button/Button";
import mdx from "@/components/common/Button/Button.mdx";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      page: mdx,
    },
  },
  tags: ["!autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "outline", "outlinePrimary", "disabled"],
      description: "Button의 배경색 스타일",
      table: {
        type: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "md", "lg", "xl"],
      description: "Button의 크기 스타일",
      table: {
        type: { summary: "default" },
      },
    },
    children: {
      control: { type: "text" },
      description: "Button에 표시할 내용",
      table: {
        type: { summary: "button" },
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "default",
    size: "default",
    children: "button",
  },
};

export const VariantProps: StoryObj<typeof Button> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">default</p>
        <Button size="sm">
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">secondary</p>
        <Button size="sm" variant="secondary">
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">outline</p>
        <Button size="sm" variant="outline">
          <p className="text-[#adb5bd]">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">outlinePrimary</p>
        <Button size="sm" variant="outlinePrimary">
          <p className="text-primary-400">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">disabled</p>
        <Button size="sm" variant="disabled">
          <p className="text-white">button</p>
        </Button>
      </div>
    </div>
  ),
};

export const SizeProps: StoryObj<typeof Button> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[160px]">sm(124px)</p>
        <Button size="sm">
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[160px]">default(206px)</p>
        <Button>
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[160px]">md(254px)</p>
        <Button size="md">
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[160px]">lg(280px)</p>
        <Button size="lg">
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[160px]">xl(343px)</p>
        <Button size="xl">
          <p className="text-white">button</p>
        </Button>
      </div>
    </div>
  ),
};

// export const Secondary: Story = {
//   args: {
//     ...Primary.args,
//     variant: "secondary",
//   },
// };
