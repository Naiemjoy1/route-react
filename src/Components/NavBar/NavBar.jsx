import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes =[
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
    ];

    return (
        <nav>
            <div className="md:hidden text-xl bg-yellow-300 p-6" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <MdClose></MdClose> 
                    : <RiMenu2Fill className=" "></RiMenu2Fill>
                }
                
            </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open? ' top-24' :'-top-60'} bg-yellow-300 px-6 shadow-lg gap-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;