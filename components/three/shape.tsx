'use client';

import { DoubleSide, TextureLoader } from 'three';
import React, { useRef } from 'react';
import { Box3, Vector3, Object3D } from 'three';
import {  useEffect, useState } from 'react';
import { SVGLoader } from 'three/examples/jsm/Addons.js';
import { useLoader } from '@react-three/fiber';
import { Plane } from '@react-three/drei';

export const Shape: React.FC = () => {
    const { paths } = useLoader(SVGLoader, '/svg/mask.svg');
    const texture = useLoader(TextureLoader, '/img/mask.png');
    const svgRef = useRef(null);
    const planeRef = useRef(null);
    const [svgScale, setSvgScale] = useState(1);
    const [svgPosition, setSvgPosition] = useState<Vector3>(new Vector3(0, 0, 0));
    const scale = 4.5;

    const getSizes = (item: Object3D) => {
        const box = new Box3().setFromObject(item);
        const size = new Vector3();
        box.getSize(size);
        return size;
    };

    useEffect(() => {
        if (svgRef.current && planeRef.current && paths.length > 0) {
            const planeSize = getSizes(planeRef.current);
            const boxSvg = new Box3().setFromObject(svgRef.current);
            const svgSize = new Vector3();
            boxSvg.getSize(svgSize);

            const scaleX = planeSize.x / svgSize.x;
            const scaleY = planeSize.z / svgSize.z;
            const scaleZ = planeSize.y / svgSize.y;

            setSvgScale(scaleX);

            const svgCenter = new Vector3();
            boxSvg.getCenter(svgCenter);

            const planeCenter = new Vector3();
            const boxPlane = new Box3().setFromObject(planeRef.current);
            boxPlane.getCenter(planeCenter);

            const offsetX = planeCenter.x - svgCenter.x * scaleX;
            const offsetY = planeCenter.z - svgCenter.z * scaleY;
            const offsetZ = planeCenter.y - svgCenter.y * scaleZ;
            setSvgPosition(new Vector3(offsetX, offsetY === 0 ? offsetZ : -offsetY, 0));
        }
    }, [paths]);

    return (
        <mesh position={[0, 0, 0.001]}>
            <Plane ref={planeRef} args={[46 / scale, 35 / scale]} position={[0, 0, 0]}>
                <meshBasicMaterial attach="material" map={texture} side={DoubleSide} transparent={true} />
            </Plane>
            {paths.length > 0 && (
                <group ref={svgRef} scale={svgScale} position={svgPosition} rotation={[Math.PI, 0, 0]}>
                    {paths.map((path, index) => (
                        <mesh key={index}>
                            <shapeGeometry args={[path.toShapes(true)]} />
                            <meshBasicMaterial color={path.color} side={DoubleSide} />
                        </mesh>
                    ))}
                </group> 
            )}
        </mesh>
    );
};
