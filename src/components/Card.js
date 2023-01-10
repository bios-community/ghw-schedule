import CardLink from './CardLink';
import '../styles/card.scss';

function Card(props) {
	const cardLinkArray = props.events.map(event => <CardLink {...event} />);
	return (
		<div className="card">
			<h2 className="card__title">{props.dateDay}</h2>
			<div className="card__link-list">{cardLinkArray}</div>
		</div>
	);
}

export default Card;
