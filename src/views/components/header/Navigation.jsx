import React, { useState } from 'react'
import MenuBar from '../../../assets/menu-bar.svg'
import MenuBarClose from '../../../assets/menu-bar-close.svg'
import {useTransition, animated} from '@react-spring/web';
import NavigationMenu from './NavigationMenu.jsx'

function Navigation() {
    // use state hook for showing & hidding menu
    const [showMenu, setShowMenu] = useState(false);

    // using react-spring for animation
    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: { opacity: 0, transform: 'translateX(-100%)'},
    });
    
    return (
        <nav>
            {/* to toggle from false to true, set to showMenu */}
            <div className="navMenuBar">
                <img src={ (showMenu)? MenuBarClose : MenuBar } alt="menu bar" onClick={() => setShowMenu(!showMenu)}/>
            </div>
            
           {
            menuTransitions((styles, item) => 
                item ? <animated.div style={styles} className="navMenu">
                    <NavigationMenu 
                        closeMenu={() => setShowMenu(false)}
                    />
                </animated.div> : null
           )}
            
        </nav>
    )
}

export default Navigation