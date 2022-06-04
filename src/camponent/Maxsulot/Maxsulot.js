import React, { useState } from 'react'
import "./masulot.css"

export function Maxsulot() {


  const[data,setdata]= useState({});


    function myfuntion(e){
      e.preventDefault()
      console.log(data);
    }

    
    






  return (
    <div className="Addwrapper">
      <form action="" id="form" onSubmit={myfuntion}>
        <input
          autoComplete="off"
          type="text"
          name=""
          id="turi"
          placeholder="turi"
          onChange={(e) => setdata({ ...data, turi: e.target.value })}
        />

        <input
          autoComplete="off"
          type="text"
          name=""
          id="nomi"
          placeholder="nomi"
          onChange={(e) => setdata({ ...data, nomi: e.target.value })}
        />
        <input
          autoComplete="off"
          type="text"
          name=""
          id="soni"
          placeholder="soni"
          onChange={(e) => setdata({ ...data, soni: e.target.value })}
        />
        <input
          autoComplete="off"
          type="text"
          name=""
          id="narxi"
          placeholder="narxi"
          onChange={(e) => setdata({ ...data, narxi: e.target.value })}
        />
        <label>
          <p>rasm tanlash</p>
          <input
            autoComplete="off"
            type="file"
            name=""
            id="img"
            onChange={(e) => setdata({ ...data, img: e.target.files[0] })}
          />
        </label>
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
}


