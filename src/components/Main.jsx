import cv from "../assets/images/cv.jpeg";
import { TypeAnimation } from "react-type-animation";
import {  FaInstagram, FaLinkedinIn,FaGithub  } from "react-icons/fa";
const Main = () => {
    return (
        <div id="main">
            <img
                className="w-full h-screen object-cover object-left scale-x-[-1]"
                src={cv}
                alt=""
            />
            <div className="w-full h-screen absolute top-5 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">
                        I'am Samet Furkan Kopar
                    </h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        I'am a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Full Stack Developer",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Reactjs Developer",
                                1000,
                                "Software Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: "2em", paddingLeft: "5px" }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex  justify-between  pt-6 max-w-[200px] w-full">
                        <a
                            href="https://instagram.com/samettkopar"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="cursor-pointer" size={20} />
                        </a>
                        <a
                            href="https://instagram.com/samettkopar"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn className="cursor-pointer" size={20} />
                        </a>
                        <a
                            href="https://github.com/Samet-Furkan-Kopar"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="cursor-pointer" size={20} />
                        </a>

                        {/* <FaTwitter className="cursor-pointer" size={20} /> */}
                        {/* <FaFacebookF className="cursor-pointer" size={20} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
