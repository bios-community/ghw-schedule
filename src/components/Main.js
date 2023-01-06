import Card from "./Card";
import "../styles/main.scss";
import ScheduleData from "../data/ScheduleData";

function Main() {
  const cardsList = ScheduleData.map((cardItem) => <Card {...cardItem} />);
  
  return (
    <main className="main">
        {cardsList}
    </main>
  );
}

export default Main;
