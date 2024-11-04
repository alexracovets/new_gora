'use client';

import { cn } from '@/lib/utils';
import Link from "next/link";
import React from 'react';

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from "@/components/ui/button";

export const StartSection: React.FC = () => {
    return (
        <Section className={cn(
            'bg-regal-black flex justify-start items-start pt-[33.1rem]',
            'max-tablet:pt-[16.2rem] max-tablet:pb-[8rem]',
            'max-mobile:min-h-0 max-mobile:pt-[12rem]'
        )} id="start">
            <Container>
                <div className={cn(
                    'mb-[7.5rem]',
                    'mb-0'
                )}>
                    <h1 className={cn(
                        'text-[3.2rem] text-regal-white',
                        'max-tablet:text-[1.6rem] max-tablet:mb-[1.4rem]',
                        'max-mobile:text-[1.2rem] max-mobile:mb-[1.2rem]'
                    )}>
                        Громадська опікунська рада Афону
                    </h1>
                    <p className={cn(
                        'text-[6.6rem] text-regal-white font-[500] max-w-[122.3rem] leading-[8.045rem]',
                        'max-tablet:text-[3.2rem] max-tablet:leading-[3.901rem]',
                        'max-mobile:text-[2rem] max-mobile:leading-[2.438rem]'
                    )}>
                        “Ділити чесноту з іншими <br /> означає її багаторазово множити”
                    </p>
                    <Link href={'/mapa'} className={cn(
                        'flex justify-end w-full',
                        'max-mobile:justify-start'
                    )}>
                        <Button className="mt-[5rem] bg-regal-white">
                            Стати опікуном
                        </Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
};