import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';


function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to="/">
        <img className='header_logo'
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
              
      </Link>

      <div className="header_search">
        <input
          placeholder="Search"
          className="header_searchInput"
          type="text"
        />

        <img
          class='header_searchIcon'
          src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" />

      </div>

      <div className="header_nav">

        <div className='header_option'>

          <span className='header_option_lineOne'>
            Hello</span>

          <span className='header_option_lineTwo'>
            Sign in</span>

        </div>

        <div className='header_option'>

          <span className='header_option_lineOne'>
            Returns</span>

          <span className='header_option_lineTwo'>
            & Orders</span>
          
        </div>

        <div className='header_option'>

          <span className='header_option_lineOne'>
            Your</span> 
          <span className='header_option_lineTwo'>
            Prime</span>
          
        </div>

        <Link to="/checkout">
          <div className='header_optionBasket'>

            <img className='basketIcon'
              src='https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg' />

            <span className='header_option_lineTwo cart_count'>
              {basket?.length}
            </span>

          </div>
        
        </Link>

        

      </div>

    </div>
  )
}

export default Header