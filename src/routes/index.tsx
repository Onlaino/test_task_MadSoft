import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { TestingPage } from '../pages/TestingPage'
import { FormPage } from '../pages/FormPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/test',
		element: <TestingPage />,
	},
	{
		path: '/addtest',
		element: <FormPage/>
	}
])
