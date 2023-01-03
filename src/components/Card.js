import CardListItem from "./CardListItem"

function Card() {
    return (
        <div className="grid__item">
                <h2 className="grid__item__title">
                    DEC 6 (TUE)
                </h2>
                <div className="grid__item__list">
                    <CardListItem />
                </div>
            </div>
    )
}

export default Card;