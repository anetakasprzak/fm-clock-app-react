import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Button from "./components/ButtonComponent/ButtonComponent";
import CurrentTimeComponent from "./components/CurrentTimeComponent/CurrentTimeComponent";
import QuotesComponent from "./components/QuotesComponent/QuotesComponent";
import Ipbase from "@everapi/ipbase-js";

function App() {
  const [apiData, setApiData] = useState({});

  const ipBase = new Ipbase(
    "ipb_live_qSRYJeK7U7woCu8fcF8zf0jTQy1e5484YSUWExSL"
  );

  useEffect(() => {
    ipBase.info().then((response) => {
      setApiData(response);
    });
  }, []);

  return (
    <div className="wrapper">
      <Background>
        <QuotesComponent />
        <CurrentTimeComponent apiData={apiData} />
        <Button />
      </Background>
    </div>
  );
}

export default App;
