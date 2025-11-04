
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-300 py-8 ">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1  md:grid-cols-3 gap-10 border-t border-violet-400/20 pt-10">
                {/* About CSI */}
                <div className="md:justify-self-center">
                    <h3 className="text-violet-400 font-semibold text-lg mb-3">About CSI-DMCE</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                        CSI DMCE is a student chapter of the Computer Society of India. We aim to foster a culture of innovation and collaboration through workshops, hackathons, and tech events.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="md:justify-self-center">
                    <h3 className="text-violet-400 font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="text-neutral-300 space-y-2 text-sm">
                        <li><a href="#about" className="hover:text-violet-500 transition">About Us</a></li>
                        <li><a href="#events" className="hover:text-violet-500 transition">Events</a></li>
                        <li><a href="#contact" className="hover:text-violet-500 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="md:justify-self-center">
                    <h3 className="text-violet-400 font-semibold text-lg mb-3">Connect with Us</h3>
                    <div className="flex space-x-4 text-2xl">
                        <a
                            href="https://www.linkedin.com/company/csi-dmce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-violet-500"
                        >
                            <FaLinkedin/>
                        </a>
                        <a
                            href="https://github.com/CSI-DMCE-2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-violet-500"
                        >
                            <FaGithub/>
                        </a>
                        <a
                            href="https://www.instagram.com/csi_dmce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-violet-500"
                        >
                            <FaInstagram/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center text-neutral-300 text-sm mt-10 border-t border-violet-400/20 pt-6">
                © {new Date().getFullYear()} CSI DMCE. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
