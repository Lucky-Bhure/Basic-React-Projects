import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handdleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header>
            <div className='container'>
                <div className='logo-container'>
                    <h1>Logo</h1>
                </div>
                <nav>
                <ul className={showMenu ? "ham-menu" :"menu-container"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Description</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </nav>
                <div className='ham-container'>
                    <button onClick={handdleMenu}>
                        {
                            showMenu ? <RxCross1 size={26} />: <GiHamburgerMenu size={26} />
                        }
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
