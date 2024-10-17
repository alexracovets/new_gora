'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

export const HistorySection: React.FC = () => {
    return (
        <Section className={cn(
            'pt-[7.4rem] pb-[12.5rem]',
            'max-mobile:pt-[1.5rem] max-mobile:pb-[2.6rem]'
        )}>
            <Image src='img/history.jpg' fill alt='history' priority className="object-cover z-[-1]" />
            <Container className={cn(
                'py-[7.5rem] flex justify-end items-center',
                'max-mobile:p-0'
            )}>
                <div className={cn(
                    'relative w-[54.5rem] h-[33.7rem] px-[11.3rem] pt-[11.3rem]',
                    'max-mobile:w-[15rem] max-mobile:h-[8.8rem] max-mobile:px-[2.2rem] max-mobile:py-[2.4rem]'
                )}>
                    <Image src='svg/frame.svg' fill alt='frame' className='z-[-1]' />
                    <div className={cn(
                        'relative w-[10.217rem] h-[3.4rem] mb-[2.1rem]',
                        'max-mobile:w-[2.5rem] max-mobile:h-[.8rem] max-mobile:mb-[.4rem]'
                    )}>
                        <Image src='svg/logo_icon.svg' fill alt='logo_icon' />
                    </div>
                    <div className={cn(
                        'text-[2.5rem] font-[300] mb-[2.1rem]',
                        'max-mobile:text-[1.2rem] max-mobile:mb-0'
                    )}>
                        З тебе почнеться історія!
                    </div>
                    <Link href='/mapa' className={cn(
                        'max-mobile:hidden'
                    )}>
                        <Button>
                            Перейти до мапи
                        </Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
};