// AnalyticsProvider.tsx

"use client";

import { FormoAnalyticsProvider } from "@formo/analytics";
import React, { FC } from "react";

type FormoAnalyticsProviderProps = {
  writeKey: string;
  children: React.ReactNode;
};

export const AnalyticsProvider: FC<FormoAnalyticsProviderProps> = ({
  writeKey,
  children,
}) => {
  return (
    <FormoAnalyticsProvider writeKey={writeKey}>
      {children}
    </FormoAnalyticsProvider>
  );
};

export default AnalyticsProvider;
