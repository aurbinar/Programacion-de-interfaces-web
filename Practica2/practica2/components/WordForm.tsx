import Phonetics from "../components/Phonetics.tsx";
import Meaning from "../components/Meanings.tsx";

export default function SearchForm({ word, data }: { word: string; data: any }) {
  return (
    <div>
      <form method="GET">
        <input
          type="text"
          name="word"
          defaultValue={word}
          placeholder="Escribe una palabra..."
        />
        <button type="submit">Buscar</button>
      </form>

      {data?.error && <p style={{ color: "red" }}>{data.error}</p>}

      {data && !data.error && (
        <div>
          <h2>Resultados para: {word}</h2>
          <Phonetics phonetics={data.phonetics} />
          <Meaning meanings={data.meanings} />
        </div>
      )}
    </div>
  );
}

