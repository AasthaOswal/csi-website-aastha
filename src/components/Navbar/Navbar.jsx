
const Navbar=()=>{
    return (
        <nav className="w-full  h-16 bg-slate-900 flex justify-between  mx-auto px-6 sticky top-0 z-10">
            <div className="navbar-wrapper bg-slate-900  flex justify-between  mx-auto  w-full max-w-5xl">
                <div className="logo flex items-center justify-center">
                    <a href="#" className="flex items-center justify-center gap-2">
                        <img src="/csi-logo.jpg" alt="logo" className="rounded-full h-10 w-10" />
                        <p className="logo-text sm:text-xl text-white font-semibold">
                            CSI-DMCE
                        </p>
                    </a>
                </div>
                <div className="nav-links flex  justify-center items-center">
                    <ul className="flex items-center justify-center list-none gap-4 text-white ">
                        <li className="hover:text-emerald-400"><a href="#about">About</a></li>
                        <li className="hover:text-emerald-400"><a href="#events">Events</a></li>
                        
                        <li className="hover:text-emerald-400"><a href="#contact">Contact</a></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

