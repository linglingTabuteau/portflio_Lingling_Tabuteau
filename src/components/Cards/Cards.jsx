import Card from "../Card/Card";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="Cards">
      {props.cardsList.map((card) => (
        <Card
          projectName={card.projectName}
          projectDescription={card.projectDescription}
          link={card.link}
          img={card.img}
        />
      ))}
    </div>
  );
};

export default Cards;
