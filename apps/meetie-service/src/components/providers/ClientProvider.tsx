"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";

export function ClientProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
