
const Navbar=()=>{
    return (
        <nav className="w-full  h-16 bg-slate-900 flex justify-between px-6 sticky top-0">
            <div className="logo flex items-center justify-center">
                <a href="#" className="flex items-center justify-center gap-2">
                    <img src="/csi-logo.jpg" alt="logo" className="rounded-full h-10 w-10" />
                    <p className="logo-text text-white font-semibold">
                        CSI
                    </p>
                </a>
            </div>
            <div className="nav-links flex  justify-center items-center">
                <ul className="flex items-center justify-center list-none gap-4 text-white ">
                    <li className="hover:text-emerald-400"><a href="#about">About</a></li>
                    <li className="hover:text-emerald-400">Events</li>
                    
                    <li className="hover:text-emerald-400">Contact Us</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

