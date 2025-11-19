import React from 'react'
import Logo from '../assets/images/logo.svg'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'
function Nav() {
  return (
    <nav className='nav-wrapper'>
        <div className="nav-content">
            <ul className='list-styled'>
                <li>
                    <img src={Logo} alt="Logo" />
                </li>
                <li>
                    <a className='link-styled'>store</a>
                </li>
                <li>
                    <a className='link-styled'>mac</a>
                </li>
                <li>
                    <a className='link-styled'>iphone</a>
                </li>
                <li>
                    <a className='link-styled'>watch</a>
                </li>
                <li>
                    <a className='link-styled'>airpods</a>
                </li>

                <li>
                    <a className='link-styled'>Tv & Home</a>
                </li>
                <li>
                    <a className='link-styled'>Entertainment</a>
                </li>
                <li>
                    <a className='link-styled'>accessories</a>
                </li>

                <li>
                    <a className='link-styled'>support</a>
                </li>

                <li>
                    <img src={Search} alt="searchlogo" />
                </li>
                <li>
                    <img src={Store} alt="storeicon" />
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav