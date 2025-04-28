import React from "react";

const achievements = [
  {
    title: "National Bench Press Competition",
    description: "Placed 5th in the National Bench Press Competition.",
  },
  {
    title: "State Powerlifting Championship",
    description: "Won a gold medal in the State Powerlifting Championship.",
  },
  {
    title: "State Discus Throw Competition",
    description: "Won a gold medal in the State Discus Throw Competition.",
  },
  {
    title: "State Cricket Championship",
    description: "Led our district cricket team in the State Cricket Championship.",
  },
  {
    title: "ICSE Board Inter-State Football Games",
    description: "Represented my school in the ICSE Board Inter-State Football Games.",
  },
];

const Extracurricular = () => (
  <section className="c-space mt-8 md:mt-12" id="extracurricular">
    <h2 className="text-heading mb-8">Extracurricular Achievements</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {achievements.map((item, idx) => (
        <div key={idx} className="p-6 rounded-2xl bg-gradient-to-b from-storm to-indigo shadow-md">
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-neutral-300 mb-2">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Extracurricular; 