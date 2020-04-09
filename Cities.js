import React from "react";
import "./cities.css";
import city from "./city";
import Component from "./Component";
import prag from "./img/prague.jpg";

class Cities extends React.Component {
  constructor() {
    super();
    this.state = { city };
  }

  handleDeleteCard(id) {
    const city = this.state.city.concat();
    city.splice(id, 1);
    this.setState({ city });
  }

  render() {
    const info = this.state.city.map((list, id) => (
      <Component
        key={id}
        component={list}
        onDelete={this.handleDeleteCard.bind(this, id)}
      />
    ));
    return (
      <>
        <div className="nav-mein">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Info</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="wrap">{info}</div>
        <div className="footer">
          <div className="box">
            <img src={prag} alt="city" />
            <div>
              Пра́га — статутный город и столица Чешской
              Республики, административный центр Среднечешского края и двух его
              районов: Прага-Восток и Прага-Запад. Образует самостоятельную
              административно-территориальную единицу страны. Население: 1,3 млн
              человек (2018 год). Четырнадцатый по населению город в странах
              Евросоюза. Расположена на берегах реки Влтавы в сорока километрах
              от её впадения в Лабу. Главный политический, экономический и
              культурный центр Чехии. Крупный туристический центр Европы.
              Количество туристов в 2012 году превысило 5,4 млн человек.
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cities;