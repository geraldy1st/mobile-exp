import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';

// const ShopPage = () => {
//   return (
//     <div>
//       <div>
//         <Link to="/">Home</Link>
//       </div>
//       <img
//         style={{
//           width: '120px',
//         }}
//         src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567812929188"
//         alt=""
//       />
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
