'use client';

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';




import RoundedPlane from '@/components/three/roundedPlane';
import { Shape } from '@/components/three/shape';
import { Camera } from '@/components/three/camera';

interface CellData {
    x: number;
    y: number;
    price: number;
    isAvailable: boolean;
}

const CanvasExperience: React.FC = () => {
    const [cells, setCells] = useState<CellData[]>([]);
    const [dpr, setDpr] = useState(1);
    const scale = 4.5;

    useEffect(() => {
        setDpr(Math.min(window.devicePixelRatio, 2))
    }, [])

    useEffect(() => {
        fetch('/data/grids.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                setCells(json);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return (
        <Canvas
            linear={false}
            dpr={dpr}
            onCreated={({ gl }) => {
                gl.toneMapping = THREE.NoToneMapping;
                gl.outputColorSpace = THREE.SRGBColorSpace
            }}
            frameloop="demand"
        >
            <Camera />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <Plane args={[46 / scale, 35 / scale]} position={[0, 0, -0.001]} />
                <Shape />
                <mesh position={[-22.5 / scale, -17 / scale, 0]}>
                    {cells.map((item, idx) => (
                        <RoundedPlane
                            key={idx}
                            position={[item.x / scale, item.y / scale, 0]}
                            width={1 / scale}
                            height={1 / scale}
                            grid={item}
                        />
                    ))}
                </mesh>
            </mesh>
        </Canvas>
    );
};

export default CanvasExperience;
