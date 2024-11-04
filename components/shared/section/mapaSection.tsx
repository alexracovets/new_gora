'use client';

import React from 'react';

import CanvasExperience from '@/components/three/canvasExperience';
import { Calculator } from '@/components/shared/calculator';
import { Section } from '@/components/shared/section';

export const MapaSection: React.FC = () => {
    return (
        <Section className='relative p-0 w-full h-[100dvh] bg-grid-100 flex justify-center items-center'>
            <CanvasExperience />
            <Calculator />
        </Section >
    );
};