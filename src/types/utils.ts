import type * as React from "react";

export type PropsWithChildren<T extends Record<string, any> = Record<string, unknown>> = T & { children:React.ReactNode }
