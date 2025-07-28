import React from 'react'

function Road() {
    return (
        <>
            <svg
                viewBox="0 0 1600 200"
                className="absolute top-0 left-0 w-full h-full z-0"
            >
                {/* Upper curved line - more distance from center */}
                <path
                    d="M 0 40 Q 100 -40, 200 40 T 400 40 T 600 40 T 800 40 T 1000 40 T 1200 40 T 1400 40 T 1600 40"
                    fill="none"
                    stroke="#2D1F44"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
                {/* Main curved line */}
                <path
                    d="M 0 100 Q 100 30, 200 100 T 400 100 T 600 100 T 800 100 T 1000 100 T 1200 100 T 1400 100 T 1600 100"
                    fill="none"
                    stroke="#FEB737"
                    strokeWidth="8"
                    strokeDasharray="12,16"
                    strokeLinecap="round"
                />
                {/* Lower curved line - more distance from center */}
                <path
                    d="M 0 160 Q 100 90, 200 160 T 400 160 T 600 160 T 800 160 T 1000 160 T 1200 160 T 1400 160 T 1600 160"
                    fill="none"
                    stroke="#2D1F44"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
            </svg>
        </>
    )
}

export default Road