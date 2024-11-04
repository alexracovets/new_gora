'use client';

import { FaSearchLocation, FaUnlockAlt, FaDollarSign, FaGift } from "react-icons/fa";
import React from 'react';
import Link from "next/link";

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ChooseSection: React.FC = () => {
    const iconStyle = "w-[2.5rem] h-[2.5rem] max-tablet:w-[1.5rem] max-tablet:h-[1.5rem] max-mobile:w-[1.1rem] max-mobile:h-[1.1rem]";
    const iconColor = '#FFFFFF';

    const numberList = [
        {
            number: 1,
            info: 'Обери площу опікунства',
            icon: <FaSearchLocation color={iconColor} className={iconStyle} />
        },
        {
            number: 2,
            info: 'Забронюй',
            icon: <FaUnlockAlt color={iconColor} className={iconStyle} />
        },
        {
            number: 3,
            info: 'Оплати',
            icon: <FaDollarSign color={iconColor} className={iconStyle} />
        },
        {
            number: 4,
            info: 'Отримай Три  подарунки',
            icon: <FaGift color={iconColor} className={iconStyle} />
        }
    ]

    return (
        <Section className={cn(
            'rounded-[4rem] bg-regal-white mt-[-4rem]',
            'max-tablet:rounded-[2rem] max-tablet:mt-[-2rem] max-tablet:pb-0',
            'max-mobile:rounded-[1rem] max-mobile:mt-[-1rem] max-mobile:pb-[5rem]'
        )}>
            <Container id='work'>
                <div className={cn(
                    'flex justify-between items-center gap-[9.4rem] w-full',
                    'max-tablet:gap-[4.734rem]',
                    'max-mobile:flex-col max-mobile:gap-[2rem]'
                )}>
                    {
                        numberList.map((item) => {
                            return (
                                <div key={item.number} className={cn(
                                    'flex justify-start items-center',
                                    'max-mobile:w-full'
                                )}>
                                    <div className={cn(
                                        'flex justify-center items-center w-[9.3rem] min-w-[9.3rem] h-[9.3rem] bg-regal-black rounded-[1rem] mr-[2rem]',
                                        'max-tablet:w-[4.6rem] max-tablet:min-w-[4.6rem] max-tablet:h-[4.6rem] max-tablet:mr-[1.2rem]',
                                        'max-mobile:w-[3.6rem] max-mobile:min-w-[3.6rem] max-mobile:h-[3.6rem]'
                                    )}>
                                        {item.icon}
                                    </div>
                                    <div className={cn(
                                        'text-[2.2rem] font-[600] leading-[2.682rem]',
                                        'max-tablet:text-[1.2rem] max-tablet:leading-[1.463rem]',
                                        'max-mobile:text-[1.6rem] max-mobile:leading-[1.95rem]'
                                    )}>
                                        {item.info}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={cn(
                    'flex justify-between items-start my-[10rem]',
                    'max-tablet:my-[5rem]',
                    'max-mobile:flex-col max-mobile:mt-[5rem] max-mobile:mb-0'
                )}>
                    <div className={cn(
                        'flex flex-col justify-start items-start w-[54.5rem]',
                        'max-tablet:w-[26.8rem]',
                        'max-mobile:w-full'
                    )}>
                        <div className={cn(
                            'text-[5rem] font-[500] mb-[4rem] leading-[5.5rem]',
                            'max-tablet:text-[2.4rem] max-tablet:leading-[2.64rem] max-tablet:mb-[2rem]',
                            'max-mobile:mb-[3rem]'
                        )}>
                            Підтримайте відновлення осередку на Афоні
                        </div>
                        <Link href={'/mapa'}>
                            <Button className={cn(
                                'max-mobile:hidden'
                            )}>
                                Стати опікуном
                            </Button>
                        </Link>
                    </div>
                    <div className={cn(
                        'text-[1.8rem] w-[77.1rem] leading-[2.194rem]',
                        'max-tablet:text-[1rem] max-tablet:w-[40.616rem] max-tablet:leading-[1.219rem]',
                        'max-mobile:text-[1.2rem] max-mobile:w-full max-mobile:leading-[1.463rem]'
                    )}>
                        <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem]">
                            Відбудова україномовного осередку на Афоні – це народний проєкт реконструкції та розбудови, а тому кожен бажаючий може взяти участь у ньому та внести свою лепту у відродження, стати опікуном!
                        </p>
                        <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem]">
                            Громадська опікунська рада Афону (скор. ГОРА) – це спільнота відповідальних людей (опікунів), які своїм грошовим внеском беруть опікунство над україномовним осередком на 2025 рік. Таке опікунство допоможе відбудові та в майбутньому формувати бюджет його життєдіяльності на кожен рік наперед.
                        </p>
                        <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[500]">
                            Відбудований осередок створить:
                        </p>
                        <ul className="flex flex-col gap-[.5rem] mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem]">
                            <li className={cn(
                                'relative pl-[1rem]',
                                'before:content-[""] before:absolute before:top-[.75rem] before:left-0 before:w-[.5rem] before:h-[.5rem] before:bg-regal-black before:rounded-[50%]',
                                'max-tablet:before:top-[.3rem]',
                                'max-mobile:before:top-[.5rem]'
                            )}>
                                Безкоштовне проживання та харчування всім паломникам;
                            </li>
                            <li className={cn(
                                'relative pl-[1rem]',
                                'before:content-[""] before:absolute before:top-[.75rem] before:left-0 before:w-[.5rem] before:h-[.5rem] before:bg-regal-black before:rounded-[50%]',
                                'max-tablet:before:top-[.3rem]',
                                'max-mobile:before:top-[.5rem]'
                            )}>
                                Безкоштовний трансфер на півострів Афон усім військовим;
                            </li>
                            <li className={cn(
                                'relative pl-[1rem]',
                                'before:content-[""] before:absolute before:top-[.75rem] before:left-0 before:w-[.5rem] before:h-[.5rem] before:bg-regal-black before:rounded-[50%]',
                                'max-tablet:before:top-[.3rem]',
                                'max-mobile:before:top-[.5rem]'
                            )}>
                                Безкоштовну духовно-психологічну реабілітацію ветеранам на Афоні;
                            </li>
                            <li className={cn(
                                'relative pl-[1rem]',
                                'before:content-[""] before:absolute before:top-[.75rem] before:left-0 before:w-[.5rem] before:h-[.5rem] before:bg-regal-black before:rounded-[50%]',
                                'max-tablet:before:top-[.3rem]',
                                'max-mobile:before:top-[.5rem]'
                            )}>
                                Відродить та продовжить українську духовну спадщину на Афоні;
                            </li>
                            <li className={cn(
                                'relative pl-[1rem]',
                                'before:content-[""] before:absolute before:top-[.75rem] before:left-0 before:w-[.5rem] before:h-[.5rem] before:bg-regal-black before:rounded-[50%]',
                                'max-tablet:before:top-[.3rem]',
                                'max-mobile:before:top-[.5rem]'
                            )}>
                                Створить місце сили України на Святій землі та щоденну молитву за українців та мир.
                            </li>
                        </ul>
                        <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[3rem] font-[500]">
                            “Встигни потрапити до першого тому ГОРА-2025”!
                        </p>
                        <Link href={'/mapa'}>
                            <Button className={cn(
                                'hidden',
                                'max-mobile:flex'
                            )}>
                                Стати опікуном
                            </Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className={cn(
                        'text-[5rem] font-[500] mb-[4rem] leading-[5.5rem]',
                        'max-tablet:text-[2.4rem] max-tablet:leading-[2.64rem] max-tablet:mb-[2rem]',
                        'max-mobile:mb-[3rem]'
                    )}>
                        Фото карти з підписами об’єктів:
                    </div>
                    <div className="relative w-full h-[75rem] rounded-[1rem] overflow-hidden cursor-pointer">
                        <Link href='pdf/map.pdf' target="_blank" rel="nofollow">
                            <Button className={cn(
                                'absolute left-[1rem] top-[1rem] bg-regal-white'
                            )}>
                                Відкрити в форматі PDF
                            </Button>
                        </Link>
                        <Image src='img/map.jpg' fill alt="map" className="object-cover z-[-1]" />
                    </div>
                </div>
            </Container>
        </Section>
    );
};