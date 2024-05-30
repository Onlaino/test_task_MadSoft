import { IQuestion } from '../../data/testQuestions.types'

export interface IQuestionProps {
	id: number
	setId: (id: number) => void
	timer: number
	setTimer: (timer: number) => void
	questions?: IQuestion[]
	questionTitle?: string
}

