'use client';

import React from 'react';
import Link from 'next/link';

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Container } from "@/components/shared/container";
import Logo from '@/components/shared/logo';

export const Header: React.FC = () => {

    const links = [
        {
            href: '/',
            name: 'Про проєкт'
        },
        {
            href: '/',
            name: 'Як це працює'
        },
        {
            href: '/mapa',
            name: 'Мапа'
        },
        {
            href: '/location',
            name: 'Локації'
        },
        {
            href: '#contact',
            name: 'Контакти'
        }
    ]

    return (
        <header className='absolute left-0 top-[3.6dvh] w-full z-[1]'>
            <Container>
                <div className='flex justify-between items-center w-[full] py-[3.2rem] px-[4.6rem] bg-regal-white rounded-[4rem]'>
                    <Link href={'/'}>
                        <Logo className='w-[12.055rem] h-[5.6rem]' color='#171717' />
                    </Link>
                    <NavigationMenu>
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
                </div>
            </Container>
        </header>
    );
};
