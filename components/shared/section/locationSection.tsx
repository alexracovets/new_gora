'use client';

import React from 'react';
import { cn } from '@/lib/utils';

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';

export const LocationSection: React.FC = () => {

    const section = [
        {
            number: 1,
            info: 'Дорога до Келії україномовного осередку та дороги довкола',
        },
        {
            number: 2,
            info: 'Територія виноградника',
        },
        {
            number: 3,
            info: 'Паломницький будинок із трапезною',
        },
        {
            number: 4,
            info: 'Господарська будівля',
        },
        {
            number: 5,
            info: 'Келія Св. Архангелів',
        },
        {
            number: 6,
            info: 'Башня-альтанка для молитовних розмов',
        },
        {
            number: 7,
            info: 'Лісова тераса-балкон',
        },
        {
            number: 8,
            info: 'Печера воїнів-Героїв',
        },
        {
            number: 9,
            info: 'Архондарик – будиночок прийому гостей',
        },
        {
            number: 10,
            info: 'Територія сонячних панелей',
        },
    ]

    return (
        <Section className={cn(
            'py-[10rem]',
            'max-mobile:py-[5rem]'
        )}>
            <Container className={cn(
                'pb-[4rem] flex justify-end items-center',
                'max-mobile:pb-[1rem]'
            )}>
                <div className='flex flex-col justify-start items-start w-full gap-[2rem]'>
                    {
                        section.map((item) => {
                            return (
                                <div key={item.number} className='flex justify-start items-center w-full'>
                                    <div
                                        className={cn(
                                            'flex justify-center items-center text-[3.2rem] font-[600] w-[9.3rem] h-[9.3rem] rounded-[1rem] bg-regal-green mr-[2rem]',
                                            'max-mobile:text-[2rem] max-mobile:w-[3.6rem] max-mobile:h-[3.6rem] max-mobile:min-w-[3.6rem]'
                                        )}
                                    >
                                        {item.number}
                                    </div>
                                    <div className={cn(
                                        'text-[2.2rem] font-[600]',
                                        'max-mobile:text-[1.6rem] max-mobile:leading-[1.95rem]'
                                    )}>
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