'use client';

import React, { useRef, memo, useCallback, useEffect, useState } from 'react';
import { Color, ShaderMaterial } from 'three';

import useStoreGrid from '@/store/useStoreGrid';
// import { Text } from '@react-three/drei';

interface Grid {
    x: number;
    y: number;
    price: number;
    isAvailable: boolean;
}

const RoundedPlane = memo(({ position, width, height, grid }: { position: [number, number, number], width: number, height: number, grid: Grid }) => {
    const setActiveGrids = useStoreGrid(state => state.setActiveGrids);
    const [isBlocked, setIsBlocked] = useState(false);
    const materialRef = useRef<ShaderMaterial | null>(null);
    const isGridActive = useStoreGrid(useCallback(
        (state) => state.activeGrids.some((activeGrid: Grid) => activeGrid.x === grid.x && activeGrid.y === grid.y),
        [grid.x, grid.y]
    ));

    const getColorByPrice = (price: number) => {
        switch (price) {
            case 100:
                return new Color('rgb(36,118,22)')
            case 200:
                return new Color('rgb(255,235,59)')
            case 300:
                return new Color('rgb(233,30,99)')
            case 500:
                return new Color('rgb(156,39,176)')
            default:
                return new Color('#FFFFFF')
        }
    };
    
    useEffect(() => {
        setIsBlocked(!grid.isAvailable);
    }, [grid]);

    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.uniforms.u_opacity.value = !isBlocked && !isGridActive ? 0.3 : 1;
            materialRef.current.uniformsNeedUpdate = true;
            materialRef.current.transparent = true;
            materialRef.current.needsUpdate = true;

            // Додаємо примусове оновлення сцени
            materialRef.current.dispose();
            materialRef.current.visible = false;
            materialRef.current.visible = true;
        }
    }, [isGridActive, isBlocked])

    return (
        <mesh position={position} matrixWorldNeedsUpdate matrixAutoUpdate onClick={() => setActiveGrids(grid)}>
            <planeGeometry args={[width, height, 1, 1]} />
            {/* <Text>
                1
            </Text> */}
            <shaderMaterial
                ref={materialRef}
                uniforms={{
                    u_color: { value: getColorByPrice(grid.price) },
                    u_borderColor: { value: new Color('#808080') },
                    u_radius: { value: 0.15 },
                    u_borderThickness: { value: 0.05 },
                    u_opacity: { value: !isBlocked && !isGridActive ? 0.3 : 1 },
                }}
                vertexShader={`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `}
                fragmentShader={`
                uniform vec3 u_color;
                uniform vec3 u_borderColor;
                uniform float u_radius;
                uniform float u_borderThickness;
                uniform float u_opacity; // Використовується для контролю прозорості
                varying vec2 vUv;

                float roundedBoxSDF(vec2 p, vec2 b, float r) {
                vec2 d = abs(p) - b + vec2(r);
                return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
                }

                vec3 linearToSRGB(vec3 color) {
                    return pow(color, vec3(1.0 / 2.2));  // Гамма-корекція
                }

                void main() {
                // Обчислюємо відстань від країв закругленого прямокутника
                float sdf = roundedBoxSDF(vUv - 0.5, vec2(0.5), u_radius);

                // Градієнт для згладжування країв
                float edgeWidth = 0.02;

                // Визначаємо прозорість основної фігури
                float fillAlpha = smoothstep(edgeWidth, edgeWidth + 0.01, sdf);

                // Створюємо обведення: в межах значення u_borderThickness
                float borderAlpha = smoothstep(-u_borderThickness, -u_borderThickness + edgeWidth, sdf);

                // Якщо всередині фігури, колір фігури, якщо в обведенні — колір обведення
                vec3 color = mix(u_color, u_borderColor, borderAlpha);

                color = linearToSRGB(color);
                
                // Явно контролюємо прозорість через u_opacity
                gl_FragColor = vec4(color, u_opacity * (1.0 - fillAlpha));
                }
            `}
                transparent={true}
                alphaTest={0.5}
            />
        </mesh>
    );
});

RoundedPlane.displayName = 'GridItem';

export default RoundedPlane;