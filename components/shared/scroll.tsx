'use client';

import { Scrollbars } from 'react-custom-scrollbars-2';

import useCustomScroll from '@/store/useCustomScroll';
import { useRef, useState } from 'react';

export const Scroll: React.FC<React.PropsWithChildren> = ({ children }) => {
    const setIsPin = useCustomScroll(state => state.setIsPin);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const scrollRef = useRef<Scrollbars>(null);

    const handleScroll = () => {
        if (!scrollRef.current) return;

        const scrollTop = scrollRef.current.getScrollTop();

        if (scrollTop > lastScrollTop) {
            setIsPin(false);
        } else {
            setIsPin(true);
        }

        setLastScrollTop(scrollTop);
    };

    return (
        <Scrollbars
            ref={scrollRef}
            onScroll={handleScroll}
            autoHeight
            autoHeightMin={100}
            autoHeightMax={'100dvh'}
            renderTrackVertical={props => <div {...props} className={'bg-regal-green top-0 right-0 h-full w-[4px!important] z-[100]'} />}
            renderThumbVertical={props => <div {...props} className={'bg-regal-black z-[100]'} />}
            universal={true}
        >
            {children}
        </Scrollbars>
    );
}; 