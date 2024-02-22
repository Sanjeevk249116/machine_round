import React, { useState } from 'react'

function TraficeLight() {
    const [greenLightIndex, setGreenLightIndex] = useState(0);

  const changeLight = (index) => {
    setGreenLightIndex(index);
  };

  return (
    <div>
    <div className="road">Road 1 {greenLightIndex === 0 ? "(Green)" : "Red"}</div>
      <div className="road">Road 2 {greenLightIndex === 1 && "(Green)"}</div>
      <div className="road">Road 3 {greenLightIndex === 2 && "(Green)"}</div>
      <div className="road">Road 4 {greenLightIndex === 3 && "(Green)"}</div>

      <div className="traffic-light">
        {['red', 'red', 'red', 'red'].map((color, index) => (
          <div
            key={index}
            className={index === greenLightIndex ? 'light green' : `light ${color}`}
            onClick={() => changeLight(index)}>
                "hello"
            
            </div>
        ))}
      </div>
    </div>
  );
}

export default TraficeLight
