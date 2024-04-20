import "./CurrentTimeComponent.css";
import iconMoon from "../../assets/desktop/icon-moon.svg";
import iconSun from "../../assets/desktop/icon-sun.svg";

const CurrentTimeComponent = ({ apiData }) => {
  const cityName = apiData?.data?.location?.city?.name;
  const countryName = apiData?.data?.location?.country?.name;
  const timezoneCode = apiData?.data?.timezone?.code;
  const currentTime = apiData?.data?.timezone?.current_time;

  const hour = new Date(currentTime).getHours();
  const minutes = new Date(currentTime).getMinutes();
  console.log(`${hour}:${minutes}`);

  return <div className="">{"name"}</div>;
};

export default CurrentTimeComponent;
