'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function LightBull() {
    // const { ref, inView } = useInView({
    //     threshold: 0.5,
    //     triggerOnce: true,
    // });

    const [isOn, setIsOn] = useState(true);
    // const [isBlinking, setIsBlinking] = useState(false);

    // useEffect(() => {
    //     if (inView) {
    //         setIsBlinking(true);
    //         let blinkCount = 0;
    //         const interval = setInterval(() => {
    //             setIsOn(prev => !prev);
    //             blinkCount++;
    //             if (blinkCount >= 4) {  // 4 تغییر وضعیت یعنی 2 چشمک کامل
    //                 clearInterval(interval);
    //                 setIsOn(true);
    //                 setIsBlinking(false);
    //             }
    //         }, 500);
    //         return () => clearInterval(interval);
    //     }
    // }, [inView]);

    return (
        <div
            // ref={ref}
            className={`relative flex justify-center items-start transition-all duration-500 ${isOn ? 'blur-0 z-10' : 'blur-[1px] -z-20'
                } `}
        >
            {/* سیم آویزان */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[20px] bg-black z-10" />

            {/* لوستر */}
            <div className="relative top-5 z-20">
                <div
                    className="w-[60px] h-[40px] rounded-b-md mx-auto shadow-md border border-gray-900 relative"
                    style={{
                        backgroundColor: isOn ? '#eee' : '#444',
                        transition: 'background-color 300ms ease',
                    }}
                >
                    {(isOn) && (
                        <div
                            className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-yellow-200 opacity-20"
                            style={{
                                clipPath: 'polygon(45% 0%, 55% 0%, 90% 100%, 10% 100%)',
                                filter: 'blur(15px)',
                                transition: 'opacity 300ms ease',
                                opacity: isOn ? 0.2 : 0,
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}


// 'use client';

// import { useState, useRef } from 'react';

// export default function LightBull() {
//     const [isOn, setIsOn] = useState(false);
//     const audioRef = useRef(null);

//     const toggleLight = () => {
//         setIsOn(!isOn);
//         if (audioRef.current) {
//             audioRef.current.play();
//         }
//     };

//     return (
//         <div
//             className={`relative flex justify-center items-start min-h-screen transition-all duration-500 ${isOn ? 'bg-[radial-gradient(#555,#111)]' : 'bg-[#222]'
//                 }`}
//         >
//             {/* سیم آویزان */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-[20vh] bg-black z-10" />

//             {/* لوستر */}
//             <div className="relative top-[20vh] z-20">
//                 {/* بدنه لوستر */}
//                 <div
//                     className="w-[60px] h-[40px] bg-gray-700 rounded-b-md mx-auto shadow-md border border-gray-900 relative"
//                     style={{
//                         backgroundColor: isOn ? '#eee' : '#444',
//                     }}
//                 >
//                     {/* نور ذوزنقه‌ای پایین‌رو */}
//                     {isOn && (
//                         <div
//                             className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-yellow-200 opacity-20"
//                             style={{
//                                 clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
//                                 filter: 'blur(2px)',
//                             }}
//                         ></div>
//                     )}
//                 </div>
//             </div>

//             {/* کلید روشن/خاموش */}
//             <div className="absolute bottom-[50px] right-[50px] w-20 h-20 border-[3px] border-black rounded-[10px] bg-gradient-to-b from-[#eee] via-[#ccc] to-[#eee] flex justify-center items-center shadow-[0_20px_30px_-10px_gray]">
//                 <div
//                     onClick={toggleLight}
//                     className="relative w-[25px] h-[40px] bg-gradient-to-b from-[#777] via-white to-[#777] rounded-[6px] border-[2px] border-black cursor-pointer"
//                 >
//                     <div
//                         className="absolute left-0 w-full h-[85%] rounded-[4px] bg-white transition-all duration-200"
//                         style={{ top: isOn ? '15%' : '0' }}
//                     ></div>
//                 </div>
//             </div>

//             {/* صدا */}
//             <audio
//                 ref={audioRef}
//                 src="https://www.fesliyanstudios.com/play-mp3/387"
//                 preload="auto"
//             />
//         </div>
//     );
// }
