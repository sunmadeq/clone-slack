"use client";

import { PropsWithChildren, useState } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexAuthNextjsProvider } from "@convex-dev/auth/nextjs";
import { Provider } from "jotai";

const ClientProvider = ({ children }: PropsWithChildren) => {
  const [convex] = useState(() => new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!))

  return (
    <ConvexAuthNextjsProvider client={convex}>
      <Provider>{children}</Provider>
    </ConvexAuthNextjsProvider>
  );
}

export default ClientProvider;
