import imgDayMobile from "./assets/mobile/bg-image-daytime.jpg";
import imgNightMobile from "./assets/mobile/bg-image-nighttime.jpg";
import imgDayTablet from "./assets/tablet/bg-image-daytime.jpg";
import imgNightTablet from "./assets/tablet/bg-image-nighttime.jpg";
import imgDayDesktop from "./assets/desktop/bg-image-daytime.jpg";
import imgNightDesktop from "./assets/desktop/bg-image-nighttime.jpg";

function App() {
  const currentTime = new Date().getHours();
  const dayTime = currentTime > 5 && currentTime < 18;

  return (
    <div className="wrapper">
      <div className="background__container">
        {dayTime && (
          <picture className="background--day">
            <source srcSet={imgDayDesktop} media="(min-width: 75em)" />
            <source srcSet={imgDayTablet} media="(min-width: 30em)" />
            <source srcSet={imgDayMobile} media="(min-width: 16em)" />
            <img src={imgDayMobile} alt="image" />
          </picture>
        )}
        {!dayTime && (
          <picture className="background--night">
            <source srcSet={imgNightDesktop} media="(min-width: 75em)" />
            <source srcSet={imgNightTablet} media="(min-width: 30em)" />
            <source srcSet={imgNightMobile} media="(min-width: 16em)" />
            <img src={imgNightMobile} alt="image" />
          </picture>
        )}
      </div>
    </div>
  );
}

export default App;
