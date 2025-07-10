import React from 'react'

function Road() {
    return (
        <>
            <svg
                viewBox="0 0 1700 200"
                className="absolute top-0 left-0 w-full h-full z-0"
            >
                {/* Upper straight line */}
                <path
                    d="M 0 20 L 1700 20"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="8"
                    // strokeDasharray="6,6"
                    strokeLinecap="round"
                />
                {/* Main curved line */}
                <path
                    d="M 0 100 Q 100 30, 200 100 T 400 100 T 600 100 T 800 100 T 1000 100 T 1200 100 T 1400 100 T 1600 100"
                    fill="none"
                    stroke="#FFA500"
                    strokeWidth="8"
                    strokeDasharray="12,8"
                    strokeLinecap="round"
                />
                {/* Lower straight line */}
                <path
                    d="M 0 180 L 1700 180"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="8"
                    // strokeDasharray="6,6"
                    strokeLinecap="round"
                />
            </svg>
        </>
    )
}

export default Road