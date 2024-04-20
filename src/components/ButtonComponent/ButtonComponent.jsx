import "./ButtonComponent.css";
import arrowDown from "../../assets/desktop/icon-arrow-down.svg";
import arrowUp from "../../assets/desktop/icon-arrow-up.svg";

const Button = () => {
  return (
    <button className="btn__expand">
      <p className="btn__expand-text">More</p>
      <img src={arrowDown} alt="arrow" className="btn__arrow" />
    </button>
  );
};

export default Button;
