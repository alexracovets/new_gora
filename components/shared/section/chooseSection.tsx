'use client';

import { FaSearchLocation, FaUnlockAlt, FaDollarSign, FaGift } from "react-icons/fa";
import React from 'react';
import Link from "next/link";

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from "@/components/ui/button";

export const ChooseSection: React.FC = () => {
    const iconSize = '2.5rem';
    const iconColor = '#171717';

    const numberList = [
        {
            number: 1,
            info: 'Обери ділянку',
            icon: <FaSearchLocation size={iconSize} color={iconColor} />
        },
        {
            number: 2,
            info: 'Забронюй',
            icon: <FaUnlockAlt size={iconSize} color={iconColor} />
        },
        {
            number: 3,
            info: 'Оплати',
            icon: <FaDollarSign size={iconSize} color={iconColor} />
        },
        {
            number: 4,
            info: <>Отримай <br /> сертифікат та <br /> подарунок</>,
            icon: <FaGift size={iconSize} color={iconColor} />
        }
    ]

    return (
        <Section className="rounded-[4rem] bg-regal-white mt-[-4rem]">
            <Container>
                <div className="flex justify-between items-center gap-[9.4rem] w-full">
                    {
                        numberList.map((item) => {
                            return (
                                <div key={item.number} className="flex justify-start items-center">
                                    <div className="flex justify-center items-center w-[9.3rem] min-w-[9.3rem] h-[9.3rem] bg-regal-green rounded-[1rem] mr-[2rem]">
                                        {item.icon}
                                    </div>
                                    <div className="text-[2.2rem] font-[600] leading-[2.682rem]">
                                        {item.info}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-between items-start my-[10rem]">
                    <div className="flex flex-col justify-start items-start w-[54.5rem]">
                        <div className="text-[5rem] font-[500] mb-[4rem] leading-[5.5rem]">
                            Підтримайте відновлення осередку на Афоні
                        </div>
                        <Button>
                            Стати опікуном
                        </Button>
                    </div>
                    <div className="text-[1.8rem] w-[77.1rem] leading-[2.194rem]">
                        <p className="mb-[2.4rem]">
                            Територія україномовного осередку на Афоні складає 1,6 ГА або ж приблизно 16000 кв.м. та знаходиться у закинутому і зарослому хащами стані.
                        </p>
                        <p className="mb-[2.4rem]">
                            Обери розмір території відновлення щоб підтримати та привести до ладу. <br />
                            Всі кошти поступають виключно на рахунок БФ “Святих Архангелів” ПЦУ, що опікується відбудовою.
                        </p>
                        <p className="mb-[2.4rem]">
                            Вкажи тел та e-mail і ми надішлемо вам сертифікат опікуна “ГОРА” на Афоні на знак подяки та пам’ятний сувенір.
                        </p>
                        <p className="mb-[2.4rem]">
                            Щороку виходитиме том з усіма опікунами “ГОРИ” (Ваше фото та коротка інформація про вас) зберігатиметься у відбудованому осередку. Так буде створено бібліотеку відбудовників на Афоні, а копія такого тому також буде у вас.
                        </p>
                        <p className="mb-[2.4rem]">
                            Наразі на Афоні працює <Link href={'https://www.facebook.com/shumylo'} className="underline">Сергій Шумило</Link>, історик та дослідник Міжнародного інституту афонської спадщини України ні Афоні, який знаходить десятки архівних книг, що засвідчують фінансову підтримку запорізьких козаків у будівництві скитів та келій.
                        </p>
                        <p><b className="font-[600]">Давайте продовжувати традицію наших предків!</b></p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};