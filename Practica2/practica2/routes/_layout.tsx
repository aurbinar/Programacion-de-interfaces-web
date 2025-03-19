import { ComponentChildren, ComponentType } from "preact";

export default function Layout({ Component }: { Component: ComponentType }) {
  return (
    <div class="min-h-screen flex flex-col items-center bg-gray-100 text-gray-900">
      {/* Navbar */}
      <header class="w-full bg-blue-600 text-white py-4 px-6 text-center">
        <h1 class="text-2xl font-bold">Diccionario Inglés</h1>
        <nav>
          <a href="/" class="mx-4 hover:underline">Inicio</a>
        </nav>
        <nav>
          <a href="/search" class="mx-4 hover:underline">Buscar</a>
        </nav>
      </header>

      {/* Contenido de la página */}
      <main class="flex-grow container mx-auto p-6">
        <Component />
      </main>
    </div>
  );
}