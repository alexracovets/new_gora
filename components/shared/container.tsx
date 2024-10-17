'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props { className?: string; id?: string }

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, id, children }) => {
    return (
        <div id={id} className={cn(
            'mx-[8.8rem]',
            'max-mobile:mx-[2rem]',
            className)}>{children}</div>
    );
};