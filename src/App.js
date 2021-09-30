import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect, } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

function App() {

  const [obj, setObj] = React.useState([])

  useEffect(() => {
    axios.get("https://leclercscrap.herokuapp.com/boss").then((res)=> {
      console.log(res.data)
      setObj(res.data.response)
    })
    
  }, []);


  return (
    <div className="App">
      <Button variant="contained" style={{ margin: 30 }}>
        SCRAP LECLERC
      </Button>
      <div style={{display: "flex", alignItems: "center", marginLeft: 400, marginRight: 400}}>
        <div>
          {" "}
          Le "Pourcentage Première Page" est le ratio de présence en première
          page, c'est lui qui est important. Le "Pourcentage Marché" est le
          ratio du nombre d'offres sur le marché total (toutes les pages). Le
          site est mis à jour tous les jours entre 9h 30 et 9h 45.
        </div>
      </div>
      {obj.map((el) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <div
              style={{
                border: "solid",
                width: 250,
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                marginLeft: 10,
              }}
            >
              Pourcentage Marché: {el.percentageMarket}
            </div>
            <div
              style={{
                border: "solid",
                width: 250,
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                marginLeft: 10,
              }}
            >
              Desti: {el.desti}
            </div>

            <div
              style={{
                border: "solid",
                width: 250,
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                marginLeft: 10,
                display: "flex",
                flexDirection: "row",
                color: "green",
              }}
            >
              <div style={{ color: "green" }}>Pourcentage Première Page: </div>
              <div style={{ color: "green" }}>{el.percentageFirstPage}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
