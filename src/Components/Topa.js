import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import NavButtons from './navbuttons';

export default function Topa() {
    const [isOpen, setOpen] = useState(false)
    return (
        <header className="header">
            <div className="header toppost">
                    <a href='#A'><h3 className="logo">Farouk Blog</h3></a>
                    <NavButtons className='pcnav' />
                    <div className="burger">
                        <Hamburger 
                            toggled={isOpen} 
                            toggle={setOpen}
                            onToggle={toggled=> {
                                if (toggled) {
                                document.querySelector('.phonenav').style.display = 'flex';
                                } else {
                                document.querySelector('.phonenav').style.display = 'none';
                                }
                                }}
                        />
                    </div>
                    <NavButtons className='phonenav' />
            </div>
        </header>
    );
}