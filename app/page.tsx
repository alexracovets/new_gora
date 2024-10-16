import { ChooseSection } from "@/components/shared/section/chooseSection";
import { HistorySection } from "@/components/shared/section/historySection";
import { StartSection } from "@/components/shared/section/startSection";

export default function Home() {
  return (
    <>
      <StartSection />
      <HistorySection />
      <ChooseSection />
    </>
  );
}
