'use client';

import React from 'react';

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { cn } from '@/lib/utils';

export const StartSection: React.FC = () => {
    return (
        <Section className={cn(
            'bg-regal-green min-h-[100dvh] flex justify-start items-end',
            'max-mobile:min-h-0'
        )}>
            <Container>
                <div className={cn(
                    'mb-[7.5rem]',
                    'mb-0'
                )}>
                    <h1 className={cn(
                        'text-[3.2rem]',
                        'max-mobile:text-[1.2rem] max-mobile:mb-[1.2rem]'
                    )}>
                        Громадська опікунська рада Афону
                    </h1>
                    <p className={cn(
                        'text-[6.6rem] font-[500] max-w-[122.3rem] leading-[8.045rem]',
                        'max-mobile:text-[2rem] max-mobile:leading-[2.438rem]'
                    )}>
                        “Ділити чесноту з іншими <br /> означає її багаторазово множити”
                    </p>
                </div>
            </Container>
        </Section>
    );
};