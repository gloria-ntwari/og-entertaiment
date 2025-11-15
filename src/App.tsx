import React, { useState } from "react";
import { motion } from "framer-motion";
import { SECTIONS_DATA, MAIN_PAGE_IMAGES, SOCIAL_LINKS } from "./constants";
import { SectionData, MediaType } from "./types";
import { Modal } from "./components/Modal";

const Logo = () => (
  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-md overflow-hidden">
    <img
      src="/logo.jpg"
      alt="OG Entertainment Logo"
      className="w-full h-full object-cover"
    />
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionData | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <main className="flex flex-col lg:flex-row">
          <motion.section
            className="flex flex-col justify-start py-10 px-8 bg-white rounded-3xl shadow-lg/30 space-y-6 m-4 lg:m-0 lg:fixed lg:top-0 lg:left-0 lg:w-1/2 lg:h-screen lg:overflow-hidden lg:rounded-r-3xl lg:rounded-l-none lg:p-12 lg:shadow-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-6"
            >
              <Logo />
              <motion.h1
                className="text-4xl md:text-5xl font-extrabold"
                variants={itemVariants}
              >
                OG- ENTERTAINMENT
              </motion.h1>
            </motion.div>

            <motion.p className="text-m text-gray-600" variants={itemVariants}>
              Where joy, laughter, and togetherness come to life.
            </motion.p>

            <motion.div
              className="space-y-4 max-w-xl text-m leading-relaxed tracking-wide text-gray-800 pt-4"
              variants={itemVariants}
            >
              <p>
                We specialize in creating unforgettable experiences that bring
                joy, laughter, and connection through engaging team-building
                activities, exciting kids’ entertainment, and heartwarming
                surprises for all ages. Whether it’s a corporate challenge that
                builds stronger bonds or a magical celebration that lights up a
                child’s imagination, we craft events that inspire happiness and
                togetherness.
              </p>
              <p>
                With creativity, passion, and a touch of surprise in everything
                we do, <strong>OG-ENTERTAINMENT</strong> turns ordinary days
                into extraordinary memories — because every smile is worth
                celebrating.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 w-full pt-4"
              variants={containerVariants}
            >
              {SECTIONS_DATA.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section)}
                  className="w-[400px] bg-white text-gray-900 px-6 py-3 font-semibold text-left"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "#00000",
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {section.title}
                </motion.button>
              ))}
            </motion.div>

            <motion.div className="pt-4" variants={itemVariants}>
              <div className="flex items-center space-x-6">
                {SOCIAL_LINKS.map(({ name, url, Icon }) => (
                  <a
                    key={name}
                    href={url}
                    aria-label={name}
                    className="text-gray-500 hover:text-gray-900 transition-transform hover:scale-110"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            className="grid grid-cols-3 gap-4  lg:ml-[50%] lg:w-1/2 lg:p-8 lg:pb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {MAIN_PAGE_IMAGES.map((image) => (
              <motion.div
                key={image.id}
                className="overflow-hidden  aspect-square"
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {image.type === MediaType.Video ? (
                  <video
                    src={image.src}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.section>
        </main>
      </div>
      <Modal section={activeSection} onClose={() => setActiveSection(null)} />
    </>
  );
};

export default App;
