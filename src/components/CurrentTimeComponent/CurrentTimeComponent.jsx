import "./CurrentTimeComponent.css";
import iconMoon from "../../assets/desktop/icon-moon.svg";
import iconSun from "../../assets/desktop/icon-sun.svg";
import { useEffect } from "react";

const CurrentTimeComponent = () => {
  async function fetchIP() {
    try {
      const res = await fetch(`https://api.ipify.org/?format=json`);
      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(function () {
    fetchIP();
  }, []);

  return <div className="">CURRENT TIME</div>;
};

export default CurrentTimeComponent;
