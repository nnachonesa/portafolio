"use client";
export default function Articles() {
  return (
    <section
      id="articles"
      className="py-12 px-4 transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold text-center mb-12 drop-shadow">
        Artículos
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        <a
          href="articles/quicksort.html"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-amber-600 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 4H2v16h20V6H12l-2-2z" />
          </svg>
          <div>
            <h3 className="font-semibold">Quicksort</h3>
            <p className="text-sm">
              Quicksort es un algoritmo de ordenamiento por comparación
              recursivo que divide una lista de entrada en dos sublistas según
              un pivote seleccionado
            </p>
          </div>
        </a>
        <a
          href="articles/fibonacci.html"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-amber-600 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 4H2v16h20V6H12l-2-2z" />
          </svg>
          <div>
            <h3 className="font-semibold">Fibonacci</h3>
            <p className="text-sm">
              La Serie Fibonacci se define como una secuencia de números en la
              que cada número después de los dos primeros es la suma de los dos
              números anteriores.
            </p>
          </div>
        </a>
        <a
          href="articles/luhn.html"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-amber-600 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 4H2v16h20V6H12l-2-2z" />
          </svg>
          <div>
            <h3 className="font-semibold">Algoritmo de Luhn</h3>
            <p className="text-sm">
              El algoritmo de Luhn, también conocido como la fórmula de Luhn, es
              un método de suma de verificación utilizado ampliamente para
              validar una variedad de números de identificación.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
