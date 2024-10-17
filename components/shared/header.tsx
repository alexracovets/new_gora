'use client';

import { Fade as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle, DrawerHeader, DrawerDescription } from "@/components/ui/drawer";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Container } from "@/components/shared/container";
import Logo from '@/components/shared/logo';
import useHideHeader from '@/store/useHideHeader';

interface HeaderProps {
    canHide?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ canHide }) => {
    const isHideHeader = useHideHeader(state => state.isHideHeader);
    const setIsHideHeader = useHideHeader(state => state.setIsHideHeader);
    const [isOpen, setOpen] = useState(false);

    const links = [
        {
            href: '/',
            achor: '',
            name: 'Про проєкт',
            border: false
        },
        {
            href: '/',
            achor: '#work',
            name: 'Як це працює',
            border: false
        },
        {
            href: '/mapa',
            achor: '',
            name: 'Мапа',
            border: false
        },
        {
            href: '/location',
            achor: '',
            name: 'Локації',
            border: false
        },
        {

            href: '',
            achor: '#contact',
            name: 'Контакти',
            border: true
        }
    ]

    return (
        <header onPointerMove={() => setIsHideHeader(false)} className={cn(
            'absolute left-0 w-full z-[100000000000]',
            'max-mobile:relative'
        )}>
            <Container className={
                cn(
                    'transition-all duration-300 ease-in-out translate-y-[0%] mt-[3.6dvh]',
                    isHideHeader && canHide ? 'translate-y-[-150%]' : '',
                    'max-mobile:m-[0]'
                )}>
                <div className={cn(
                    'flex justify-between items-center w-full py-[3.2rem] px-[4.6rem] rounded-[4rem] transition-all duration-300 ease-out',
                    'max-mobile:py-[1.6rem] max-mobile:px-[2rem] max-mobile:rounded-none',
                    isOpen ? 'bg-regal-green' : 'bg-regal-white'
                )}>
                    <Link href={'/'} className='realtive z-[100]'>
                        <Logo className={cn(
                            'w-[12.055rem] h-[5.6rem]',
                            'max-mobile:w-[9rem] max-mobile:h-[4.181rem]'
                        )} color='#171717' />
                    </Link>
                    <NavigationMenu className={cn(
                        'max-mobile:hidden'
                    )}>
                        <NavigationMenuList>
                            {
                                links.map((link, index) => {
                                    return (
                                        <NavigationMenuItem key={index}>
                                            <Link href={link.href} passHref className='text-[1.8rem] p-[1.4rem] mx-[0.1rem]'>
                                                {link.name}
                                            </Link>
                                        </NavigationMenuItem>
                                    )
                                })
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className={cn(
                        'hidden',
                        'max-mobile:block'
                    )}>
                        <Drawer open={isOpen} onOpenChange={setOpen} direction='top'>
                            <DrawerTrigger>
                                <div className={cn(
                                    'border-[2px] border-regal-black rounded-[10px]'
                                )}>
                                    <Hamburger toggled={isOpen} toggle={setOpen} color="#171717" size={18} />
                                </div>
                            </DrawerTrigger>
                            <DrawerContent className={cn(
                                'max-mobile:px-[2rem] max-mobile:py-[1.6rem]'
                            )}>
                                <DrawerHeader className='hidden'>
                                    <DrawerTitle></DrawerTitle>
                                    <DrawerDescription></DrawerDescription>
                                </DrawerHeader>
                                <div className={cn(
                                    'flex justify-between items-center w-full',
                                    ''
                                )}>
                                    <Link href={'/'} className='realtive z-[100]' onClick={() => setOpen(false)}>
                                        <Logo className={cn(
                                            'max-mobile:w-[9rem] max-mobile:h-[4.181rem]'
                                        )} color='#171717' />
                                    </Link>
                                    <div className={cn(
                                        'border-[2px] border-regal-black rounded-[10px]'
                                    )}>
                                        <Hamburger toggled={isOpen} toggle={setOpen} color="#171717" size={18} />
                                    </div>
                                </div>

                                <NavigationMenu>
                                    <NavigationMenuList className={cn(
                                        'max-mobile:flex max-mobile:flex-col max-mobile:justify-center max-mobile:items-start'
                                    )}>
                                        {
                                            links.map((link, index) => {
                                                return (
                                                    <NavigationMenuItem key={index} className={link.border ? 'border-[0.1rem] border-regal-black rounded-[.6rem] mt-[1rem]' : ''}>
                                                        <Link
                                                            href={link.href}
                                                            onClick={(e) => {
                                                                // Перевірка, чи є лінк якорем
                                                                if (link.href.startsWith('#')) {
                                                                    e.preventDefault(); // Вимкнути стандартну поведінку скролу
                                                                    setOpen(false); // Закриваємо Drawer
                                                                    setTimeout(() => {
                                                                        // Скрол через 300 мс після закриття Drawer
                                                                        const element = document.querySelector(link.href);
                                                                        if (element) {
                                                                            element.scrollIntoView({ behavior: 'smooth' });
                                                                        }
                                                                    }, 300); // Затримка на 300 мс
                                                                } else {
                                                                    setOpen(false); // Закрити Drawer для звичайних лінків
                                                                }
                                                            }}
                                                            passHref
                                                            className={cn(
                                                                'text-[1.8rem] w-full py-[1rem]',
                                                                link.border ? 'px-[1rem]' : ''
                                                            )}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    </NavigationMenuItem>
                                                )
                                            })
                                        }
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </Container>
        </header>
    );
};
