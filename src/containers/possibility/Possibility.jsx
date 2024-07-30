import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility-image" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early access to Get Started</h4>
        <h1 className="gradient__text">
          Possibilities are beyond your imagination
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nam
          fuga beatae! Fuga molestias ipsa et nihil nam laborum quae.
        </p>
        <h4>Request Early access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
