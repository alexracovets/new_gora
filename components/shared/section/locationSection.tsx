'use client';

import React from 'react';
import { Section } from '../section';
import { Container } from '../container';

export const LocationSection: React.FC = () => {

    const section = [
        {
            number: 1,
            info: 'Дорога до Келії україномовного осередку та дороги довкола',
        },
        {
            number: 2,
            info: 'Дорога до Келії україномовного осередку та дороги довкола',
        },
        {
            number: 3,
            info: 'Дорога до Келії україномовного осередку та дороги довкола',
        },
        {
            number: 4,
            info: 'Дорога до Келії україномовного осередку та дороги довкола',
        },
        {
            number: 5,
            info: 'Дорога до Келії україномовного осередку та дороги довкола',
        },
        {
            number: 6,
            info: 'Дорога до Келії україномовного осередку та дороги довкола',
        },
        {
            number: 7,
            info: 'Дорога до Келії україномовного осередку та дороги довкола',
        },
        {
            number: 8,
            info: 'Дорога до Келії україномовного осередку та дороги довкола',
        },
        {
            number: 9,
            info: 'Дорога до Келії україномовного осередку та дороги довкола',
        },
        {
            number: 10,
            info: 'Дорога до Келії україномовного осередку та дороги довкола',
        },
    ]

    return (
        <Section className='py-[10rem]'>
            <Container className='pb-[4rem] flex justify-end items-center'>
                <div className='flex flex-col justify-start items-start w-full gap-[2rem]'>
                    {
                        section.map((item) => {
                            return (
                                <div key={item.number} className='flex justify-start items-center w-full'>
                                    <div className='flex justify-center items-center text-[3.2rem] font-[600] w-[9.3rem] h-[9.3rem] rounded-[1rem] bg-regal-green mr-[2rem]'>
                                        {item.number}
                                    </div>
                                    <div className='text-[2.2rem] font-[600]'>
                                        {item.info}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </Section>
    );
};