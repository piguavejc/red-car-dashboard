'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface SessionAuthProps {
 children: React.ReactNode;
}
const SessionAuth = (props: SessionAuthProps) => {
 return <SessionProvider>{props.children}</SessionProvider>;
};

export { SessionAuth };
