import cl from './Question.module.css'
import { FormEventHandler } from 'react'
import { testQuestions } from '../../data/testQuestions'
import { IQuestionProps } from './Question.props'
import { Link } from 'react-router-dom'

export const Question = ({
	id = 1,
	questionTitle,
	setId,
	setTimer,
}: IQuestionProps) => {
	const question = testQuestions.questions.find(q => q.id === id)


	
	if (!question) {
		return (
			<div
				onClick={() => {
					setTimer(1200)
					setId(1)
					localStorage.setItem('currentQuestionId', '1')
					localStorage.setItem('timer', '1200')
					return
				}}
			>
				<h2>Тест отправлен на проверку</h2>
				<Link to={'/'}>Вернуться на главную</Link>
			</div>
		)
	}

	const handleAnswer: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		setId(id + 1)
	}

	return (
		<section className={cl.questionSection}>
			<h1>
				Вопрос{id}.{questionTitle}{' '}
			</h1>
			<form className={cl.form} onSubmit={handleAnswer}>
				{question.title}
				{question.inputType === 'text' ? (
					<div className={cl.wrapper}>
						<input
							type='text'
							name={`question_${id}`}
							id={`variant_${id}_text`}
						/>
					</div>
				) : (
					question.variants.map((v, vIndex) => (
						<div className={cl.wrapper} key={vIndex}>
							<input
								type={question.inputType}
								name={`question_${id}`}
								id={`variant_${id}_${vIndex}`}
							/>
							<label htmlFor={`variant_${id}_${vIndex}`}>{v.title}</label>
						</div>
					))
				)}
				<button className={cl.button}>Ответить&nbsp;&#8594;</button>
			</form>
		</section>
	)
}
