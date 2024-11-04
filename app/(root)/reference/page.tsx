import { cn } from "@/lib/utils";

import { ReferenceSection } from "@/components/shared/section/referenceSection";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export default function Location() {
  return (
    <>
      <Section className={cn(
        'bg-regal-black pt-[28.2rem] pb-[10rem]',
        'max-tablet:pt-[16.2rem] max-tablet:pb-[5rem]',
        'max-mobile:py-[5rem] max-mobile:pt-[12rem]'
      )}>
        <Container>
          <h1 className={cn(
            'text-[6.6rem] text-regal-white font-[500]',
            'max-tablet:text-[3.2rem]',
            'max-mobile:text-[2rem]'
          )}>ДОВІДКА</h1>
        </Container>
      </Section>
      <ReferenceSection />
    </>
  );
}
