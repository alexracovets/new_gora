'use client';

import { FaSearchLocation, FaUnlockAlt, FaDollarSign, FaGift } from "react-icons/fa";
import React from 'react';
import Link from "next/link";

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ChooseSection: React.FC = () => {
    const iconStyle = "w-[2.5rem] h-[2.5rem] max-tablet:w-[1.5rem] max-tablet:h-[1.5rem] max-mobile:w-[1.1rem] max-mobile:h-[1.1rem]";
    const iconColor = '#171717';
    const hideHR = "max-tablet:hidden";

    const numberList = [
        {
            number: 1,
            info: <span className="max-tablet:text-nowrap">Обери ділянку</span>,
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
            info: <>Отримай <br className={hideHR} /> сертифікат та <br className={hideHR} /> подарунок</>,
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
                                        'flex justify-center items-center w-[9.3rem] min-w-[9.3rem] h-[9.3rem] bg-regal-green rounded-[1rem] mr-[2rem]',
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
                            Територія україномовного осередку на Афоні складає 1,6 ГА або ж приблизно 16000 кв.м. та знаходиться у закинутому і зарослому хащами стані.
                        </p>
                        <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem]">
                            Обери розмір території відновлення щоб підтримати та привести до ладу. <br />
                            Всі кошти поступають виключно на рахунок БФ “Святих Архангелів” ПЦУ, що опікується відбудовою.
                        </p>
                        <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem]">
                            Вкажи тел та e-mail і ми надішлемо вам сертифікат опікуна “ГОРА” на Афоні на знак подяки та пам’ятний сувенір.
                        </p>
                        <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem]">
                            Щороку виходитиме том з усіма опікунами “ГОРИ” (Ваше фото та коротка інформація про вас) зберігатиметься у відбудованому осередку. Так буде створено бібліотеку відбудовників на Афоні, а копія такого тому також буде у вас.
                        </p>
                        <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem]">
                            Наразі на Афоні працює <Link href={'https://www.facebook.com/shumylo'} className="underline inline">Сергій Шумило</Link>, історик та дослідник Міжнародного інституту афонської спадщини України ні Афоні, який знаходить десятки архівних книг, що засвідчують фінансову підтримку запорізьких козаків у будівництві скитів та келій.
                        </p>
                        <p className="max-mobile:mb-[3rem]"><b className="font-[600]">Давайте продовжувати традицію наших предків!</b></p>
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
            </Container>
        </Section>
    );
};