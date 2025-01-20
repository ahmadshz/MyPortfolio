import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';
import './Navbar.css';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(true);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleLinkClick = () => {
        if (!openMenu) {
            setOpenMenu(true);
        }
    };

    return (
        <div>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <h1 className='logo'>Ahmad</h1>

                    <ul>
                        <li>
                            <a href='#hero' className="menu-item" >About</a>
                        </li>
                        <li>
                            <a href='#skills' className="menu-item" >Skills</a>
                        </li>
                        <li>
                            <a href='#projects' className="menu-item" >Projects</a>
                        </li>
                        <li>
                            <a href='#contact' className="menu-item" >Contact Me</a>
                        </li>
                    </ul>
                    {openMenu ? (
                        <button className='btn-menu' onClick={toggleMenu}><IoMenu /></button>
                    ) : (
                        <button onClick={toggleMenu} className="btn-menu">
                            <FiX className='fix' />
                        </button>
                    )}
                </div>
            </nav>   

            {!openMenu && (
                <nav className="nav-wrapper-mobile">
                    <ul>
                        <li>
                            <a href='#hero' className="menu-item" onClick={handleLinkClick}>About</a>
                        </li>
                        <li>
                            <a href='#skills' className="menu-item" onClick={handleLinkClick}>Skills</a>
                        </li>
                        <li>
                            <a href='#projects' className="menu-item" onClick={handleLinkClick}>Projects</a>
                        </li>
                        <li>
                            <a href='#contact' className="menu-item" onClick={handleLinkClick}>Contact Me</a>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Navbar;
