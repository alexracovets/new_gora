'use client';

import React from 'react';

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const TomeSection: React.FC = () => {
    return (
        <Section className='bg-second-gray pb-[11rem]'>
            <Container>
                <div className="flex justify-between items-start">
                    <div className="flex flex-col justify-start items-start w-[54.5rem]">
                        <div className="text-[5rem] font-[500] mb-[3rem] leading-[5.5rem]">
                            Встигни потрапити до першого тому ГОРИ на Афоні
                        </div>
                        <div className='text-[2.5rem] leading-[3.5rem] font-[300] mb-[3rem]'>
                            Ви станете тією людиною, хто творить історію – вперше з 18 століття відбудовується осередок українства на Афоні. Відкрий свою сторінку історії!
                        </div>
                        <Button>
                            Переглянути локації
                        </Button>
                    </div>
                    <div className="flex justify-center items-center w-[77.1rem]">
                        <div className='relative w-[63.3rem] h-[34.458rem]'>
                            <Image src='svg/books.svg' fill alt='books' />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};