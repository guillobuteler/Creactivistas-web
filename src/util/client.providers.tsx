"use client";

import ActusContextProvider from "@/app/actus/actus.context.hook";
import React from "react"

type ClientProvidersProps = {
    children: React.ReactNode;
}

export default function ClientProviders ({children}: ClientProvidersProps) {
    return (
        <ActusContextProvider>
            {children}
        </ActusContextProvider>
    )
}