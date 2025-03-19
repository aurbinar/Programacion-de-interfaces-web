import ApiSearch from "../components/ApiSearch.tsx";
import WordForm from "../components/WordForm.tsx";

export default async function SearchPage(req: Request) {
  const url = new URL(req.url);
  const word = url.searchParams.get("word") || "";

  let data;
  if (word) {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!res.ok) throw new Error();
      const result = await res.json();
      data = result[0]; // Tomamos el primer resultado
    } catch {
      data = { error: "No se encontraron resultados para esta palabra." };
    }
  }

  return (
    <>
      <h2>Buscador de Palabras (Diccionario)</h2>
      <WordForm word={word} data={data} />
      <h2>Buscador de Palabras (Api)</h2>
      <ApiSearch />
    </>
  );
}