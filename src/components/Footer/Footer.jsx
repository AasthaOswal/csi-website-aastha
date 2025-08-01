
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-8 ">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1  md:grid-cols-3 gap-10 border-t border-slate-800 pt-10">
                {/* About CSI */}
                <div className="md:justify-self-center">
                    <h3 className="text-teal-400 font-semibold text-lg mb-3">About CSI-DMCE</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        CSI DMCE is a student chapter of the Computer Society of India. We aim to foster a culture of innovation and collaboration through workshops, hackathons, and tech events.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="md:justify-self-center">
                    <h3 className="text-teal-400 font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="text-slate-400 space-y-2 text-sm">
                        <li><a href="#about" className="hover:text-teal-300 transition">About Us</a></li>
                        <li><a href="#events" className="hover:text-teal-300 transition">Events</a></li>
                        <li><a href="#contact" className="hover:text-teal-300 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="md:justify-self-center">
                    <h3 className="text-teal-400 font-semibold text-lg mb-3">Connect with Us</h3>
                    <div className="flex space-x-4 text-2xl">
                        <a
                            href="https://www.linkedin.com/company/csi-dmce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-300"
                        >
                            <FaLinkedin/>
                        </a>
                        <a
                            href="https://github.com/CSI-DMCE-2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-300"
                        >
                            <FaGithub/>
                        </a>
                        <a
                            href="https://www.instagram.com/csi_dmce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-300"
                        >
                            <FaInstagram/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center text-slate-500 text-sm mt-10 border-t border-slate-800 pt-6">
                © {new Date().getFullYear()} CSI DMCE. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
