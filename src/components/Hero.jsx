import { motion } from "framer-motion";
import { styles } from "../styles";
import * as THREE from 'three'
const Hero = () => {
  return (
    <section className="relative w-full h-screen max-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#6ebbce]">Khuephamy Phialouang</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my portfolio! <br className="sm:block hidden" /> I am a skilled UI and
            backend developer with a passion for <br className="sm:block hidden" /> crafting
            seamless and efficient web applications. <br className="sm:block hidden" /> With a
            strong front-end and back-end evelopment foundation, <br className="sm:block hidden" />I
            bring a holistic approach to building robust and <br className="sm:block hidden" />
            user-friendly digital experiences.
          </p>
          <div className="flex gap-3 mt-4">
            <button className="bg-[#246781] border-2 pt-1 pr-2 pb-1 pl-2 rounded-full hero-button">
              <a href="#contact">Contact</a>
            </button>
            <button className="bg-black-200 border-2 pt-1 pr-2 pb-1 pl-2 rounded-full hero-button">
              <a href="https://github.com/Khue-Thor" target=" ">
                GitHub
              </a>
            </button>
            <button className="bg-blue-600 border-2 pt-1 pr-2 pb-1 pl-2 rounded-full hero-button">
              <a href="https://www.linkedin.com/in/khuephamy-phialouang-9b160723b/" target=" ">
                LinkedIn
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

