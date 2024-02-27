import React from 'react'
import {Link} from 'react-router-dom'

function NavigationMenu(props) {
  return (
    <div>
        <ul>
            <li>
                <Link 
                    to="/"
                    onClick={props.closeMenu}
                    >
                        Home
                </Link>
            </li>
            <li>
                <Link 
                    to="/about"
                    onClick={props.closeMenu}
                    >
                        About
                </Link>
            </li>
            <li>
                <Link 
                    to="/blog"
                    onClick={props.closeMenu}
                    >
                        Blog
                </Link>
            </li>
            <li>
                <Link 
                    to="/techcrunch"
                    onClick={props.closeMenu}
                    >
                        Techcrunch
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavigationMenu