'use client';

import React from 'react';

interface LogoProps {
    color?: string;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'white', className }) => {
    return (
        <div className={className}>
            <svg width="104" height="49" viewBox="0 0 104 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M0 35.3853L51.6379 1L44.3852 19.5013L0 35.3853Z" fill={color} stroke="black"
                    style={{ fill: color, fillOpacity: 1, stroke: 'black', strokeOpacity: 1 }} strokeWidth="0.0206365" />
                <path d="M103.326 35.3853L51.6878 1L58.9405 19.5013L103.326 35.3853Z" fill="white"
                    stroke="black" style={{ fill: color, fillOpacity: 1, stroke: 'black', strokeOpacity: 1 }} strokeWidth="0.0206365" />
                <path
                    d="M75.2785 49L80.0242 38.1471H77.6125V35.3853H91.1299L97.0426 49H91.7912L90.313 45.5963H82.0275L80.5493 49H75.2785ZM83.2334 42.8344H89.1072L87.0455 38.1471H85.295L83.2334 42.8344Z"
                    fill="white" style={{ fill: color, fillOpacity: 1 }} />
                <path
                    d="M51.9875 46.3159V43.2623L54.8855 42.7761V35.3853H75.0936V42.426L59.9618 44.9739V49H54.8855V45.8297L51.9875 46.3159ZM59.9618 41.9203L70.0173 40.2282V38.1471H59.9618V41.9203Z"
                    fill="white" style={{ fill: color, fillOpacity: 1 }} />
                <path
                    d="M29.8296 49V35.3853H50.0377V49H29.8296ZM34.9059 46.2381H44.9614V38.1471H34.9059V46.2381Z"
                    fill="white" style={{ fill: color, fillOpacity: 1 }} />
                <path
                    d="M6.1936 38.1471V35.3853H27.2964V40.695L22.2201 39.9948V38.1471H14.1679V49H9.09159V38.1471H6.1936Z"
                    fill="white" style={{ fill: color, fillOpacity: 1 }} />
            </svg>
        </div>
    );
};

export default Logo;
