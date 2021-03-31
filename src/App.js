import React, { useRef, useEffect } from "react";
import combinate from "combinate";
import "./App.css";

const App = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
 
  useEffect(() => {
    const combinations = createCombinations();
    const cntxt = canvasRef.current.getContext("2d");
    var k = 0;
    for (var i = 0; i < 256; i++) {
      for (var j = 0; j < 128; j++) {
        cntxt.fillStyle =
          "rgb(" +
          combinations[k].red +
          "," +
          combinations[k].green +
          "," +
          combinations[k].blue +
          ")";
        k++;
        cntxt.fillRect(j, i, 1, 1);
      }
    }
  }, []);

  const createCombinations = () => {
    var count = 0;
    const modified = new Array(32).fill(0).map(() => {
      count += 8;
      if (count === 256) {
        return count - 1;
      } else {
        return count;
      }
    });
    const options = {
      red: modified,
      green: modified,
      blue: modified,
    };
    return combinate(options);
  };


  return (
    <div>
      <canvas
        ref={canvasRef}
        className="canvas"
        width="128"
        height="256"
      ></canvas>
    </div>
  );
};

export default App;
