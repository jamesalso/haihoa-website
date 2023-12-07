/* eslint-disable @next/next/no-img-element */
import ReactPlayer from 'react-player';

export default function Recap() {
    return (
        <section
            className={`bg-[url(/images/banner/haihoa-background.png)] bg-cover bg-center bg-no-repeat`}
            id="companion"
        >
            <div className="lg:px-8 sm:px-4 sm:py-10">
                <div className="relative pt-[56.25%] lg:rounded-[4%] lg:border-2 lg:border-black lg:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <ReactPlayer
                        url="https://vimeo.com/892309051"
                        controls
                        loop
                        className="react-player"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </section>
    );
}
