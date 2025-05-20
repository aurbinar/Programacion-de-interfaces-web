import { favoritos } from "../utils/favoritos.ts";

interface Props {
  pelicula: string;
}

export default function AgregarAFavoritos({ pelicula }: Props) {
  const agregar = () => {
    if (!favoritos.value.includes(pelicula)) {
      favoritos.value = [...favoritos.value, pelicula];
    }
  };

  return (
    <li style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "300px",
      margin: "4px auto",
    }}>
      <span>{pelicula}</span>
      <button
        onClick={agregar}
        style={{
          fontSize: "1.2rem",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ⭐
      </button>
    </li>
  );
}
