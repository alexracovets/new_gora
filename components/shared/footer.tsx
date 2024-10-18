'use client';

import React from 'react';
import { MdOutlineLocalPhone, MdOutlineAlternateEmail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';

import { Container } from "@/components/shared/container";
import Logo from '@/components/shared/logo';
import { cn } from '@/lib/utils';

export const Footer: React.FC = () => {

    return (
        <footer className={cn(
            'relative bg-regal-black rounded-t-[4rem] mt-[-4rem]',
            'max-mobile:rounded-t-[1rem] max-mobile:mt-[-1rem]'
        )} id='contact'>
            <Container className={cn(
                'py-[8.8rem] flex justify-between items-center',
                'max-mobile:flex-col max-mobile:gap-[3rem] max-mobile:py-[5rem]'
            )}>
                <div className={cn(
                    'flex justify-start items-center',
                    'max-mobile:w-full'
                )}>
                    <Logo className={cn(
                        'w-[10.333rem] h-[4.8rem] mr-[2rem]',
                        'max-mobile:w-[6.888rem] max-mobile:h-[3.2rem]'
                    )} />
                    <div className={cn(
                        'text-[1.6rem] text-regal-white font-[300] leading-[1.92rem]',
                        'max-mobile:text-[1.2rem] leading-[1.44rem]'
                    )}>
                        Громадська опікунська <br />
                        рада Афону
                    </div>
                </div>

                <div className={cn(
                    'flex justify-start items-center gap-[5.4rem]',
                    'max-mobile:flex-col max-mobile:items-start max-mobile:w-full max-mobile:gap-[3rem]'
                )}>
                    <Link href={"tel:+380671112233"} className={cn(
                        'flex justify-start items-center',
                        'max-mobile:w-full'
                    )}>
                        <div className={cn(
                            'w-[3.6rem] h-[3.6rem] rounded-[1rem] bg-regal-white flex justify-center items-center mr-[2rem]',
                            'max-mobile:w-[2.4rem] max-mobile:h-[2.4rem] max-mobile:rounded-[.6rem]'
                        )}>
                            <MdOutlineLocalPhone className={cn(
                                'w-[2rem] h-[2rem]',
                                'max-mobile:w-[1.4rem] max-mobile:h-[1.4rem]'
                            )} />
                        </div>
                        <div className={cn(
                            'text-[2.2rem] text-regal-white',
                            'max-mobile:text-[1.4rem]'
                        )}>
                            +38 (067) 111 22 33
                        </div>
                    </Link>
                    <Link href={"mailto:gora@gora.com"} className='flex justify-start items-center'>
                        <div className={cn(
                            'w-[3.6rem] h-[3.6rem] rounded-[1rem] bg-regal-white flex justify-center items-center mr-[2rem]',
                            'max-mobile:w-[2.4rem] max-mobile:h-[2.4rem] max-mobile:rounded-[.6rem]'
                        )}>
                            <MdOutlineAlternateEmail className={cn(
                                'w-[2rem] h-[2rem]',
                                'max-mobile:w-[1.4rem] max-mobile:h-[1.4rem]'
                            )} />
                        </div>
                        <div className={cn(
                            'text-[2.2rem] text-regal-white',
                            'max-mobile:text-[1.4rem]'
                        )}>
                            gora@gora.com
                        </div>
                    </Link>
                    <div className='flex justify-start items-center gap-[2.4rem]'>
                        {/* <Link href={"/"} className='flex justify-start items-center'>
                            <FaYoutube color='#fff' className={cn(
                                'w-[4rem] h-[4rem]',
                                'max-mobile:w-[2rem] max-mobile:h-[2rem]'
                            )} />
                        </Link> */}
                        <Link href={"https://www.instagram.com/pilgrimagecenter/"} target='_blank' className='flex justify-start items-center'>
                            <FaFacebook color='#fff' className={cn(
                                'w-[4rem] h-[4rem]',
                                'max-mobile:w-[2rem] max-mobile:h-[2rem]'
                            )} />
                        </Link>
                        <Link href={"https://www.facebook.com/pilgrimage.center.ocu"} target='_blank' className='flex justify-start items-center'>
                            <FaInstagram color='#fff' className={cn(
                                'w-[4rem] h-[4rem]',
                                'max-mobile:w-[2rem] max-mobile:h-[2rem]'
                            )} />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
