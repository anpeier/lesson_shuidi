import useStats from "../utils/useStats";
import Stats from "./Stats";
import { useState } from "react";

export default function CountrySelector() {
  // vuex  useStats 数据中心
  // useStats 被两个差不多的组件复用了， 大部分业务都是这样的
  // 一个数据请求在mounted 发生， setStats
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  // console.log(countries); //mvvm
  const [selectedCountry, setSelectedCountry] = useState("USA");
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error....</p>;
  return (
    <div>
      <h2>Currently Showing {selectedCountry}</h2>
      <select
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
      >
        {countries.countries.map((country) => (
          <option
            key={country.name}
            // value={country.iso3}
            value={country.iso3 === selectedCountry}
          >
            {country.iso3}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}
// useState  跨组件提供状态  替代  redux
