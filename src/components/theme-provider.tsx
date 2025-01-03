"use client"
// import { scan } from "react-scan";
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"


// if (typeof window !== "undefined") {
//   scan({
//     enabled: true,
//     log: true,
//   });
// }

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
