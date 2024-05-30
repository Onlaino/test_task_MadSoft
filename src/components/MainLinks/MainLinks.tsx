import { Link } from 'react-router-dom';
import cl from './MainLinks.module.css';

export const MainLinks = () => {
	return (
		<div className={cl.links}>
			<Link className={cl.link} to={'/test'}>Пройти тестирование</Link>
			<Link className={cl.link} to={'addtest'}>Добавить вопрос к тестам</Link>
		</div>
	)
}