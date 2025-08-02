
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="bg-slate-950 text-white px-6 sm:px-8 md:px-12 py-12 scroll-mt-16" id="contact">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-teal-400 text-center mb-4">
                    Contact Us
                </h2>
                <p className="text-slate-300 text-center text-lg max-w-2xl mx-auto mb-12">
                    Have questions, suggestions, or want to collaborate? We'd love to hear from you!
                    Reach out through the form below or connect with us on social media.
                </p>

                <div className="flex flex-col md:flex-row gap-8 h-full justify-between">
                        
                    {/* Social & Email */}
                    <div className="mt-16 grid grid-cols-1 gap-10 flex-grow">
                        <div className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700 hover:border-teal-400 transition duration-200">
                            <h3 className="text-2xl font-semibold text-teal-400 mb-3">📧 Email Us</h3>
                            <p className="text-slate-300 leading-relaxed">
                                For queries and suggestions, write to us at:
                                <br />
                                <span className="text-white font-medium">csi.dmce@gmail.com</span>
                            </p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700 hover:border-teal-400 transition duration-200">
                            <h3 className="text-2xl font-semibold text-teal-400 mb-4">📱 Follow Us</h3>
                            <div className="flex items-center space-x-6 text-2xl">
                                <a href="https://www.linkedin.com/company/csi-dmce" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300 transition">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/CSI-DMCE-2024" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300 transition">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/csi_dmce" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300 transition">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <form className="bg-slate-800 p-8 rounded-2xl shadow-xl space-y-6 flex-grow" onSubmit={(e)=>e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            />
                        </div>
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full p-4 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        ></textarea>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-teal-400 hover:bg-teal-500 text-slate-950 font-semibold px-8 py-3 rounded-md transition duration-200"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </section>
    );
};

export default Contact;
