'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import Headroom from 'react-headroom';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { Drawer, DrawerContent, DrawerTitle, DrawerHeader, DrawerDescription } from "@/components/ui/drawer";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Container } from "@/components/shared/container";
import Logo from '@/components/shared/logo';
import useHideHeader from '@/store/useHideHeader';
import useCustomScroll from '@/store/useCustomScroll';

interface HeaderProps {
    canHide?: boolean;
}

interface HeadroomWithUnpin extends Headroom {
    unpin: () => void;
    pin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ canHide }) => {
    const setIsHideHeader = useHideHeader(state => state.setIsHideHeader);
    const isHideHeader = useHideHeader(state => state.isHideHeader);
    const isPin = useCustomScroll(state => state.isPin);
    const headroomRef = useRef<HeadroomWithUnpin | null>(null);
    const [isOpen, setOpen] = useState(false);
    const pathName = usePathname();

    const links = [
        {
            href: '/',
            name: 'Про проєкт',
            border: false
        },
        {
            href: '/#work',
            name: 'Як це працює',
            border: false
        },
        {
            href: '/mapa',
            name: 'Мапа',
            border: false
        },
        {
            href: '/location',
            name: 'Локації',
            border: false
        },
        {

            href: pathName === '/mapa' ? '/#contact' : pathName + '#contact',
            name: 'Контакти',
            border: true
        }
    ]

    const handleScroll = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        const elementId = href.split('#')[1];
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const newPath = window.location.pathname;
        history.replaceState(null, '', newPath);
    }, [pathName])

    useEffect(() => {
        if (headroomRef.current) {
            if (isPin) {
                headroomRef.current.pin();
            } else {
                headroomRef.current.unpin();
            }
        }
    }, [isPin]);

    return (
        <header onPointerMove={() => setIsHideHeader(false)} className={cn(
            'absolute left-0 top-0 w-full z-[10]'
        )}>
            <Headroom
                ref={headroomRef}
            >
                <Container className={
                    cn(
                        'transition-all duration-300 ease-in-out translate-y-[0%] mt-[2dvh] w-full',
                        isHideHeader ? 'max-mobile:absolute' : 'max-mobile:relative',
                        isHideHeader && canHide ? 'translate-y-[-150%] max-mobile:translate-y-[0%]' : '',
                        'max-mobile:m-[0] max-mobile:px-0'
                    )}>
                    <div className={cn(
                        'flex justify-between items-center py-[1.5rem] px-[4.6rem] rounded-[2rem] transition-all duration-300 ease-out bg-regal-white',
                        'max-tablet:px-[2.2rem] rounded-[2rem]',
                        'max-mobile:py-[1.6rem] max-mobile:px-[2rem] max-mobile:rounded-none'
                    )}>
                        <Link href={'/#start'}
                            className='realtive z-[100]'
                            onClick={(e) => {
                                if (pathName === '/') {
                                    handleScroll(e, '/#start')
                                }
                            }}
                        >
                            <Logo className={cn(
                                'w-[9rem] h-[5.33rem]',
                                'max-tablet:w-[6rem] max-tablet:h-[3.5533rem]',
                                'max-mobile:w-[6.7542rem] max-mobile:h-[4rem]'
                            )} color='#171717' />
                        </Link>
                        <NavigationMenu className={cn(
                            'max-mobile:hidden'
                        )}>
                            <NavigationMenuList>
                                {
                                    links.map((link, index) => {
                                        return (
                                            <NavigationMenuItem key={index} className={link.border ? 'border-[0.1rem] border-regal-black rounded-[1rem] ml-[1.4rem]' : ''}>
                                                <Link
                                                    passHref
                                                    href={link.href}
                                                    title={link.name}
                                                    onClick={(e) => {
                                                        if (link.href.includes('#') && !(pathName === '/mapa' && link.href === '/#contact')) {
                                                            handleScroll(e, link.href);
                                                        }
                                                    }}
                                                    className={cn(
                                                        'text-[1.8rem] p-[1.4rem] mx-[0.1rem]',
                                                        'max-tablet:text-[1rem] max-tablet: p-[.8rem]',
                                                        `hover:font-[600] before:block before:content-[attr(title)] before:font-[600] before:h-0 before:overflow-hidden before:invisible`
                                                    )} >
                                                    {link.name}
                                                </Link>
                                            </NavigationMenuItem>
                                        )
                                    })
                                }
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* Mobile */}
                        <div className={cn(
                            'hidden',
                            'max-mobile:block'
                        )}>
                            <Drawer open={isOpen} onOpenChange={setOpen} direction='top'>
                                <div className={cn(
                                    'border-[2px] border-regal-black rounded-[10px]'
                                )}>
                                    <Hamburger toggled={isOpen} toggle={setOpen} color="#171717" size={18} />
                                </div>
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
                                                'w-[9rem] h-[5.33rem]',
                                                'max-tablet:w-[6rem] max-tablet:h-[3.5533rem]',
                                                'max-mobile:w-[6.7542rem] max-mobile:h-[4rem]'
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
                                                                onClick={() => {
                                                                    setOpen(false);
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
            </Headroom>
        </header >
    );
};
