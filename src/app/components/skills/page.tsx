"use client";
import { langs } from "@/data/lang.json";

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 transition-colors duration-500">
      <h2 className="text-4xl font-bold text-center mb-12 drop-shadow">
        Tecnologias
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {langs.map((lang) => (
          // bendito sea next y sus cosas faciles, te amo next
          <div className="skill flex flex-col items-center p-4 rounded-xl shadow-md transition-colors" key={lang.name} /** por alguna razon se precisa tener una clave unica (?) cualquiera por parte de react pd: cuando se hace un map se hacen varios elementos iguales (div) y react no sabe que pasa */>
            <img
              src={lang.src}
              alt={lang.name}
              className="w-12 h-12 mb-2"
            ></img>
            <span className="text-sm font-medium">{lang.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
