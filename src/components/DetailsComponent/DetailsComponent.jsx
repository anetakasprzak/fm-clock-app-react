import "./DetailsComponent.css";

const DetailsComponent = ({ worldTimeApiData, currentTime }) => {
  const timeZone = worldTimeApiData.timezone;
  const dayOfYear = worldTimeApiData.day_of_year;
  const dayOfWeek = worldTimeApiData.day_of_week;
  const weekNumber = worldTimeApiData.week_number;

  const hour = new Date(currentTime).getHours();
  const dayTime = hour > 5 && hour < 18;

  return (
    <div className={`details__component--box ${!dayTime ? "dark" : ""}`}>
      <div className="details__data--box grid--1">
        <p className="details__text">Current timezone</p>
        <p className="details__data">{timeZone}</p>
      </div>
      <div className="details__data--box grid--2">
        <p className="details__text">Day of the year</p>
        <p className="details__data">{dayOfYear}</p>
      </div>
      <div className="details__data--box grid--3">
        <p className="details__text">Day of the week</p>
        <p className="details__data">{dayOfWeek}</p>
      </div>
      <div className="details__data--box grid--4">
        <p className="details__text">Week number</p>
        <p className="details__data">{weekNumber}</p>
      </div>
    </div>
  );
};

export default DetailsComponent;
