import cn from 'classnames'
import { useEffect, useState } from 'react'
import { Question } from '../components/Question/Question'
import { testQuestions } from '../data/testQuestions'

export const TestingPage = () => {
	const { testName } = testQuestions
	const [id, setId] = useState<number>(() =>
		parseInt(localStorage.getItem('currentQuestionId') || '1')
	)
	const [timer, setTimer] = useState<number>(() =>
		parseInt(localStorage.getItem('timer') || '1200')
	)

	useEffect(() => {
		const timerLeft = setTimeout(() => {
			if (timer > 0) {
				setTimer(prev => prev - 1)
			}
		}, 1000)

		return () => clearTimeout(timerLeft)
	}, [timer])

	useEffect(() => {
		localStorage.setItem('currentQuestionId', id.toString())
		localStorage.setItem('timer', timer.toString())


	}, [id, timer])

	const renderDividers = () => {
		return testQuestions.questions.map((dv, index) => (
			<div
				className={cn('divider', {
					['divider_active']: id === index + 1,
					['divider_was']: id > index + 1,
				})}
				key={index}
			></div>
		))
	}

	const handleBack = () => {
		if (id > 1) setId(id - 1)
	}

	const dividers = renderDividers()

	return (
		<div className='test__page'>
			<div className='test__page_title'>
				<h1>{testName}</h1>
				<div className='timer'>
					{Math.floor(timer / 60)
						.toString()
						.padStart(2, '0')}
					:{(timer % 60).toString().padStart(2, '0')}
				</div>
				<div className='test__page_back' onClick={handleBack}>
					К предыдущему вопросу&nbsp;&#8592;
				</div>
			</div>
			<div className='divider__wrapper'>{dividers}</div>
			<Question timer={timer} setTimer={setTimer} id={id} setId={setId} />
		</div>
	)
}
