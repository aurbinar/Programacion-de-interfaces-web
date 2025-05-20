import { favoritos } from "../utils/favoritos.ts";

export default function ListaFavoritos() {
  const eliminar = (pelicula: string) => {
    favoritos.value = favoritos.value.filter((p) => p !== pelicula);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>
        ⭐ <span style={{ color: "darkblue" }}>Lista de favoritos</span>
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {favoritos.value.map((peli) => (
          <li key={peli} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "300px",
            margin: "4px auto",
          }}>
            <span>{peli}</span>
            <button
              onClick={() => eliminar(peli)}
              style={{
                fontSize: "1.2rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}  
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}