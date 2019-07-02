import React from 'react';
import RestaurantList from './components/restaurantList/index';
import {restaurants} from './sources/fixtures'

function App() {

  return (
    <div>
      <RestaurantList {...restaurants} />
    </div>
  );
}

export default App;
