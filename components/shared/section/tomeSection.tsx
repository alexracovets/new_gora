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
        <Section className='bg-second-gray pb-[11rem]'>
            <Container>
                <div className={cn(
                    'flex justify-between items-start',
                    'max-mobile:flex-col'
                )}>
                    <div className={cn(
                        'flex flex-col justify-start items-start w-[54.5rem]',
                        'max-mobile:w-full max-mobile:mb-[4rem]'
                    )}>
                        <div className={cn(
                            'text-[5rem] font-[500] mb-[3rem] leading-[5.5rem]',
                            'max-mobile:text-[2.4rem] max-mobile:leading-[2.64rem]'
                        )}>
                            Встигни потрапити до першого тому ГОРИ на Афоні
                        </div>
                        <div className={cn(
                            'text-[2.5rem] leading-[3.5rem] font-[300] mb-[3rem]',
                            'max-mobile:text-[1.2rem] max-mobile:leading-[1.463rem]'
                        )}>
                            Ви станете тією людиною, хто творить історію – вперше з 18 століття відбудовується осередок українства на Афоні. Відкрий свою сторінку історії!
                        </div>
                        <Link href='/location'>
                            <Button>
                                Переглянути локації
                            </Button>
                        </Link>

                    </div>
                    <div className={cn(
                        'flex justify-center items-center w-[77.1rem]',
                        'max-mobile:w-full'
                    )}>
                        <div className={cn(
                            'relative w-[63.3rem] h-[34.458rem]',
                            'max-mobile:w-[27.7rem] max-mobile:h-[15.079rem]'
                        )}>
                            <Image src='svg/books.svg' fill alt='books' />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};