import { motion } from "framer-motion";
import { styles } from "../styles";
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
          <div className="flex gap-3">
            <button className="bg-[#246781] border-2 p-2 rounded-full">
              <a href="#contact">Contact</a>
            </button>
            <button className="bg-black-200 border-2 p-2 rounded-full">
              <a href="https://github.com/Khue-Thor/portfolio" target=" ">
                GitHub
              </a>
            </button>
            <button className="bg-blue-600 border-2 p-2 rounded-full">
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

// Welcome to my portfolio! I am a skilled UI and backend developer with a passion for
// crafting seamless and efficient web applications. With a strong front-end and back-end
// development foundation, I bring a holistic approach to building robust and user-friendly
// digital experiences.
