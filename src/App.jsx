import { useState } from "react";
import Button from "./components/button";

function App() {
  const [color, setColor] = useState("#f1f1f1");

  return (
    <>
      <div
        className="h-screen w-full duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="absolute bottom-10 inset-x-0 px-2 flex justify-center">
          <div className="flex justify-center rounded-full bg-white flex-wrap">
            <Button btnColor="Red" textColor="white" colorSetter={setColor} />
            <Button btnColor="Green" textColor="white" colorSetter={setColor} />
            <Button btnColor="Blue" textColor="white" colorSetter={setColor} />
            <Button
              btnColor="Yellow"
              textColor="black"
              colorSetter={setColor}
            />
            <Button
              btnColor="Orange"
              textColor="white"
              colorSetter={setColor}
            />
            <Button btnColor="Olive" textColor="white" colorSetter={setColor} />
            <Button
              btnColor="Violet"
              textColor="white"
              colorSetter={setColor}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
