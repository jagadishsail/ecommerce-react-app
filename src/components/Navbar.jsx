import React from 'react';
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
   const quantity = 0; // Assuming quantity is defined somewhere in your code

    return (
    <div className='navbar'>
      <Link to="/" > Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <div className="cart_container">
              <ShoppingCartIcon></ShoppingCartIcon>
              <div className="cart_quantity">{quantity}</div>
          </div>
        </Link>
    </div>
  )
}

export default Navbar