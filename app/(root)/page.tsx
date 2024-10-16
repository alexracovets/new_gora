import { ChooseSection } from "@/components/shared/section/chooseSection";
import { HistorySection } from "@/components/shared/section/historySection";
import { StartSection } from "@/components/shared/section/startSection";
import { TomeSection } from "@/components/shared/section/tomeSection";

export default function Home() {
  return (
    <>
      <StartSection />
      <HistorySection />
      <ChooseSection />
      <TomeSection />
    </>
  );
}
