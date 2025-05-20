import AgregarAFavoritos from "../islands/AgregarAFavoritos.tsx";
import ListaFavoritos from "../islands/ListaFavoritos.tsx";

export default function Home() {
const peliculas = [
  "El Padrino",

  "Inception",
  "Toy Story",
  "Titanic",
  "Forrest Gump",
  "El Señor de los Anillos",
  "Gladiador",
  "Pulp Fiction",
  "Jurassic Park",
  "Interstellar",
  "El Caballero Oscuro",
  "La La Land",
  "Coco",
  "Avengers: Endgame",
];
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 class="text-3xl font-bold mb-8">🎬 Lista de Películas</h1>

      <div class="flex flex-col md:flex-row gap-10 items-start">
        {/* Lista para agregar películas */}
        <div class="w-full max-w-xs space-y-3 bg-white p-4 rounded shadow">
          {peliculas.map((p) => (
            <AgregarAFavoritos key={p} pelicula={p} />
          ))}
        </div>

        {/* Lista de favoritos */}
        <div class="w-full max-w-xs">
          <ListaFavoritos />
        </div>
      </div>
    </div>

  );
}