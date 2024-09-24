import { PropsWithChildren } from "react";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

export default ({ children }: PropsWithChildren) => {
  return (
    <ConvexAuthNextjsServerProvider>
      {children}
    </ConvexAuthNextjsServerProvider>
  )
}