'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';

import useForm from '@/store/useForm';
import useStoreGrid from '@/store/useStoreGrid';
import { cn } from '@/lib/utils';

interface GridItem { price: number; count: number; }

export const Calculator: React.FC = () => {
    const activeGrids = useStoreGrid(state => state.activeGrids);
    const setIsModal = useForm(state => state.setIsModal);
    const [priceTotal, setPriceTotal] = useState(0);
    const [sections, setSections] = useState<{ price: number, count: number }[]>([]);

    useEffect(() => {
        const newSections: { price: number, count: number }[] = [];
        let newTotalPrice = 0;
        activeGrids.forEach((item: GridItem) => {
            newTotalPrice += item.price;
            const existingSection = newSections.find(s => s.price === item.price);

            if (existingSection) {
                existingSection.count += 1;
            } else {
                newSections.push({ price: item.price, count: 1 });
            }
        });

        setSections(newSections);
        setPriceTotal(newTotalPrice);
    }, [activeGrids]);

    return (
        <div className='absolute left-0 bottom-[2dvh] flex justify-between items-center w-full py-[2rem] px-[2rem] bg-regal-black rounded-[2.5rem]'>
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
                            <div className={cn('flex flex-col justify-center items-center w-[10rem] h-[10rem] rounded-[2rem] bg-[#F7FBFE]', checkColor())}>
                                <div className='text-[1.5rem] font-[700] mb-[.6rem] leading-[1]'>
                                    {section.price + ' $'}
                                </div>
                                <div className='text-[4rem] font-[300] leading-[1]'>
                                    x{section.count}
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
            <div className='flex flex-col justify-start items-start min-w-[28rem]'>
                <div className='text-[3rem] text-regal-white font-[300] mb-[1rem]'>
                    Вартість: {priceTotal} $
                </div>
                <Button variant={'secondary'} onClick={() => setIsModal(true)}>
                    Зробити внесок
                </Button>
            </div>
        </div>
    );
};