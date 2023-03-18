import "./Cards.css";

const Cards = function (props) {
  return (
    <div>
      <a className="card-projects" target="_blank" href={props.link}>
        <img src={props.src} style={{ width: 90 }} />
        <h3>{props.info}</h3>
      </a>
    </div>
  );
};

export default Cards;
