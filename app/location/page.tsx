import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { LocationSection } from "@/components/shared/section/locationSection";

export default function Location() {
  return (
    <>
      <Section className="bg-regal-green pt-[28.2rem] pb-[10rem]">
        <Container>
          <h1 className="text-[6.6rem] font-[500]">Локації</h1>
        </Container>
      </Section>
      <LocationSection />
    </>
  );
}
