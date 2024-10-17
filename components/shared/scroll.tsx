'use client';

import { Scrollbars } from 'react-custom-scrollbars-2';

export const Scroll: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Scrollbars
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