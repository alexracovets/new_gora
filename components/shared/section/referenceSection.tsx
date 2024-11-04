'use client';

import React from 'react';

import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const ReferenceSection: React.FC = () => {
    return (
        <Section id='reference' className={cn(
            'bg-regal-white'
        )}>
            <Container>
                <div className={cn(
                    'text-[2.5rem] leading-[1.3] pt-[2rem]',
                    'max-tablet:text-[1.2rem]'
                )}>
                    <div className={cn(
                        'relative mx-auto w-[75rem] h-[44rem] rounded-[1rem] overflow-hidden mb-[3rem]',
                        'max-tablet:w-full max-tablet:h-[39rem]',
                        'max-mobile:h-[18rem]'
                    )}>
                        <Image src="/img/reference_1.jpg" fill priority alt='reference' className='object-cover z-[-1]' />
                    </div>
                    <p className="italic text-justify mb-[3rem] max-tablet:w-full max-tablet:mb-[2rem] font-[400]">
                        St. Nicholas Eastern Orthodox Church was founded in 1917 through the donations of 782 hardworking immigrant families. Almost 5,000 people attended the Church’s dedication. * St. Nicholas Eastern Orthodox Church has survived and thrive amidst a changing neighborhood, changing social and moral values, changing church bureaucracy and changing financial circumstances. That we can celebrate 100 years of steadfast faith and dedication in 2017 inspiring.
                    </p>
                    <p className="mb-[2rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[400]">
                        В 1917р. храм Святого Миколая був заснований завдяки пожертвам 782 працьовитих родин іммігрантів. Майже 5000 людей були присутні на освяченні Святині, яка вижила і процвітала серед мінливого сусідства, мінливих соціальних і моральних цінностей, церковної політики, бюрократії та фінансових умов. Те, що було створено завдяки внескам 782 людей послужило благом сотням тисяч за ці 107 років.
                    </p>
                    <div className={cn(
                        'relative mx-auto w-[75rem] h-[44rem] rounded-[1rem] overflow-hidden my-[3rem]',
                        'max-tablet:w-full max-tablet:h-[39rem]',
                        'max-mobile:h-[18rem]'
                    )}>
                        <Image src="/img/reference_2.jpg" fill alt='reference' className='object-cover z-[-1]' />
                    </div>
                    <p className="mb-[2rem] max-tablet:mb-[1.2rem] max-mobile:mb-[1.4rem] font-[400]">
                        Так само і ми з Вами, зберігши 1000-тню історію та відродивши Святиню на Афоні, створимо осередок для нових сотень тисяч людей і нових поколінь на 1000 років наперед. Відбудова триває! Ставай опікуном проєкту ГОРА!
                    </p>
                </div>
            </Container>
        </Section>
    );
};