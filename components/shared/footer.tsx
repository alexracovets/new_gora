'use client';

import React from 'react';
import { MdOutlineLocalPhone, MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from 'next/link';

import { Container } from "@/components/shared/container";
import Logo from '@/components/shared/logo';

export const Footer: React.FC = () => {

    return (
        <footer className='bg-regal-black rounded-t-[4rem] mt-[-4rem] relative' id='contact'>
            <Container className='py-[8.8rem] flex justify-between items-center'>
                <div className='flex justify-start items-center'>
                    <Logo className='w-[10.333rem] h-[4.8rem] mr-[2rem]' />
                    <div className='text-[1.6rem] text-regal-white font-[300] leading-[1.92rem]'>
                        Громадська опікунська <br />
                        рада Афону
                    </div>
                </div>

                <div className='flex justify-start items-center gap-[5.4rem]'>
                    <Link href={"tel:+380671112233"} className='flex justify-start items-center'>
                        <div className='w-[3.6rem] h-[3.6rem] rounded-[1rem] bg-regal-white flex justify-center items-center mr-[2rem]'>
                            <MdOutlineLocalPhone size='2rem' />
                        </div>
                        <div className='text-[2.2rem] text-regal-white'>
                            +38 (067) 111 22 33
                        </div>
                    </Link>
                    <Link href={"mailto:gora@gora.com"} className='flex justify-start items-center'>
                        <div className='w-[3.6rem] h-[3.6rem] rounded-[1rem] bg-regal-white flex justify-center items-center mr-[2rem]'>
                            <MdOutlineAlternateEmail size='2rem' />
                        </div>
                        <div className='text-[2.2rem] text-regal-white'>
                            gora@gora.com
                        </div>
                    </Link>
                    <div className='flex justify-start items-center gap-[2.4rem]'>
                        <Link href={"/"} className='flex justify-start items-center'>
                            <FaYoutube size='4rem' color='#fff' />
                        </Link>
                        <Link href={"/"} className='flex justify-start items-center'>
                            <FaFacebook size='4rem' color='#fff' />
                        </Link>
                        <Link href={"/"} className='flex justify-start items-center'>
                            <FaInstagram size='4rem' color='#fff' />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
