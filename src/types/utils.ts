/* eslint-disable @typescript-eslint/no-explicit-any */
import type * as React from 'react';

export type PropsWithChildren<T extends Record<string, any> = Record<string, any> >
    = { children:React.ReactNode } & T;
