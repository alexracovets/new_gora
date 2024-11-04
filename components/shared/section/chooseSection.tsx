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

    const placeList = [
        {
            ua: 'Паломницький  Будинок.',
            en: 'Pilgrimage house.'
        },
        {
            ua: 'Виноградник.',
            en: 'Vineyard.'
        },
        {
            ua: 'Архондарик.',
            en: 'Archondaric (guest house).'
        },
        {
            ua: 'Сповідальний будинок.',
            en: 'Confessional house.'
        },
        {
            ua: 'Келія Святих Архангелів.',
            en: 'Cell of the Holy Archangels.'
        },
        {
            ua: 'Монаше кладовище.',
            en: 'Monks cemetery.'
        },
        {
            ua: 'Печера Героїв.',
            en: 'Cave of heroes.'
        },
        {
            ua: 'Терасні Сходи.',
            en: 'Terrace stairs.'
        },
        {
            ua: 'Лісова оглядова тераса.',
            en: 'Forest viewing terrace.'
        },
        {
            ua: 'Башня-альтанка.',
            en: 'Gazebo Tower.'
        },
        {
            ua: 'Сонячні панелі.',
            en: 'Solar Panels.'
        },
        {
            ua: 'Лісове Джерело.',
            en: 'Forest Spring.'
        }
    ]

    return (
        <Section className={cn(
            'rounded-[4rem] bg-regal-white mt-[-4rem]',
            'max-tablet:rounded-[2rem] max-tablet:mt-[-2rem]',
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
                    'max-mobile:flex-col max-mobile:mt-[5rem]'
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
                        'text-[2.5rem] w-[77.1rem] leading-[3.5rem]',
                        'max-tablet:text-[1.2rem] max-tablet:w-[40.616rem] max-tablet:leading-[1.68rem]',
                        'max-mobile:w-full'
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
                    <div className={cn(
                        'relative w-full h-[75rem] rounded-[1rem] overflow-hidden mb-[3rem]',
                        'max-tablet:h-[40rem]',
                        'max-mobile:h-[20rem]'
                    )}>
                        <Link href='pdf/map.pdf' target="_blank" rel="nofollow">
                            <Button className={cn(
                                'absolute left-[1rem] top-[1rem] bg-regal-white'
                            )}>
                                Відкрити в форматі PDF
                            </Button>
                        </Link>
                        <Image src='img/map.jpg' fill alt="map" className="object-cover z-[-1]" />
                    </div>
                    <div className={cn(
                        'flex justify-start items-start flex-wrap flex-col h-[18rem] gap-[1rem] w-full',
                        'max-tablet:h-15rem',
                        'max-mobile:h-auto max-mobile:flex-row max-mobile:gap-0 max-mobile:gap-y-[1rem]'
                    )}>
                        {placeList.map((item, index) => {
                            return (
                                <div key={index} className={cn(
                                    'w-[25%] flex',
                                    'max-tablet:w-[calc(100%/3)]',
                                    'max-mobile:w-[50%]'
                                )}>
                                    <div className={cn(
                                        'text-[1.8rem] font-[700] pr-[1rem] leading-[1]',
                                        'max-tablet:text-[1.2rem] max-tablet:pr-[.5rem]',
                                        'max-mobile:text-[1rem]'
                                    )}>
                                        {index + 1 + '.'}
                                    </div>
                                    <div className="flex flex-col">
                                        <div className={cn(
                                            'text-[1.8rem] font-[700] leading-[1]',
                                            'max-tablet:text-[1.2rem]',
                                            'max-mobile:text-[1rem] max-mobile:mb-[.5rem]'
                                        )}>
                                            {item.ua}
                                        </div>
                                        <div className={cn(
                                            'italic text-[1.8rem] font-[500] leading-[1.5]',
                                            'max-tablet:text-[1.2rem]',
                                            'max-mobile:text-[1rem] max-mobile:leading-[1.1]'
                                        )}>
                                            {item.en}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
};