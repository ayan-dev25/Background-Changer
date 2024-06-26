import { useState } from "react";
import colors from "./Api/Color";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colors.map((color) => {
              return (
                <button
                  key={color.id}
                  className="outline-none px-4 py-1 rounded-full text-white"
                  style={{ backgroundColor: color.color }}
                  onClick={()=>{setColor(color.color)}}
                >
                  {color.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
