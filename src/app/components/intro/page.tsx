"use client";
export default function Intro() {
  return (
      <section
        id="hero"
        className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full p-6"
      >
        <div className="w-full max-w-sm mb-6 md:mb-0 md:mr-8">
          <img
            src="https://avatars.githubusercontent.com/u/76927919?v=4"
            alt="Foto de perfil"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">
            yo, simplemente yo, nacho.
          </h1>
          <p className="text-base mb-4 font-mono">
            Hola, soy Nacho y actualmente estudio en una escuela técnica con
            orientación en electrónica. Sin embargo, mi verdadera pasión es la
            programación, la cual aprendi de manera autodidacta.
          </p>
          <p className="text-base mb-4 font-mono">
            Me extiendo en el desarrollo backend: me gusta crear aplicaciones,
            resolver problemas y explorar nuevas cosas. Mi lenguaje de
            preferencia es TypeScript, aunque siempre estoy aprendiendo{" "}
            <a className="underline" href="#skills">
              tecnologias
            </a>{" "}
            nuevas (actualmente Rust).
          </p>
          <p className="text-base mb-4 font-mono">
            Este portafolio es mi espacio para compartir{" "}
            <a className="underline" href="#projects">
              proyectos
            </a>{" "}
            y{" "}
            <a className="underline" href="#articles">
              articulos
            </a>
            , con el objetivo de generar conexiones y seguir creciendo en el
            mundo de la programación.
          </p>
        </div>
        <div className="scroll">
          <a href="#projects">
            <span className="scroll-btn">
              <span className="scroll-dot"></span>
            </span>
          </a>
        </div>
      </section>
  );
}
