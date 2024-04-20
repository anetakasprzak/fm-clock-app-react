import "./Background.css";

const Background = ({ children }) => {
  // const currentTime = new Date().getHours();
  const currentTime = 12;

  const dayTime = currentTime > 5 && currentTime < 18;

  return (
    <div className={`background__container ${dayTime ? "day" : "night"}`}>
      {children}
    </div>
  );
};

export default Background;
