import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useCustomScroll = create(immer((set) => ({
    isPin: false,
    setIsPin: (value) => set((state) => { 
        state.isPin = value;
    })
})));

export default useCustomScroll;
