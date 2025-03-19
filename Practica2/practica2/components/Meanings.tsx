type Definition = {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
  };
  
  type MeaningProps = {
    meanings: Array<{ partOfSpeech: string; definitions: Definition[]; synonyms: string[]; antonyms: string[] }>;
  };
  
const Meaning = ({ meanings }: MeaningProps) => {
    if (!meanings || meanings.length === 0) {
        return <p>No hay significados disponibles.</p>;
    }
    return (
        <div>
        <h3 class="text-lg font-semibold">Significados</h3>
        {meanings.map((meaning, index) => (
          <div key={index} class="mb-4 p-4 border rounded bg-gray-50">
            <h4 class="font-bold italic">{meaning.partOfSpeech}</h4>
            <ul class="list-disc pl-6">
              {meaning.definitions.map((def, i) => (
                <li key={i}>
                  <p>definition: {def.definition}</p>    
                  {def.example && <p class="italic text-gray-600">Ejemplo: {def.example}</p>}
                <br></br></li>
              ))}
            </ul>
            {meaning.synonyms.length > 0 && (
              <p>
                <strong>Sinónimos:</strong> {meaning.synonyms.join(", ")}
              </p>
            )}
            {meaning.antonyms.length > 0 && (
              <p>
                <strong>Antónimos:</strong> {meaning.antonyms.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

export default Meaning;