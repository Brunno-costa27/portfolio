import { Footer } from "./Footer";
import Timeline from "./Timeline";
import TimeLine from "./TimeLine/TimeLine";
import TimeLineItem from "./TimeLine/TimeLineItem";


export function AboutMe() {
    
    const timelineData = [
        { date: "2023", text: "Evento 1", title: "Descrição do evento 1" },
        { date: "2024", text: "Evento 2", title: "Descrição do evento 2" },
        { date: "2024", text: "Evento 3", title: "Descrição do evento 3" },
      ];
    return (
        <section className="text-white px-5  mx-auto  lg:mt-60 mt-80 flex flex-col justify-between lg:px-20 2xl:px-96 font-sans relative">
            <h2 className="text-xl lg:text-4xl font-semibold text-left">About Me</h2>

            <div className="mt-8 relative lg:flex flex flex-col">
                <Timeline items={timelineData}/>
            </div>


        </section>
    )
}