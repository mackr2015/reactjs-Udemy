import React, { useState } from 'react'
import MenuBar from '../../assets/menu-bar.svg'
import MenuBarClose from '../../assets/menu-bar-close.svg'

function Navigation() {
    // use state hook for showing & hidding menu
    const [showMenu, setShowMenu] = useState(false);

    let navMenu = null;
    if(showMenu) {
        navMenu = <div>the menu</div>;
    }
    
    return (
    <nav>
        {/* to toggle from false to true, set to showMenu */}
        <div className="max-w-10 cursor-pointer">
            <img src={ (showMenu)? MenuBarClose : MenuBar } alt="menu bar" onClick={() => setShowMenu(!showMenu)}/>
        </div>
        {navMenu}
        
    </nav>
    )
}

export default Navigation