import React from "react";

const platforms = [
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Ayush64/",
  },
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/ayu943189",
  },
  {
    name: "CodeChef",
    href: "https://www.codechef.com/users/bugoverloader",
  },
  {
    name: "GitHub",
    href: "https://github.com/AyushRaj62",
  },
];

const CodingPlatforms = () => (
  <section className="c-space mt-8 md:mt-12" id="coding-platforms">
    <h2 className="text-heading mb-8">Coding Platforms</h2>
    <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
      {platforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-4 px-2 rounded-2xl bg-gradient-to-b from-storm to-indigo shadow-md hover:-translate-y-1 transition-transform duration-200 min-w-[120px]"
        >
          <span className="text-base font-semibold text-white">{platform.name}</span>
        </a>
      ))}
    </div>
  </section>
);

export default CodingPlatforms; 