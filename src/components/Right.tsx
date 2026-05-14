import "./Right.css"

type Props = {
  price: String,
  people: String,
  percent: String
}

function tipCalc(price: String, people: String, percent: String): {total: String, split: String} {
  let p = 0;
  let o = 1;
  let e = 0;
  if(price.trim() !== "") {
    p = Number(price)
  }

  if(people.trim() !== "") {
    o = Number(people)
  }

  if(percent.trim() !== "") {
    e = Number(percent)
  }

  return {
    total: `${((p*e) / 100).toFixed(2)}`,
    split: `${((p*e) / (100*o)).toFixed(2)}`
  }
}

const Right = ({
  price,
  people,
  percent
}: Props) => {
  let values = tipCalc(price, people, percent);
  return (
    <div className="right-box">
      <div className="total-box">
        <h2 className="total-text">
          Total Amount:
        </h2>

        <h3 className="total-text">
          {values.total}
        </h3>
      </div>

      <div className="split-box">
        <h2 className="split-text">
          Split Amount:
        </h2>

        <h3 className="split-text">
          {values.split}
        </h3>
      </div>
    </div>
  )
}

export default Right