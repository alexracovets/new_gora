'use client';

import React, { useEffect, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import { usePathname, useRouter } from 'next/navigation';
import Headroom from 'react-headroom';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { Drawer, DrawerContent, DrawerTitle, DrawerHeader, DrawerDescription } from "@/components/ui/drawer";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Container } from "@/components/shared/container";
import Logo from '@/components/shared/logo';

import useHideHeader from '@/store/useHideHeader';
import useIsMobile from '@/store/useIsMobile';

export const Header: React.FC = () => {
    const setIsHideHeader = useHideHeader(state => state.setIsHideHeader);
    const isHideHeader = useHideHeader(state => state.isHideHeader);
    const [scrollTarget, setScrollTarget] = useState<string | null>(null);
    const isMobile = useIsMobile(state => state.isMobile);
    const [canHide, setCanHide] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const links = [
        {
            href: '/#start',
            name: 'ГОРА',
            border: false
        },
        {
            href: '/mapa',
            name: 'Мапа',
            border: false
        },
        {
            href: '/#work',
            name: 'Як це працює',
            border: false
        },
        {
            href: '/#video',
            name: 'Відео',
            border: false
        },
        {
            href: '/reference',
            name: 'Довідка',
            border: false
        },
        {
            href: '#contacts',
            name: 'Контакти',
            border: true
        }
    ]

    const handleScroll = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        const elementId = href.split('#')[1];

        if (elementId === 'contacts') {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                if (pathname !== '/') {
                    setScrollTarget('contacts');
                    router.push('/');
                }
            }
        } else
            if (pathname === '/') {
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                setScrollTarget(elementId);
                router.push('/');
            }
    };

    useEffect(() => {
        if (scrollTarget && pathname === '/') {
            const element = document.getElementById(scrollTarget);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setScrollTarget(null);
            }
        }
    }, [pathname, scrollTarget]);

    useEffect(() => {
        const newPath = window.location.pathname;
        history.replaceState(null, '', newPath);
        setCanHide(pathname === '/mapa')
    }, [pathname])

    useEffect(() => {
        if (!isMobile) {
            setOpen(false)
        }
    }, [isMobile]);
    
    return (
        <header onPointerMove={() => setIsHideHeader(false)} className='absolute left-0 top-0 w-full z-[10]'>
            <Headroom>
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
                                if (pathname === '/') {
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
                                                        if (link.href.includes('#')) {
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
                            <div className={cn(
                                'border-[2px] border-regal-black rounded-[10px]'
                            )}>
                                <Hamburger toggled={isOpen} toggle={setOpen} color="#171717" size={18} />
                            </div>
                            <Drawer open={isOpen} onOpenChange={setOpen} direction='top'>
                                <DrawerContent className='pointer-events-none'>
                                    <DrawerHeader className='hidden'>
                                        <DrawerTitle></DrawerTitle>
                                        <DrawerDescription></DrawerDescription>
                                    </DrawerHeader>
                                    <NavigationMenu className='pointer-events-auto'>
                                        <NavigationMenuList className='flex flex-col justify-center items-start'>
                                            {
                                                links.map((link, index) => {
                                                    return (
                                                        <NavigationMenuItem key={index} className={link.border ? 'relative z-[10] border-[0.1rem] border-regal-black rounded-[.6rem] mt-[1rem] pointer-events-auto' : ''}>
                                                            <Link
                                                                href={link.href}
                                                                onClick={(e) => {
                                                                    setOpen(false);
                                                                    if (link.href.includes('#')) {
                                                                        handleScroll(e, link.href);
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
            </Headroom>
        </header >
    );
};
