import React from 'react';
import RestaurantList from './components/restaurantList/index';
import {restaurants} from './sources/fixtures'
import "antd/dist/antd.css";

function App() {

  return (
    <div>
      <RestaurantList dataList={restaurants} />
    </div>
  );
}

export default App;
