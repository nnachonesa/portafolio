"use client";
export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 bg-gray-200 dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      <h2 className="text-4xl font-bold text-center mb-12 drop-shadow">
        Tecnologias
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center p-4 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 transition-colors">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="typescript"
            className="w-12 h-12 mb-2"
          ></img>
          <span className="text-sm font-medium">TypeScript</span>
        </div>
      </div>
    </section>
  );
}
