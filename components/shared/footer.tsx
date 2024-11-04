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
            'max-tablet:rounded-t-[2rem] max-tablet:mt-[-1rem]',
            'max-mobile:rounded-t-[1rem] max-mobile:mt-[-1rem]'
        )} id='contacts'>
            <Container className={cn(
                'py-[8.8rem] flex justify-between items-center',
                'max-tablet:p-[3rem]',
                'max-mobile:flex-col max-mobile:gap-[3rem] max-mobile:py-[5rem]'
            )}>
                <div className={cn(
                    'flex justify-start items-center',
                    'max-mobile:w-full'
                )}>
                    <Logo className={cn(
                        'w-[10.333rem] h-[4.8rem] mr-[2rem]',
                        'max-tablet:w-[5rem] max-tablet:h-[2.3rem] max-tablet:mr-[1rem]',
                        'max-mobile:w-[6.888rem] max-mobile:h-[3.2rem]'
                    )} />
                    <div className={cn(
                        'text-[1.6rem] text-regal-white font-[300] leading-[1.92rem]',
                        'max-tablet:text-[1rem] tablet-[1.2rem]',
                        'max-mobile:text-[1.2rem] leading-[1.44rem]'
                    )}>
                        Громадська опікунська <br />
                        рада Афону
                    </div>
                </div>

                <div className={cn(
                    'flex justify-start items-center gap-[5.4rem]',
                    'max-tablet:gap-[2.657rem]',
                    'max-mobile:flex-col max-mobile:items-start max-mobile:w-full max-mobile:gap-[3rem]'
                )}>
                    <Link href={"tel:+380503525236"} className={cn(
                        'flex justify-start items-center',
                        'max-mobile:w-full'
                    )}>
                        <div className={cn(
                            'w-[3.6rem] h-[3.6rem] rounded-[1rem] bg-regal-white flex justify-center items-center mr-[2rem]',
                            'max-tablet:w-[1.8rem] max-tablet:h-[1.8rem] max-tablet:rounded-[.4rem] max-tablet:mr-[1.2rem]',
                            'max-mobile:w-[2.4rem] max-mobile:h-[2.4rem] max-mobile:rounded-[.6rem]'
                        )}>
                            <MdOutlineLocalPhone className={cn(
                                'w-[2rem] h-[2rem]',
                                'max-tablet:w-[1.2rem] max-tablet:h-[1.2rem]',
                                'max-mobile:w-[1.4rem] max-mobile:h-[1.4rem]'
                            )} />
                        </div>
                        <div className={cn(
                            'text-[2.2rem] text-regal-white',
                            'max-tablet:text-[1.2rem]',
                            'max-mobile:text-[1.4rem]'
                        )}>
                            +38 (050) 352 52 36
                        </div>
                    </Link>
                    <Link href={"mailto:pilgrimage_center@ukr.net"} className='flex justify-start items-center'>
                        <div className={cn(
                            'w-[3.6rem] h-[3.6rem] rounded-[1rem] bg-regal-white flex justify-center items-center mr-[2rem]',
                            'max-tablet:w-[1.8rem] max-tablet:h-[1.8rem] max-tablet:rounded-[.4rem] max-tablet:mr-[1.2rem]',
                            'max-mobile:w-[2.4rem] max-mobile:h-[2.4rem] max-mobile:rounded-[.6rem]'
                        )}>
                            <MdOutlineAlternateEmail className={cn(
                                'w-[2rem] h-[2rem]',
                                'max-tablet:w-[1.2rem] max-tablet:h-[1.2rem]',
                                'max-mobile:w-[1.4rem] max-mobile:h-[1.4rem]'
                            )} />
                        </div>
                        <div className={cn(
                            'text-[2.2rem] text-regal-white',
                            'max-tablet:text-[1.2rem]',
                            'max-mobile:text-[1.4rem]'
                        )}>
                            pilgrimage_center@ukr.net
                        </div>
                    </Link>
                    <div className={cn(
                        'flex justify-start items-center gap-[2.4rem]',
                        'max-tablet:gap-[1.2rem]'
                    )}>
                        {/* <Link href={"/"} className='flex justify-start items-center'>
                            <FaYoutube color='#fff' className={cn(
                                'w-[4rem] h-[4rem]',
                                'max-mobile:w-[2rem] max-mobile:h-[2rem]'
                            )} />
                        </Link> */}
                        <Link href={"https://www.facebook.com/pilgrimage.center.ocu"} target='_blank' className='flex justify-start items-center'>
                            <FaFacebook color='#fff' className={cn(
                                'w-[4rem] h-[4rem]',
                                'max-tablet:w-[2.4rem] max-tablet:h-[2.4rem]',
                                'max-mobile:w-[2rem] max-mobile:h-[2rem]'
                            )} />
                        </Link>
                        <Link href={"https://www.instagram.com/vvzbir_afon?igsh=cXFwanQ3Y3ByMnNo"} target='_blank' className='flex justify-start items-center'>
                            <FaInstagram color='#fff' className={cn(
                                'w-[4rem] h-[4rem]',
                                'max-tablet:w-[2.4rem] max-tablet:h-[2.4rem]',
                                'max-mobile:w-[2rem] max-mobile:h-[2rem]'
                            )} />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
