import { motion } from "motion/react";

const CV = () => {
  return (
    <section className="c-space section-spacing" id="cv">
      <h2 className="text-heading">Curriculum Vitae</h2>
      <div className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center p-8 space-y-6 bg-gray-900 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-white">View My CV</h3>
          <p className="text-gray-300">Check out my skills and experience</p>
          <a
            href="/assets/cv/AYUSH_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white transition-all duration-300 bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            View CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CV; 