import React, { useEffect, useState } from "react";
import pepsi from "../../asets/ichimliklar/171-1718746_pepsi-drink.jpg";
import "./ichimlik.css";
import { databaza } from "../Data/Data";

export function Ichimlik() {
  return (
    <>
      {databaza.map((item) => {
        if (item.turi === "ichimlik") {
          return (
            <div className="ichilmik" key={item.id}  >
              <p>{item.nomi}</p>
              <p>{item.narxi}</p>
              <img src={pepsi} alt="" />
            </div>
          );
        }

        return <></>;
      })}
    </>
  );
}
