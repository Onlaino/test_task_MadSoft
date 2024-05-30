export interface ITestQuestions {
	testName: string;
	questions: IQuestion[],
}

export interface IQuestion {
	id?: number
	title: string
	inputType: 'radio' | 'checkbox' | 'text'
	variants: IVariants[]
}

export interface IVariants {
	title: string,
	flag?: boolean
}
