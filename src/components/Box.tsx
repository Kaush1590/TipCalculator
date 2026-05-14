import { useState } from "react";
import "./Box.css"
import Left from "./Left"
import Right from "./Right"

const Box = () => {
  const [price, setPrice] = useState("");
  const [people, setPeople] = useState("");
  const [percent, setPercent] = useState("1")

  return (
    <div className="main-box">
        <Left
        price={price} setPrice={setPrice} people={people} setPeople={setPeople} percent={percent} setPercent={setPercent}
        />
        <Right
        price={price} people={people} percent={percent}
        />
    </div>
  )
}

export default Box