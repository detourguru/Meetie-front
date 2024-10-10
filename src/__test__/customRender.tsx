import { type ReactElement } from "react";

import { render, type RenderOptions } from "@testing-library/react";

import { ClientProvider } from "@/components/providers/ClientProvider";

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: ClientProvider, ...options });
};

export default customRender;
