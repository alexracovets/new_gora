'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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
        <header onPointerMove={() => setIsHideHeader(false)} className={cn(
            'absolute left-0 w-full z-[1]',
            'max-mobile:relative'
        )}>
            <Container className={
                cn(
                    'transition-all duration-300 ease-in-out translate-y-[0%] mt-[3.6dvh]',
                    isHideHeader && canHide ? 'translate-y-[-150%]' : '',
                    'max-mobile:m-[0]'
                )}>
                <div className={cn(
                    'flex justify-between items-center w-full py-[3.2rem] px-[4.6rem] bg-regal-white rounded-[4rem]',
                    'max-mobile:py-[1.6rem] max-mobile:px-[2rem] max-mobile:rounded-none'
                )}>
                    <Link href={'/'}>
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
                </div>
            </Container>
        </header>
    );
};
