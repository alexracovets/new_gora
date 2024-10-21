'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props { className?: string; }

export const Section: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <section className={cn(
            'py-[10rem] relative z-[0]',
            'max-tablet:py-[5rem]',
            className)}> {children}</section >
    );
};