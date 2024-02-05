"use client";

import { Session } from "inspector";
import { SessionProvider } from "next-auth/react"
import React, { ReactNode } from "react";



const AuthProvider = ({children}: {children: ReactNode}) => {
    return ( 
        <SessionProvider>
            {children}
        </SessionProvider>
     );
}
 
export default AuthProvider;