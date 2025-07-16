import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

const newsItems = [
    { title: "خبر اول", desc: "توضیح کوتاه خبر اول" },
    { title: "خبر دوم", desc: "توضیح کوتاه خبر دوم" },
    { title: "خبر سوم", desc: "توضیح کوتاه خبر سوم" },
    { title: "خبر چهارم", desc: "توضیح کوتاه خبر چهارم" },
];

function NewsBar() {
    const options = {
        loop: true,
        speed: 10,
        align: "center",
        slidesToScroll: 1,
        dragFree: true,
    };
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

    return (
        <div className="w-full mb-5 mx-auto overflow-hidden">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex">
                    {newsItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="embla__slide flex-shrink-0 w-[50%] mx-2 bg-gradient-to-br from-[#263b4d] to-[#151515] rounded-xl p-6 text-white shadow-lg transition-transform duration-300"
                        >
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsBar;
