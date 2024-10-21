'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

import useForm from '@/store/useForm';
import useStoreGrid from '@/store/useStoreGrid';

interface GridItem { price: number; count: number; }

export const Calculator: React.FC = () => {
    const activeGrids = useStoreGrid(state => state.activeGrids);
    const setIsModal = useForm(state => state.setIsModal);
    const [priceTotal, setPriceTotal] = useState(0);
    const [sections, setSections] = useState<{ price: number, count: number }[]>([]);

    const openModal = () => {
        setIsModal(true);
    }

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
        <div className={cn(
            'absolute left-[8.8rem] bottom-[2dvh] flex justify-between items-center w-[133.9rem] py-[1rem] px-[2rem] bg-regal-black rounded-[2.5rem]',
            'max-tablet:left-[2.9rem] max-tablet:w-[68.7rem] max-tablet:rounded-[1.5rem] max-tablet:py-[2rem]',
            'max-mobile:left-0 max-mobile:bottom-0 max-mobile:w-full max-mobile:flex-col max-mobile:rounded-none max-mobile:rounded-t-[1rem]'
        )}>
            <div className={cn(
                'flex justify-start items-center gap-[2rem]',
                'max-tablet:gap-[1.2rem]',
                'max-mobile:w-full max-mobile:gap-[1.133rem] max-mobile:mb-[3rem]'
            )}>
                {sections.map((section: GridItem, index) => {
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
                        <div key={index} className={cn(
                            'flex flex-col justify-center items-center w-[9rem] h-[9rem] rounded-[2rem] bg-[#F7FBFE]',
                            'max-tablet:w-[6rem] max-tablet:h-[6rem] max-tablet:rounded-[1rem]',
                            'max-mobile:w-[6.1rem] max-mobile:h-[3.2rem] max-mobile:flex-row  max-mobile:rounded-[.6rem]',
                            checkColor())}>
                            <div className={cn(
                                'text-[1.5rem] font-[700] mb-[.2rem] leading-[1]',
                                'max-tablet:text-[1rem] max-tablet:m-0 max-tablet:mb-[.4rem]',
                                'max-mobile:text-[1rem] max-mobile:m-0 max-mobile:mr-[.6rem]'
                            )}>
                                {section.price + ' $'}
                            </div>
                            <div className={cn(
                                'text-[4rem] font-[300] leading-[1]',
                                'max-tablet:text-[2.6rem]',
                                'max-mobile:text-[1rem]'
                            )}>
                                x{section.count}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cn(
                'flex flex-col justify-start items-start min-w-[28rem]',
                'max-tablet:min-w-0 max-tablet:w-full'
            )}>
                <div className={cn(
                    'text-[3rem] text-regal-white font-[300] mb-[1rem] leading-[1]',
                    'max-tablet:text-[1.6rem] max-tablet:mb-[1.2rem]',
                    'max-mobile:mb-[2.6rem]'
                )}>
                    Вартість: {priceTotal} $
                </div>
                <div onClick={openModal} className='max-mobile:w-full'>
                    <Button variant={'secondary'} className='max-mobile:w-full'>
                        Зробити внесок
                    </Button>
                </div>
            </div>
        </div>
    );
};