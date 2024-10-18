'use client';

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";

import useForm from '@/store/useForm';
import useStoreGrid from '@/store/useStoreGrid';
import { cn } from '@/lib/utils';

interface GridItem {
    id: number;
    name: string;
    x: number;
    y: number;
}

export const Modal: React.FC = () => {
    const activeGrids = useStoreGrid(state => state.activeGrids);
    const setIsModal = useForm(state => state.setIsModal);
    const isModal = useForm(state => state.isModal);

    const [formData, setFormData] = useState({
        formData: 'Заявка з сайту GORA',
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmitContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const listGridHTML = activeGrids
            .map((item: GridItem) => `<li>Комірка з позиціями x:${item.x}, y:${item.y}</li>`)
            .join('');

        const response = await fetch('/send-mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                formName: "Форма з сайту ГОРА",
                listGrid: `<ul>${listGridHTML}</ul>`
            }),
        });

        if (response.ok) {
            setIsModal(false);
        } else console.log(formData)
    }

    useEffect(() => {
        const active = <ul>
            {
                activeGrids.map((item: GridItem, key: number) => {
                    return (
                        <li key={key}>
                            Комірка з позціями x:{item.x}, y:{item.y}
                        </li>
                    )
                })
            }
        </ul>
        setFormData(prevFormData => ({
            ...prevFormData,
            listGrid: active,
        }));

    }, [activeGrids])

    return (
        <>
            {isModal ?
                <div
                    onClick={() => setIsModal(false)}
                    className='absolute left-0 top-0 w-full h-[100dvh] z-[11] flex justify-center items-center bg-bg-Modal'
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={cn(
                            'relative w-[65.8rem] bg-regal-black rounded-[4rem] py-[7rem] px-[5rem] flex flex-col justify-center items-cente',
                            'max-mobile:w-full max-mobile:h-full max-mobile:w-full max-mobile:rounded-none max-mobile:px-[2rem]'
                        )}
                    >
                        <div className='absolute right-[2rem] top-[2rem] cursor-pointer' onClick={() => setIsModal(false)}>
                            <MdClose color='#D2F999' className='w-[4rem] h-[4rem]' />
                        </div>
                        <div className={cn(
                            'text-[4.321rem] text-regal-white text-center font-[600] leading-[4.754rem] mb-[2rem]',
                            'max-mobile:text-[2rem] max-mobile:leading-[2.2rem]'
                        )}>
                            ЗВОРОТНІЙ ЗВʼЯЗОК
                        </div>
                        <div className={cn(
                            'text-[1.6rem] text-center text-regal-white font-[300] leading-[1.92rem] mb-[3rem] w-[45.3rem] mx-auto',
                            'max-mobile:text-[1.2rem] max-mobile:leading-[1.44rem] max-mobile:w-full'
                        )}>
                            Залиште свої контакти, щоб ми підготували матеріали та зв&lsquo;язалися з Вами в найкоротший термін
                        </div>
                        <form onSubmit={handleSubmitContactForm}>
                            <input onChange={handleChange}
                                type="text"
                                name='name'
                                placeholder="Прізвище, Ім’я, По батькові"
                                className={cn(
                                    'text-[1.6rem] leading-[1.92rem] w-full text-regal-black font-roboto p-[2rem] rounded-[1.3rem] mb-[2rem]',
                                    'max-mobile:text-[1.2rem] max-mobile:leading-[1.44rem] max-mobile:p-[1rem] max-mobile:rounded-[.6rem]'
                                )}
                            />
                            <input
                                onChange={handleChange}
                                type="email"
                                name='email'
                                placeholder="E-Mail"
                                className={cn(
                                    'text-[1.6rem] leading-[1.92rem] w-full text-regal-black font-roboto p-[2rem] rounded-[1.3rem] mb-[2rem]',
                                    'max-mobile:text-[1.2rem] max-mobile:leading-[1.44rem] max-mobile:p-[1rem] max-mobile:rounded-[.6rem]'
                                )}
                            />
                            <input
                                onChange={handleChange}
                                type="tel"
                                name='phone'
                                placeholder="Номер телефону"
                                className={cn(
                                    'text-[1.6rem] leading-[1.92rem] w-full text-regal-black font-roboto p-[2rem] rounded-[1.3rem] mb-[2rem]',
                                    'max-mobile:text-[1.2rem] max-mobile:leading-[1.44rem] max-mobile:p-[1rem] max-mobile:rounded-[.6rem]'
                                )}
                            />
                            <textarea
                                onChange={handleChange}
                                name='message'
                                placeholder="Додаткова інформація"
                                className={cn(
                                    'text-[1.6rem] leading-[1.92rem] w-full text-regal-black font-roboto p-[2rem] rounded-[1.3rem] mb-[3rem] min-h-[6rem]',
                                    'max-mobile:text-[1.2rem] max-mobile:leading-[1.44rem] max-mobile:p-[1rem] max-mobile:rounded-[.6rem]'
                                )}
                            />
                            <Button variant='secondary' className='mx-auto'>Надіслати</Button>
                        </form>
                    </div>
                </div> :
                null}
        </>

    );
};