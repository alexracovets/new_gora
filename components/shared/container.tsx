'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props { className?: string; }

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <div className={cn(
            'mx-[8.8rem]',
            'max-mobile:mx-[2rem]',
            className)}>{children}</div>
    );
};