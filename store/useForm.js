import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useForm = create(immer((set) => ({
    isModal: false,
    setIsModal: (value) => set((state) => {
        console.log(value)
        state.isModal = value;
    })
})));

export default useForm;
