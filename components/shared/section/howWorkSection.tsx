'use client';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import useForm from '@/store/useForm';

export const HowWorkSection: React.FC = () => {
    const setIsModal = useForm(state => state.setIsModal);

    const openModal = () => {
        setIsModal(true);
    }

    return (
        <>
            <div className={cn(
                'text-[2.5rem] leading-[3.5rem] py-[2rem]',
                'max-tablet:text-[1.2rem] max-tablet:leading-[1.68rem]'
            )}>
                <Accordion type="single" collapsible className="mb-[3rem]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={cn(
                            'relative text-[5rem] leading-[1.5] font-[500]',
                            'max-tablet:text-[2.4rem]',
                            'before:absolute before:flex before:justify-center before:items-center before:left-[40rem] before:top-0 before:content-["+"]',
                            'max-tablet:before:left-[20rem]',
                            '[&[data-state=open]]:before:content-["-"]'
                        )}>
                            Як це працює
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className={cn(
                                'text-[2.5rem] leading-[3.5rem] pt-[2rem]',
                                'max-tablet:text-[1.2rem] max-tablet:leading-[1.68rem]'
                            )}>
                                <p className="italic mb-[2rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[400]">
                                    Територія україномовного осередку на Афоні складає 1,6 ГА або ж приблизно 16000 кв.м. та знаходиться у закинутому і зарослому хащами стані. Обираючи певний розмір території відновлення, який ви б хотіли підтримати та привести до ладу ви обираєте опікунство в 1, 3, 5 чи 10 квадратів на мапі і відмічаєте їх за собою (бронь) та відправляєте запит нам. В залежності від розміщення внесок за такий квадрат (піксель) становить від 100 до 500 євро, а кількість яку можна обрати складає мінімум 3 та максимум 30. Саме такий зважений підхід робить опікунську раду Афону – громадською (або ж народною).
                                </p>
                                <p className="italic mb-[2rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[400]">
                                    Всі кошти поступають виключно на рахунок БФ “Святих Архангелів”, що опікується відбудовою. Вказуючи свої дані при оплаті (тел та e-mail) ми надішлемо вам сертифікат опікуна “ГОРА” на Афоні на знак подяки та пам’ятний сувенір відповідно до Вашої підтримки, а також Ваше прізвище та рід потрапляє в перше видання афонської збірки опікунів – ГОРА-2025, який також буде у Вас.
                                </p>
                                <p className="italic mb-[2rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[400]">
                                    “В гори одному не ходять. До ГОРА ми також запрошуємо з другом!”
                                </p>
                                <p className="italic mb-[2rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[400]">
                                    Кожного року виходитиме книга-том з усіма опікунами “ГОРИ” (Ваше фото та коротка інформація про вас) і зберігатиметься у відбудованому осередку, тим самим створюватиме бібліотеку та історію відбудовників на Афоні, а копія такого тому також буде у Вас.
                                </p>
                                <p className="italic mb-[2rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[400]">
                                    Наразі на Афоні працює Сергій Шумило, історик та дослідник Міжнародного інституту афонської спадщини України на Афоні (посилання на його <Link href='https://www.facebook.com/shumylo' target="_blank" rel="nofollow" className="inline underline">Facebook</Link> ), який знаходить десятки архівних книг, що засвідчують фінансову підтримку запорізьких козаків у будівництві скитів та келій. Давайте продовжувати цю благородну традицію наших предків!
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[300]">
                    В подальшому ця карта території у відбудованому осередку з усіма її опікунами буде роздрукована на металі та розміщена у вітальному холі паломницького будинку із зазначенням вашого прізвища та кількості квадратів україномовного осередку, опіку над якими ви обрали. Тільки уявіть собі, колись ваш партнер, друг, син чи родич приїде на Афон та знайде Ваше родове прізвище серед Афонських відбудовників! Все, як колись за часів Запорізької Січі! Та якщо раніше відбудовниками були лише гетьмани чи отамани, то тепер можемо бути ми з вами, кожен з вас допоки є вільне місце серед опікунів проєкту ГОРА!
                </p>
                <Link href={'/mapa'}>
                    <Button className="my-[3rem] mx-auto">
                        Стати опікуном
                    </Button>
                </Link>
                <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[300]">
                    Мета збору “ГОРА-2025” – це відбудова 1033-літньої Келії Св. Архангелів, розбудова осередку та приведення до ладу всієї території навколо неї (ландшафту). “ГОРА-2025” формується в період з 1.11.24 по 1.05.2025 року.
                </p>
                <div id="video" className={cn(
                    'w-[100rem] h-[56.3rem] my-[3rem] mx-auto rounded-[2rem] overflow-hidden',
                    'max-tablet:w-full max-tablet:h-[38.5rem]',
                    'max-mobile:h-[15.5rem] max-mobile:rounded-[1rem]'
                )}>
                    <ReactPlayer
                        url={'https://youtu.be/TdaKvO8tYuQ'}
                        width="100%"
                        height="100%"
                        controls
                        volume={0.5}
                    />
                </div>
                <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[300]">
                    Опікуни “ГОРА” кожного поточного року отримуватимуть звіт про використання коштів звітного періоду із планом бюджету наступного року.
                </p>
                <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[300]">
                    Таким чином Громадська опікунська рада Афону формуватиметься щороку, кожен за бажанням може переходити в “ГОРУ” наступного року, тим самим формуючи свою духовну опікунську спадщину на Афоні та свою бібліотеку томів, де Ви є відбудовником. Або ж, уступити місце опікунам, які будуть в резерві та зможуть офіційно увійти до такої ради слідуючого року. Такий підхід дасть змогу стати проєкту народним, відкритим та прозорим, а українському осередку на Афоні – стабільно функціонувати. Якщо ви не встигли увійти до опікунської ради або бажаєте, та в цьому році не маєте фінансової можливості – залиште свої дані і ми зв‘яжемось з вами за рік. Першочергове право бути опікуном ГОРИ надаватиметься опікунам попереднього року і за наявності вільних місць зможуть долучитись всі бажаючі стати опікунами з резерву.
                </p>
                <p className="mb-[2.4rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[300]">
                    Як колись Запорізькі козаки опікувались Афоном, так сьогодні кожен українець зможе відчути себе захисником, відбудовником та опікуном на Афоні.
                </p>
            </div>
            <div className={cn(
                'flex gap-x-[5rem]',
                'max-mobile:gap-x-0 max-mobile:flex-col max-mobile:gap-y-[2rem]'
            )}>
                <Link href={'/mapa'}>
                    <Button>
                        Стати опікуном
                    </Button>
                </Link>
                <div onClick={openModal}>
                    <Button>
                        Увійти в резерв
                    </Button>
                </div>

            </div>
        </>
    );
};