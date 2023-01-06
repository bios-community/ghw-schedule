import CardLink from "./CardLink"
import ScheduleData from "../data/ScheduleData"
import '../styles/card.scss'

function Card() {
    console.log(ScheduleData);
    return (
        <div className="card">
            <h2 className="card__title">7th Dec, Sunday</h2>
            <div className="card__link-list">
                <CardLink />
                <CardLink />
            </div>
        </div>
    )
}

export default Card