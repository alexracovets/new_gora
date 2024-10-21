'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props { className?: string; id?: string }

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, id, children }) => {
    return (
        <div id={id} className={cn(
            'px-[8.8rem]',
            'max-tablet:px-[3rem]',
            'max-mobile:px-[2rem]',
            className)}>{children}</div>
    );
};