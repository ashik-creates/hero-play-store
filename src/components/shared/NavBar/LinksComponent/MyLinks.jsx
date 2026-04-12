"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLinks = ({href,children}) => {
    const pathName = usePathname();
    return (
        <Link className={`${pathName === href ? "text-pink-500 border-b-2 border-pink-500 p-2":""}`} href={href}>
            {children}
        </Link>
    );
};

export default MyLinks;