'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from "@/components/ui/button";

export const HistorySection: React.FC = () => {
    return (
        <Section className='pt-[7.4rem] pb-[12.5rem]'>
            <Image src='img/history.jpg' fill alt='history' className="object-cover z-[-1]" />
            <Container className='py-[7.5rem] flex justify-end items-center'>
                <div className='relative w-[54.5rem] h-[33.7rem] px-[11.3rem] pt-[11.3rem]'>
                    <Image src='svg/frame.svg' fill alt='frame' className='z-[-1]' />
                    <div className='relative w-[10.217rem] h-[3.4rem] mb-[2.1rem]'>
                        <Image src='svg/logo_icon.svg' fill alt='logo_icon' />
                    </div>
                    <div className='text-[2.5rem] font-[300] mb-[2.1rem]'>
                        З тебе почнеться історія!
                    </div>
                    <Link href='/mapa'>
                        <Button>
                            Перейти до мапи
                        </Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
};