import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [year, setYear] = useState([]);

  useEffect(() => {
    for (let i = 2000; i <= 2024; i++) {
      setYear((pre) => [...pre, i]);
    }
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/birth");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleYear = (newYear) => {
    const dt = data.map((el) => {
      const names = el.name.split(" ");
      const nameData = names.map((ele) => ele.charAt(0).toUpperCase()).join("");
      const [month, day, oldyear] = el.birthday.split("/");
      const newBirthday = `${month}/${day}/${newYear}`;
      const newBirthdays = new Date(`${month}/${day}/${newYear}`);
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const days = daysOfWeek[newBirthdays.getDay()];
      return { ...el, name: nameData, birthday: newBirthday, day: days };
    });

    dt.sort((a, b) => {
      const dateA = new Date(a.birthday);
      const dateB = new Date(b.birthday);
      // Compare dates
      return dateA - dateB;
    });

    setDatas(dt);
  };

  return (
    <div>
      <div className="grid">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day, index) => (
          <div key={index}>
            <p>{day}</p>
            <div className="cart container ">
              {datas.map((el, dataIndex) => {
                if (el.day === day) {
                  return (
                    <p className="ptage" key={dataIndex}>
                      {el.name}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
      <select onChange={(e) => handleYear(e.target.value)}>
        {year.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
}

export default Home;
