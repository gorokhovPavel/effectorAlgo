import React from "react";
import RestaurantList from "./components/restaurantList/index";
//import {restaurants} from './components/restaurantList/index.jsx'
import "antd/dist/antd.css";
function App() {
  const restaurants = [];
  return (
    <>
      <RestaurantList dataList={restaurants} />
    </>
  );
}
export default App;
