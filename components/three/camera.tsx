'use client';

import { MapControls as MapControlsType } from 'three-stdlib';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MapControls } from '@react-three/drei';

export const Camera: React.FC = () => {
    const controlsRef = useRef<MapControlsType | null>(null);
    const [basePan, setBasePan] = useState(3); // Базове обмеження для панорамування (це мінімум)
    const maxZoom = 5.5; // Максимальний зум (найближче)
    const minZoom = 1;   // Мінімальний зум (найдалі)

    const updateBasePan = () => {
        const mediaQuery = window.matchMedia('(max-width: 540px)');
        if (mediaQuery.matches) {
            setBasePan(4);
        } else {
            setBasePan(3);
        }
    };

    const calculateDynamicMaxPan = useCallback(() => {
        if (controlsRef.current) {
            const currentZoom = controlsRef.current.object.position.y;
            const normalizedZoom = (maxZoom - currentZoom - minZoom);

            const dynamicPan = basePan * (1 + normalizedZoom / 4);
            return dynamicPan;
        }
        return basePan;
    }, [basePan, maxZoom, minZoom]);
    
    const checkPosition = useCallback(() => {
        if (controlsRef.current) {
            const target = controlsRef.current.target;
            const position = controlsRef.current.object.position;
            const maxPan = calculateDynamicMaxPan();

            // Обмежуємо по осях X та Z
            target.z = Math.max(-maxPan, Math.min(maxPan, target.z));
            target.x = Math.max(-maxPan, Math.min(maxPan, target.x));

            position.x = Math.max(-maxPan, Math.min(maxPan, position.x));
            position.z = Math.max(-maxPan, Math.min(maxPan, position.z));
        }
    }, [calculateDynamicMaxPan]);

    useEffect(() => {
        updateBasePan();

        window.addEventListener('resize', updateBasePan);

        return () => {
            window.removeEventListener('resize', updateBasePan);
        };
    }, []);

    useEffect(() => {
        checkPosition();
    }, [basePan, checkPosition]);

    return (
        <MapControls
            ref={controlsRef}
            enableZoom={true}
            enableRotate={false}
            screenSpacePanning={false}
            maxPolarAngle={-Math.PI / 2}
            minPolarAngle={-Math.PI / 2}
            maxDistance={maxZoom}
            minDistance={minZoom}
            onChange={checkPosition}
        />
    );
};
