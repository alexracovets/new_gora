'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
 
import useStoreGrid from '@/store/useStoreGrid';
import { cn } from '@/lib/utils';

interface GridItem { price: number; count: number; }

export const Calculator: React.FC = () => {
    const activeGrids = useStoreGrid(state => state.activeGrids); 
    const [sections, setSections] = useState<{ price: number, count: number }[]>([]);

    useEffect(() => {
        const newSections: { price: number, count: number }[] = []; 
        activeGrids.forEach((item: GridItem) => { 
            const existingSection = newSections.find(s => s.price === item.price);

            if (existingSection) {
                existingSection.count += 1;
            } else {
                newSections.push({ price: item.price, count: 1 });
            }
        });

        setSections(newSections); 
    }, [activeGrids]);

    return (
        <div className='absolute left-0 bottom-[3.6dvh] flex justify-between items-center w-full py-[3.2rem] px-[3.4rem] bg-regal-black rounded-[4rem]'>
            <div className='flex justify-start items-center gap-[2rem]'>
                {sections.map((section: GridItem) => {
                    const checkColor = () => {
                        switch (section.price) {
                            case 100:
                                return 'bg-grid-100';
                            case 200:
                                return 'bg-grid-200';
                            case 300:
                                return 'bg-grid-300';
                            case 500:
                                return 'bg-grid-500';
                            default:
                                return 'bg-regal-white';
                        }
                    }
                    return (
                        <>
                            <div className={cn('flex flex-col justify-center items-center w-[13.4rem] h-[13.4rem] rounded-[3rem] bg-[#F7FBFE]', checkColor())}>
                                <div className='text-[1.8rem] font-[700] mb-[.6rem] leading-[1]'>
                                    {section.price + ' $'}
                                </div>
                                <div className='text-[5.533rem] font-[300] leading-[1]'>
                                    x{section.count}
                                </div>
                            </div>
                        </>

                    );
                })}
            </div>
            <div className='flex flex-col justify-start items-start'>
                <div className='text-[3.459rem] text-regal-white font-[300] mb-[2.6rem]'>
                    Вартість: 2900 $
                </div>
                <Button variant={'secondary'}>
                    Зробити внесок
                </Button>
            </div>
        </div>
    );
};