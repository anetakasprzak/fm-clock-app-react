import "./Background.css";

const Background = ({ children, ipApiData }) => {
  const currentTime = ipApiData?.data?.timezone?.current_time;

  const hour = new Date(currentTime).getHours();

  const dayTime = hour > 5 && hour < 18;

  return (
    <div className={`background__container ${dayTime ? "day" : "night"}`}>
      {children}
    </div>
  );
};

export default Background;
