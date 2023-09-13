"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

type ProviderProps = {
  children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Provider;
