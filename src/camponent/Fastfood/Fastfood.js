import React, { useState } from "react";
import "./fastfood.css";
import fast from "../../asets/fastfood/Hotdog_cu_chili_si_branza.jpg";

export function Fastfood({ setUpdate }) {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("food")) || []
  );
  const fastdata = [
    {
      id: 1,
      turi: "fastfood",
      nomi: "hoddoc",
      narxi: "6000",
      img: fast,
      count: 0,
    },
    {
      id: 2,
      turi: "fastfood",
      nomi: "donar",
      narxi: "6000",
      img: fast,
      count: 0,
    },
    {
      id: 3,
      turi: "fastfood",
      nomi: "lavash",
      narxi: "6000",
      img: fast,
      count: 0,
    },
  ];

  function locol(item) {

    const MyData = [...basket];
    
    let test = true;

    MyData.map((e) => {
      if (e.id === item.id) {
        test = false;
        e.count += 1;
        setBasket(MyData);
        localStorage.setItem("food", JSON.stringify(MyData));
      }
      return null;
    });

    if (test) {
      MyData.push(item);
      setBasket(MyData);
      localStorage.setItem("food", JSON.stringify(MyData));
    }

    console.log(test);

    setUpdate((prev) => !prev);
  }

  return (
    <div className="fastfood">
      {fastdata.map((item, index) => {
        if (item.count === 0) {
          item.count = 1;
        }
        return (
          <div className="fastmaxsulot" key={index}>
            <img src={item.img} alt="" />

            <p>{item.nomi}</p>
            <p>{item.narxi}</p>

            <div className="btn">
              <button onClick={locol.bind(this, item)}>add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
