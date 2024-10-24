import type { Meta, StoryObj } from "@storybook/react";

import type { AvatarProps } from "@/components/common/Avatar/Avatar";
import Avatar from "@/components/common/Avatar/Avatar";
import mdx from "@/components/common/Avatar/Avatar.mdx";

import ProfileImg from "/public/img/img-white-example.jpeg";

const meta: Meta<typeof Avatar> = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      page: mdx,
    },
  },
  tags: ["!autodocs"],
  argTypes: {
    outline: {
      control: { type: "select" },
      options: ["default", "gray", "primary"],
      description: "Avatar의 테두리 스타일",
      table: {
        type: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "md", "sm", "lg"],
      description: "Avatar의 크기 스타일",
      table: {
        type: { summary: "default" },
      },
    },
    src: {
      control: { type: "text" },
      description: "Avatar의 이미지 url",
      table: {
        type: { summary: "img" },
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<AvatarProps> = {
  args: {
    outline: "default",
    size: "default",
    src: ProfileImg.src,
  },
};

export const OutlineProps: StoryObj<typeof Avatar> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">default</p>
        <Avatar src={ProfileImg.src} />
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">gray</p>
        <Avatar src={ProfileImg.src} outline="gray" />
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">primary</p>
        <Avatar src={ProfileImg.src} outline="primary" />
      </div>
    </div>
  ),
};

export const SizeProps: StoryObj<typeof Avatar> = {
  render: () => (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">sm(36px)</p>
        <Avatar src={ProfileImg.src} size="sm" />
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">md(50px)</p>
        <Avatar src={ProfileImg.src} size="md" />
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">default(60px)</p>
        <Avatar src={ProfileImg.src} />
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">lg(100px)</p>
        <Avatar src={ProfileImg.src} size="lg" />
      </div>
    </div>
  ),
};

export const SrcProps: StoryObj<typeof Avatar> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <a href="https://images.unsplash.com/photo-1729704414861-42ecf6c9db59">
          <p className="text-medium-18 w-[570px]">
            https://images.unsplash.com/photo-1729704414861-42ecf6c9db59
          </p>
        </a>
        <Avatar src="https://images.unsplash.com/photo-1729704414861-42ecf6c9db59" />
      </div>
      <div className="flex gap-4 items-center">
        <a href="https://images.unsplash.com/photo-1728327511232-f387c138a097">
          <p className="text-medium-18 w-[570px]">
            https://images.unsplash.com/photo-1728327511232-f387c138a097
          </p>
        </a>
        <Avatar src="https://images.unsplash.com/photo-1728327511232-f387c138a097" />
      </div>
    </div>
  ),
};
