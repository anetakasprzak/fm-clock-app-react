import "./CurrentTimeComponent.css";
import Button from "../ButtonComponent/ButtonComponent";
import iconMoon from "../../assets/desktop/icon-moon.svg";
import iconSun from "../../assets/desktop/icon-sun.svg";

const CurrentTimeComponent = ({ ipApiData }) => {
  const cityName = ipApiData?.data?.location?.city?.name;
  const countryName = ipApiData?.data?.location?.country?.name;
  const timezoneCode = ipApiData?.data?.timezone?.code;
  const currentTime = ipApiData?.data?.timezone?.current_time;

  const hour = new Date(currentTime).getHours();
  const minutes = new Date(currentTime).getMinutes();

  /*
  
  - "Good morning" between 5am and 12pm
  - "Good afternoon" between 12pm and 6pm
  - "Good evening" between 6pm and 5am

  */

  const morning = hour >= 5 && hour < 12;
  const afternoon = hour >= 12 && hour < 18;
  const dayTime = hour > 5 && hour < 18;

  return (
    <div className="time__btn--wrapper">
      <div className="current__time--box">
        <div className="greeting__box">
          {dayTime ? (
            <img src={iconSun} alt="icon sun" className="current__time--icon" />
          ) : (
            <img
              src={iconMoon}
              alt="icon moon"
              className="current__time--icon"
            />
          )}
          <p className="greeting__text">
            {morning && !afternoon && "Good morning"}
            {afternoon && "Good afternoon"}
            {!morning && !afternoon && "Good evening"}
          </p>
          <span className="greeting__currently greeting__text">
            , it&apos;s currently
          </span>
        </div>
        <div className="current__hour">
          {hour}:{minutes}
          <span className="current__hour--code"> {timezoneCode}</span>
        </div>
        <p className="location">
          in {cityName}, {countryName}
        </p>
      </div>
      <Button />
    </div>
  );
};

export default CurrentTimeComponent;
