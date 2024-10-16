'use client';

import dynamic from 'next/dynamic';
const Scrollbars = dynamic(() => import('react-custom-scrollbars-2'), { ssr: false });

export const Scroll: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Scrollbars
            autoHeight
            autoHeightMin={'100dvh'}
            renderTrackVertical={props => <div {...props} className={'bg-regal-green top-0 right-0 h-full w-[4px!important]'} />}
            renderThumbVertical={props => <div {...props} className={'bg-regal-black'} />}
            universal={true}
        >
            {children}
        </Scrollbars>
    );
}; 