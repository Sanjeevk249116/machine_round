import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";
import Infinite from "./Infinite";

function Home() {
  const [items, SetItems] = useState("");
  const[page,setPage]=useState(1)
  const [data, setData] = useState([]);
  const controlledRef = useRef(null);
 const refData = useRef();
  
  useEffect(() => {
    refData.current.focus();
  }, []);

  const getData = async (items,page) => {
  
    if (controlledRef.current) controlledRef.current.abort();
    controlledRef.current = new AbortController();
    try {
      const data = await axios.get(
        `https://openlibrary.org/search.json?q=${items}&page=${page}`,
        { signal: controlledRef.current.signal }
      )
      setData((pre)=>[...pre,...data.data.docs]);
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    getData(items,page);
  }, [items,page]);
  console.log(data);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          ref={refData}
          name=""
          id=""
          value={items}
          onChange={(e) => SetItems(e.target.value)}
          placeholder="enter search items"
        />
      </div>
    <Infinite data={data} setPage={setPage} />
    </div>
  );
}

export default Home;
