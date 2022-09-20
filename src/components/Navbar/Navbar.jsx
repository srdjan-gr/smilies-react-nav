import React from 'react'
import './Navbar.css'
import { IoSearchOutline, IoCartOutline, IoBagOutline, IoEllipseOutline, IoMenuOutline, IoEllipsisVerticalOutline } from 'react-icons/io5'

let iconsStyle = {
    cursor: 'pointer',
    // transition: 'all 0.2s ease',
    fontSize: '1.8rem',
    marginLeft: '2rem'
};

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <div className="navbar__left" id="navbar__left">

                            <div className="lang-menu">
                                <li><a class="lang-active">EN</a></li>
                                <li><a>SR</a></li>
                            </div>

                            <div className='pages-menu'>
                                <li className="current"><a href="/index.html">Home</a></li>
                                <li><a href="/pages/contact-pg.html">Contact</a></li>
                                <li><a href="/pages/about-us.html">About Us</a></li>
                            </div>

                        </div>
                        <div className="navbar__right">

                            <span><IoSearchOutline style={iconsStyle} /></span>
                            <span><IoBagOutline style={iconsStyle} /></span>

                            <li className='bag__full'> <a href="/pages/shoping.html"><IoEllipseOutline /></a></li>

                            <li className="login"><a href="pages/login.html">Log in / Sign In</a></li>

                            <li className='mobile__menu'><IoEllipsisVerticalOutline /></li>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar