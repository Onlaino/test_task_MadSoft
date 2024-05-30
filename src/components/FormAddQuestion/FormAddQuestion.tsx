import { Link } from 'react-router-dom'
import { testQuestions } from '../../data/testQuestions'
import { MouseEventHandler, useState } from 'react'

export const FormAddQuestion = () => {
	const [qType, setQType] = useState<'radio' | 'checkbox' | 'text'>('radio')
	const [textRadioQuestions, setTextRadioQuestions] = useState<string[]>([])
	const [questionTitle, setQuestionTitle] = useState('')

	const handleRadioQuestionsChange: React.ChangeEventHandler<
		HTMLSelectElement
	> = e => {
		const numberOfQuestions = parseInt(e.target.value)
		setTextRadioQuestions(Array(numberOfQuestions).fill(''))
	}

	const handleRadioQuestionTextChange = (
		index: number,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const updatedQuestions = [...textRadioQuestions]
		updatedQuestions[index] = e.target.value
		setTextRadioQuestions(updatedQuestions)
	}

	const handleAddQuestion: MouseEventHandler<HTMLButtonElement> = evt => {
		evt.preventDefault();

		const variantsList = textRadioQuestions.map(title => ({ title }))
		testQuestions.questions.push({
			id: testQuestions.questions.length + 1,
			inputType: qType,
			title: questionTitle,
			variants: variantsList,
		})

		setQType('radio')
		

		console.log(testQuestions.questions);
	}

	return (
		<form className='test__page'>
			<div>
				<label htmlFor='questionType'>Выберите тип вопроса:</label>
				<select
					name='questionType'
					id='questionType'
					onChange={e =>
						setQType(e.target.value as 'radio' | 'checkbox' | 'text')
					}
				>
					<option value='radio'>radio</option>
					<option value='checkbox'>checkbox</option>
					<option value='text'>text</option>
				</select>
			</div>
			{qType === 'radio' && (
				<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
					<label htmlFor='questionText'>Введите текст вопроса</label>
					<input
						name='questionText'
						type='text'
						value={questionTitle}
						onChange={e => setQuestionTitle(e.target.value)}
					/>
					<label htmlFor='questionNumber'>
						Сколько вариантов ответа должно быть?
					</label>
					<select onChange={handleRadioQuestionsChange} name='questionNumber'>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
					</select>
					{textRadioQuestions.map((question, index) => (
						<div key={index}>
							<label htmlFor={`questionVariant${index}`}>
								Введите вариант ответа {index + 1}
							</label>
							<input
								type='text'
								value={question}
								onChange={e => handleRadioQuestionTextChange(index, e)}
							/>
						</div>
					))}
				</div>
			)}
			{qType === 'checkbox' && (
				<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
					<label htmlFor='questionText'>Введите текст вопроса</label>
					<input
						name='questionText'
						type='text'
						value={questionTitle}
						onChange={e => setQuestionTitle(e.target.value)}
					/>
					<label htmlFor='questionNumber'>
						Сколько вариантов ответа должно быть?
					</label>
					<select onChange={handleRadioQuestionsChange} name='questionNumber'>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
					</select>
					{textRadioQuestions.map((question, index) => (
						<div key={index}>
							<label htmlFor={`questionVariant${index}`}>
								Введите вариант ответа {index + 1}
							</label>
							<input
								type='text'
								value={question}
								onChange={e => handleRadioQuestionTextChange(index, e)}
							/>
						</div>
					))}
				</div>
			)}
			{qType === 'text' && (
				<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
					<label htmlFor='questionText'>Введите текст вопроса</label>
					<input
						name='questionText'
						type='text'
						value={questionTitle}
						onChange={e => setQuestionTitle(e.target.value)}
					/>
					<label htmlFor='questionNumber'>
						Сколько вариантов ответа должно быть?
					</label>
					<select onChange={handleRadioQuestionsChange} name='questionNumber'>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
					</select>
					{textRadioQuestions.map((question, index) => (
						<div key={index}>
							<label htmlFor={`questionVariant${index}`}>
								Введите вариант ответа {index + 1}
							</label>
							<input
								type='text'
								value={question}
								onChange={e => handleRadioQuestionTextChange(index, e)}
							/>
						</div>
					))}
				</div>
			)}
			<button onClick={handleAddQuestion}>Добавить вопрос</button>
			<Link to={'/'}>Вернуться на главную</Link>
		</form>
	)
}
