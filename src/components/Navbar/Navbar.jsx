import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";




const Navbar=()=>{
    
    const [mobileNav,setMobileNav]=useState(false);

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
                <div className="nav-links hidden sm:flex  justify-center items-center">
                    <ul className="flex items-center justify-center list-none gap-4 text-white ">
                        <li className="hover:text-emerald-400"><a href="#about">About</a></li>
                        <li className="hover:text-emerald-400"><a href="#events">Events</a></li>
                        
                        <li className="hover:text-emerald-400"><a href="#contact">Contact</a></li>
                        <li className="hover:text-emerald-400"><a href="#">Signup</a></li>
                        
                    </ul>
                </div>
                <div className="sm:hidden self-center flex justify-center items-center p-2 h-fit w-fit  hover:bg-slate-800 text-white hover:text-teal-400 hover:rounded-full transition-all duration-200 ease" onClick={()=>setMobileNav((prev)=>!prev)}> 
                    {mobileNav===true ? <RxCross2 className="text-2xl  "/> : <IoMenu className="text-2xl  "/>}
                </div>
            </div>
            {mobileNav===true && <motion.div className="w-full h-[calc(100dvh-56px)] flex flex-col justify-center gap-4 items-center sm:hidden fixed left-0 top-16 bg-slate-900" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                    
                <ul className="flex flex-col items-center justify-center list-none gap-4 text-white">
                    <li className="hover:text-emerald-400" onClick={()=>setMobileNav((prev)=>!prev)}><a href="#about">About</a></li>
                    <li className="hover:text-emerald-400" onClick={()=>setMobileNav((prev)=>!prev)}><a href="#events">Events</a></li>
                    
                    <li className="hover:text-emerald-400" onClick={()=>setMobileNav((prev)=>!prev)}><a href="#contact">Contact</a></li>
                    <li className="hover:text-emerald-400" onClick={()=>setMobileNav((prev)=>!prev)}><a href="#">Signup</a></li>
                        
                </ul>
            </motion.div>}
        </nav>
    );
}

export default Navbar;

