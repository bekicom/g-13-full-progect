import React, { useEffect, useState } from "react";
import "./main.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import { Fastfood } from "../Fastfood/Fastfood";
import { Ichimlik } from "../Ichimlik/Ichimlik";
import { Maxsulot } from "../Maxsulot/Maxsulot";
import { Shirinlik } from "../Shirinlik/Shirinlik";

export function Main() {
  const [updeate, setUpdate] = useState(false);
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("food")) || []
  );

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("food")) || []);
  }, [updeate]);

  useEffect(() => {
    let total = 0;
    basket.map((item) => {
      total += item.narxi * item.count;
      return setTotalPrice(total);
    });
  }, [updeate, basket]);

  function dicrement(id) {
    const MyData = [...basket];

    MyData.map((item) => {
      if (item.id === id) {
        item.count <= 1 ? (item.count = 1) : item.count--;
        setBasket(MyData);
        localStorage.setItem("food", JSON.stringify(MyData));
      }
      return MyData;
    });
  }
  function increment(id) {
    const MyData = [...basket];

    MyData.map((item) => {
      if (item.id === id) {
        item.count++;
        setBasket(MyData);
        localStorage.setItem("food", JSON.stringify(MyData));
      }
      return MyData;
    });
  }


  return (
    <Router>
      <div className="main">
        <div className="menyular">
          <NavLink to="/" activeclassname="active">
            fastfood
          </NavLink>
          <NavLink to="ichimlik" activeclassname="active">
            ichimlik
          </NavLink>
          <NavLink to="shirinlik" activeclassname="active">
            shirinlik
          </NavLink>
          <NavLink to="masulot" activeclassname="active">
            maxsulot
          </NavLink>
        </div>

        <div className="rezultat">
          <Routes>
            <Route
              exact
              path="/"
              element={<Fastfood setUpdate={setUpdate} />}
            />
            <Route path="ichimlik" element={<Ichimlik />} />
            <Route path="shirinlik" element={<Shirinlik />} />
            <Route path="masulot" element={<Maxsulot />} />
          </Routes>
        </div>

        <div className="locol">
          {basket.map((item, index) => {
            return (
              <div key={index} className="locol-pages">
                <img src={item.img} alt="" />
                <p>{item.turi}</p>
                <p>{item.nomi}</p>
                <p>{item.narxi}</p>
                <button onClick={dicrement.bind(this, item.id)}>-</button>
                <p>{item.count}x</p>
                <button onClick={increment.bind(this, item.id)}>+</button>
              </div>
            );
          })}

          <h1>{totalPrice} sum</h1>
        </div>
      </div>
    </Router>
  );
}
