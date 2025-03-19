type PhoneticsProps = {
    phonetics: Array<{ text?: string; audio?: string }>;
  };
  
const Phonetics = ({ phonetics }: PhoneticsProps) => {
    if (!phonetics || phonetics.length === 0) {
        return <p>No hay fonéticas disponibles.</p>;
      }
    
    return(
    <div>
        <h3 class="text-lg font-semibold">Fonética</h3>
        <ul class="list-disc pl-6">
        {phonetics.map((item, index) => (
            <li key={index} class="mb-2">
            {item.text && <p class="font-mono">/{item.text}/</p>}
            {item.audio && (
                <audio controls>
                <source src={item.audio} type="audio/mpeg" />
                Tu navegador no soporta el audio.
                </audio>
            )}
            </li>
        ))}
        </ul>
    </div>
    );
    }

export default Phonetics;