import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import ClientProvider from "@/components/providers/client-provider";
import ServerProvider from "@/components/providers/server-provider";
import { Modals } from "@/components/modals";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/layout.css";
import "@/styles/editor.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Slack Clone",
    template: "%s - Slack Clone",
  },
  description: "A real-time Slack clone",
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ServerProvider>
          <ClientProvider>
            <Modals />
            {children}
            <Toaster richColors theme="light" position="bottom-center" />
          </ClientProvider>
        </ServerProvider>
      </body>
    </html>
  );
}
