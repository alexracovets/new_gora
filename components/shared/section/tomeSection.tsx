'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';

export const TomeSection: React.FC = () => {
    return (
        <Section className={cn(
            'bg-second-gray pb-[11rem]',
            'max-tablet:pb-[6rem]',
        )}>
            <Container>
                <div className={cn(
                    'flex justify-between items-center',
                    'max-mobile:flex-col'
                )}>
                    <div className={cn(
                        'flex flex-col justify-start items-start w-[54.5rem]',
                        'max-tablet:w-[26.817rem]',
                        'max-mobile:w-full max-mobile:mb-[4rem]'
                    )}>
                        <div className={cn(
                            'text-[5rem] font-[500] mb-[3rem] leading-[5.5rem]',
                            'max-tablet:text-[2.4rem] max-tablet:leading-[2.64rem]'
                        )}>
                            Встигни потрапити до першого тому ГОРИ на Афоні
                        </div>
                        <div className={cn(
                            'text-[2.5rem] leading-[3.5rem] font-[300] mb-[3rem]',
                            'max-tablet:text-[1.2rem] max-tablet:leading-[1.68rem]'
                        )}>
                            <p className='mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem]'>
                                Ви станете тією людиною, хто творить історію – вперше з 18 століття відбудовуєте осередок українства на Афоні. Відкрий свою сторінку історії!
                            </p>
                            <p className='font-[500]'>
                                Напиши її разом з нами на Святій Горі Афон
                            </p>
                        </div>
                        <Link href='/location'>
                            <Button>
                                Переглянути локації
                            </Button>
                        </Link>
                    </div>
                    <div className={cn(
                        'flex justify-center items-center w-[77.1rem]',
                        'max-tablet:w-[38rem]',
                        'max-mobile:w-full'
                    )}>
                        <div className={cn(
                            'relative w-[80rem] h-[53rem]',
                            'max-tablet:w-[40rem] max-tablet:h-[26.5rem]',
                            'max-mobile:w-[28rem] max-mobile:h-[18.55rem]'
                        )}>
                            <Image src='img/books.png' fill alt='books' />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};