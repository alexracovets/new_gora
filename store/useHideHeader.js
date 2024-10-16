import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useHideHeader = create(immer((set) => ({
    isHideHeader: false,
    setIsHideHeader: (value) => set((state) => {
        state.isHideHeader = value;
    })
})));

export default useHideHeader;
