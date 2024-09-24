import { PropsWithChildren } from "react";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

const ServerProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConvexAuthNextjsServerProvider>
      {children}
    </ConvexAuthNextjsServerProvider>
  )
}

export default ServerProvider;