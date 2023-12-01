"use client";

import ActusContextProvider from "@/app/actus/actus.context";
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