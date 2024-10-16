'use client';

import React from 'react';

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';

export const StartSection: React.FC = () => {
    return (
        <Section className='bg-regal-green min-h-[100dvh] flex justify-start items-end'>
            <Container>
                <div className='mb-[7.5rem]'>
                    <h1 className='text-[3.2rem]'>Громадська опікунська рада Афону</h1>
                    <p className='text-[6.6rem] font-[500] max-w-[122.3rem] leading-[8.045rem]'>“Ділити чесноту з іншими <br /> означає її багаторазово множити”</p>
                </div>
            </Container>
        </Section>
    );
};