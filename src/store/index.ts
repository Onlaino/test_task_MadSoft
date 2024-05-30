import { create } from 'zustand'
import { IAnswer, IStoreActions, IStore } from './store.types'

export const useStore = create<IStore & IStoreActions>(set => ({
	answers: [],
	
	addAnswer: (ans: IAnswer) => set((state) => ({answers: [...state.answers, ans]}))
}))
