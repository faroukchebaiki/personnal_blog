import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export default function Top() {
    const [isOpen, setOpen] = useState(false)
    return (
        <header className="">
            <nav className="nav ontop">
                <a href='#A'><h3 className="">Logo</h3></a>
                <div >
                    <ul className=" ">
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
                            let className = 'buttons';
                            if (toggled) {
                            className += ' slideIn';
                            } else {
                            // close a menu
                            }
                            }}
                    />
                </div>
            </nav>
            <div className="nav onbottom"></div>
        </header>
    );
}
