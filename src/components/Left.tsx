import type React from "react"
import "./Left.css"

type Props = {
  price: string,
  setPrice: React.Dispatch<React.SetStateAction<string>>,
  people: string,
  setPeople: React.Dispatch<React.SetStateAction<string>>,
  percent: string,
  setPercent: React.Dispatch<React.SetStateAction<string>>
}

const Left = ({
  price,
  setPrice,
  people,
  setPeople,
  percent,
  setPercent
}: Props) => {
  return (
    <div className="left-box">
        <h4 className="text"> Enter total tip amount:</h4>
        <input type="number" name="num" value={price} className="textbox" onChange={(e) => setPrice(e.target.value)} placeholder="0" />

        <h4 className="text"> Enter number of people:</h4>
        <input type="number" name="num" value={people} className="textbox" onChange={(e) => setPeople(e.target.value)} placeholder="0" />

        <h4 className="text">Enter tip percentage: </h4>
        <div className="buttongrid">
          <button type="button" onClick={() => setPercent("1")} className={`radio ${percent === "1" ? "active" : ""}`}> 1 </button>
          <button type="button" onClick={() => setPercent("2")} className={`radio ${percent === "2" ? "active" : ""}`}> 2 </button>
          <button type="button" onClick={() => setPercent("5")} className={`radio ${percent === "5" ? "active" : ""}`}> 5 </button>
          <button type="button" onClick={() => setPercent("8")} className={`radio ${percent === "8" ? "active" : ""}`}> 8 </button>
          <button type="button" onClick={() => setPercent("10")} className={`radio ${percent === "10" ? "active" : ""}`}> 10 </button>
          <button type="button" onClick={() => setPercent("12")} className={`radio ${percent === "12" ? "active" : ""}`}> 12 </button>
          <button type="button" onClick={() => setPercent("15")} className={`radio ${percent === "15" ? "active" : ""}`}> 15 </button>
          <button type="button" onClick={() => setPercent("20")} className={`radio ${percent === "20" ? "active" : ""}`}> 20 </button>
        </div>
        <input type="number" name=""
          value={!["1", "2", "5", "8", "10", "12", "15", "20"].includes(percent) ? percent : ""}

          onChange={
            (e) => setPercent(e.target.value)
          }

          className={
            `textbox radio ${!["1", "2", "5","8", "10", "12", "15", "20"].includes(percent) ? "active" : ""}`
          }

          placeholder={`${percent} or Custom`}
          />
    </div>
  )
}

export default Left