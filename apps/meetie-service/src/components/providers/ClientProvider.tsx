"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";

export function ClientProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
