export interface IStore {
	answers: IAnswer[]
}

export interface IStoreActions {
	addAnswer: (ans: IAnswer) => void
}

export interface IAnswer {
	id: number
	answer: string
}
