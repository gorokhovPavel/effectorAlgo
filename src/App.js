import React from "react";
import RestaurantList from "./components/restaurantList/index";
import Test from "./components/test/index";
import "antd/dist/antd.css";
function App() {
  const restaurants = [];
  return (
    <>
      <Test />
    
      <RestaurantList dataList={restaurants} />
    </>
  );
}
export default App;
