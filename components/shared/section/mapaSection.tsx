'use client';

import React from 'react';

import CanvasExperience from '@/components/three/canvasExperience';
import { Calculator } from '@/components/shared/calculator';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';

export const MapaSection: React.FC = () => {
    return (
        <Section className='p-0 w-full h-[100dvh] bg-regal-green'>
            <CanvasExperience />
            <Container className='relative'>
                <Calculator />
            </Container>
        </Section >
    );
};