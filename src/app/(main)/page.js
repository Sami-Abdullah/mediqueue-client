import HeroBanner from "@/component/home/HeroBanner";
import Stats from "@/component/home/Stats";
import StepsSection from "@/component/home/StepsSection";
import TeacherSection from "@/component/home/teachers/TeacherSection";


export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans space-y-20">
        
        <HeroBanner></HeroBanner>
        <Stats ></Stats>
        <TeacherSection></TeacherSection>
        <StepsSection></StepsSection>
    </div>
  );
}
