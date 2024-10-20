import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import CurrentTimeComponent from "./components/CurrentTimeComponent/CurrentTimeComponent";
import QuotesComponent from "./components/QuotesComponent/QuotesComponent";
import DetailsComponent from "./components/DetailsComponent/DetailsComponent";
import Ipbase from "@everapi/ipbase-js";

function App() {
  const [ipApiData, setIpApiData] = useState([]);
  const [worldTimeApiData, setWorldTimeApiData] = useState([]);

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const ipBase = new Ipbase(
    "ipb_live_qSRYJeK7U7woCu8fcF8zf0jTQy1e5484YSUWExSL"
  );

  useEffect(() => {
    ipBase
      .info()
      .then((response) => {
        if (response) {
          setIpApiData(response);
        }
      })
      .catch((err) => console.error(err.message));
  }, []);

  const fetchWorldTimeApi = async (timezoneId) => {
    try {
      const res = await fetch(
        `https://worldtimeapi.org/api/timezone/${timezoneId}`
      );
      const data = await res.json();
      setWorldTimeApiData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (ipApiData) {
      fetchWorldTimeApi(ipApiData?.data?.timezone?.id);
    }
  }, [ipApiData]);

  return (
    <div className="wrapper">
      <Background ipApiData={ipApiData}>
        <div className="container">
          {!isDetailsOpen && <QuotesComponent />}
          <CurrentTimeComponent
            ipApiData={ipApiData}
            worldTimeApiData={worldTimeApiData}
            setIsDetailsOpen={setIsDetailsOpen}
            isDetailsOpen={isDetailsOpen}
          />
          {isDetailsOpen && (
            <DetailsComponent
              worldTimeApiData={worldTimeApiData}
              currentTime={ipApiData?.data?.timezone?.current_time}
            />
          )}
        </div>
      </Background>
    </div>
  );
}

export default App;
