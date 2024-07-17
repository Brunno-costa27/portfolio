import Timeline from "./Timeline";

export function AboutMe() {
    
    const timelineData = [
        { date: "2023" },
        { date: "2024" },
        { date: "2024"},
      ];
    return (
        <section id="aboutme" className="text-white px-5  mx-auto  lg:mt-60 mt-80 flex flex-col justify-between lg:px-20 2xl:px-96 font-sans relative animate-fadeIn">
            <h2 className="text-xl lg:text-4xl font-semibold text-left">About Me</h2>

            <div className="mt-8 relative lg:flex flex flex-col">
                <Timeline items={timelineData}/>
            </div>
        </section>
    )
}