import { ITestQuestions } from './testQuestions.types';

export const testQuestions: ITestQuestions = {
	testName: 'Frontend test',
	questions: [
		{
			id: 1,
			inputType: 'radio',
			title:
				'Что должен знать фронтенд-разработчик? Назовите три ключевых технологии',
			variants: [
				{ title: 'HTML, CSS, JS', flag: true },
				{ title: 'PHP, Kotlin, Java' },
				{ title: 'C#, .NET, Perl' },
			],
		},
		{
			id: 2,
			inputType: 'radio',
			title:
				'Какой из следующих фреймворков наиболее популярен в фронтенд-разработке?',
			variants: [
				{ title: 'React', flag: true },
				{ title: 'Vue.js' },
				{ title: 'Angular' },
			],
		},
		{
			id: 3,
			inputType: 'radio',
			title: 'Что такое SPA (Single-Page Application)?',
			variants: [
				{ title: 'Многостраничное приложение' },
				{ title: 'Приложение, которое работает на одной странице', flag: true },
				{ title: 'Приложение, которое работает на нескольких страницах' },
			],
		},
		{
			id: 4,
			inputType: 'checkbox',
			title:
				'Какая из следующих технологий используется для стилизации веб-страниц?',
			variants: [
				{ title: 'CSS', flag: true },
				{ title: 'SASS', flag: true },
				{ title: 'LESS', flag: true },
			],
		},
		{
			id: 5,
			inputType: 'radio',
			title:
				'Что выведется в консоль? "let d?, console.log(d)"',
			variants: [
				{ title: 'undefined', flag: true },
				{ title: 'null' },
				{ title: 'NaN' },
			],
		},
		{
			id: 6,
			inputType: 'text',
			title:
				'Какая из следующих технологий используется для стилизации веб-страниц?',
			variants: [
				{ title: 'CSS', flag: true },
				{ title: 'SASS', flag: true },
				{ title: 'LESS', flag: true },
			],
		},
	],
}
