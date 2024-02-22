import React from "react";

function Infinite({ data, setPage }) {
  const getPage = () => {
    setPage((pre) => pre + 1);
  };

  return (
    <div>
      {data?.map((el, idx) => (
        <div key={idx}>
          {el.title}
          <div onClick={getPage}>
            {" "}
            {idx === data.length - 1 && "Add more items"}{" "}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Infinite;
