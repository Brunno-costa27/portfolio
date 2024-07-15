import { Footer } from "./Footer";
import TimeLine from "./TimeLine/TimeLine";
import TimeLineItem from "./TimeLine/TimeLineItem";

export function AboutMe() {

    return (
        <section className="text-white px-10  mx-auto  lg:mt-60 mt-80 flex flex-col justify-between lg:px-96 font-sans relative">
            <h2 className="text-3xl lg:text-4xl font-semibold text-left">About Me</h2>

            <div className="mt-8 relative lg:flex flex flex-col">
                <TimeLine>
                    <TimeLineItem title="2021" date="">
                        <p className="text-[#929EB0] text-left overflow-hidden">

                            I worked as an intern for a year as a full stack developer.

                        </p>
                    </TimeLineItem>
                    <TimeLineItem title="2024" date="">
                        <p className="text-[#929EB0] text-left">
                            Graduated from the Federal Institute of Rio Grande do Norte (IFRN) where he developed several projects in the area of ​​software development.

                        </p>
                    </TimeLineItem>
                    <TimeLineItem title="2024" date="">
                        <p className="text-[#929EB0] text-left">

                            I took a react and node course on the <span className="gradient-text"><a href="https://app.rocketseat.com.br/">rocketseat</a></span> platform.
                        </p>
                    </TimeLineItem>

                </TimeLine>
            </div>


        </section>
    )
}