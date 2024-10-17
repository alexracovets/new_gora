import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { LocationSection } from "@/components/shared/section/locationSection";
import { cn } from "@/lib/utils";

export default function Location() {
  return (
    <>
      <Section className={cn(
        'bg-regal-green pt-[28.2rem] pb-[10rem]',
        'max-mobile:py-[5rem]'
      )}>
        <Container>
          <h1 className={cn(
            'text-[6.6rem] font-[500]',
            'max-mobile:text-[2rem]'
          )}>Локації</h1>
        </Container>
      </Section>
      <LocationSection />
    </>
  );
}
