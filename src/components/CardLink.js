import '../styles/cardLink.scss';

function CardLink(props) {
	console.log(props);
	return (
		<div className="card-link">
			<div className="card-link__time">{props.time}</div>
			<a href={props.link} className="card-link__link link">
				{props.title}
			</a>
		</div>
	);
}

export default CardLink;
