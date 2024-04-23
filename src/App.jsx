import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import CurrentTimeComponent from "./components/CurrentTimeComponent/CurrentTimeComponent";
import QuotesComponent from "./components/QuotesComponent/QuotesComponent";
import DetailsComponent from "./components/DetailsComponent/DetailsComponent";
import Ipbase from "@everapi/ipbase-js";

const mocked = {
  data: {
    ip: "82.7.216.59",
    hostname: null,
    type: "v4",
    range_type: {
      type: "PUBLIC",
      description: "Public address",
    },
    connection: {
      asn: 5089,
      organization: "Virgin Media Limited",
      isp: "Virgin Media Limited",
      range: "82.7.216.0/24",
    },
    location: {
      geonames_id: 101750609,
      latitude: 54.68611145019531,
      longitude: -1.212499976158142,
      zip: "TS24",
      continent: {
        code: "EU",
        name: "Europe",
        name_translated: "Europe",
        geonames_id: 6255148,
        wikidata_id: "Q46",
      },
      country: {
        alpha2: "GB",
        alpha3: "GBR",
        calling_codes: ["+44"],
        currencies: [
          {
            symbol: "£",
            name: "British Pound Sterling",
            symbol_native: "£",
            decimal_digits: 2,
            rounding: 0,
            code: "GBP",
            name_plural: "British pounds sterling",
            type: "fiat",
          },
        ],
        emoji: "🇬🇧",
        ioc: "GBR",
        languages: [
          {
            name: "English",
            name_native: "English",
          },
          {
            name: "Cornish",
            name_native: "Kernewek",
          },
          {
            name: "Irish",
            name_native: "Gaeilge",
          },
          {
            name: "Gaelic",
            name_native: "Gaelic",
          },
          {
            name: "Welsh",
            name_native: "Cymraeg",
          },
        ],
        name: "United Kingdom",
        name_translated: "United Kingdom",
        timezones: ["Europe/London"],
        is_in_european_union: false,
        fips: "UK",
        geonames_id: 85633159,
        hasc_id: "GB",
        wikidata_id: "Q145",
      },
      city: {
        fips: null,
        alpha2: null,
        geonames_id: 101750609,
        hasc_id: null,
        wikidata_id: "Q215752",
        name: "Hartlepool",
        name_translated: "Hartlepool",
      },
      region: {
        fips: null,
        alpha2: null,
        geonames_id: 1360698621,
        hasc_id: null,
        wikidata_id: null,
        name: "Durham",
        name_translated: "Durham",
      },
    },
    tlds: [".uk"],
    timezone: {
      id: "Europe/London",
      current_time: "2024-04-20T10:37:32+01:00",
      code: "BST",
      is_daylight_saving: true,
      gmt_offset: 3600,
    },
    security: {
      is_anonymous: null,
      is_datacenter: null,
      is_vpn: null,
      is_bot: null,
      is_abuser: null,
      is_known_attacker: null,
      is_proxy: null,
      is_spam: null,
      is_tor: null,
      proxy_type: null,
      is_icloud_relay: null,
      threat_score: null,
    },
    domains: {
      count: null,
      domains: [],
    },
  },
};

const mocked2 = {
  abbreviation: "BST",
  client_ip: "82.7.216.59",
  datetime: "2024-04-21T08:13:39.416731+01:00",
  day_of_week: 0,
  day_of_year: 112,
  dst: true,
  dst_from: "2024-03-31T01:00:00+00:00",
  dst_offset: 3600,
  dst_until: "2024-10-27T01:00:00+00:00",
  raw_offset: 0,
  timezone: "Europe/London",
  unixtime: 1713683619,
  utc_datetime: "2024-04-21T07:13:39.416731+00:00",
  utc_offset: "+01:00",
  week_number: 16,
};

function App() {
  const [ipApiData, setIpApiData] = useState(mocked);
  const [worldTimeApiData, setWorldTimeApiData] = useState(mocked2);

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // const ipBase = new Ipbase(
  //   "ipb_live_qSRYJeK7U7woCu8fcF8zf0jTQy1e5484YSUWExSL"
  // );

  // useEffect(() => {
  //   ipBase.info().then((response) => {
  //     setIpApiData(response);
  //   });
  // }, []);

  // const fetchWorldTimeApi = async (timezoneId) => {
  //   try {
  //     const res = await fetch(
  //       `http://worldtimeapi.org/api/timezone/${timezoneId}`
  //     );
  //     const data = await res.json();
  //     setWorldTimeApiData(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   if (ipApiData) {
  //     fetchWorldTimeApi(ipApiData?.data?.timezone?.id);
  //   }
  // }, [ipApiData]);

  return (
    <div className="wrapper">
      <Background ipApiData={ipApiData}>
        {!isDetailsOpen && <QuotesComponent />}
        <CurrentTimeComponent
          ipApiData={ipApiData}
          worldTimeApiData={worldTimeApiData}
          setIsDetailsOpen={setIsDetailsOpen}
          isDetailsOpen={isDetailsOpen}
        />
        {isDetailsOpen && <DetailsComponent />}
      </Background>
    </div>
  );
}

export default App;
