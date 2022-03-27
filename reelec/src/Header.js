import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type="text" />
                <FontAwesomeIcon className='header__searchIcon' icon={faSearch} />
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello</span>
                    <span className='header__optionLineTwo'>Sign in</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>&#38; Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to={"/checkout"}>
                    <div className='header__optionBasket'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className='header__optionLineTwo header__basketCount'>0</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header