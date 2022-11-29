import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export default function Top() {
    const [isOpen, setOpen] = useState(false)
    return (
        <header className="">
            <nav className="nav ontop">
                <a href='#A'><h3 className="logo">Farouk Blog</h3></a>
                <div >
                    <ul className="phone">
                        <li><a href="#A">Home</a></li>
                        <li><a href="#b">Main</a></li>
                        <li><a href="#c">About</a></li>
                    </ul>
                </div>
                <div className="burger">
                    <Hamburger 
                        toggled={isOpen} 
                        toggle={setOpen}
                        onToggle={toggled=> {
                            if (toggled) {
                            document.querySelector('.phone').style.display = 'flex';
                            } else {
                            document.querySelector('.phone').style.display = 'none';
                            }
                            }}
                    />
                </div>
            </nav>
            <div className="nav onbottom"></div>
        </header>
    );
}
