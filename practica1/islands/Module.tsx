import { useState } from "preact/hooks";

interface ModuleProps {
  title: string;
  content: string;
}

export default function Module({ title, content }: ModuleProps) {
  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState(content);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: Event) => {
    setInputText((event.target as HTMLInputElement).value);
  };    
  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" && inputText.trim() !== "") {
      setText((prev) => prev + " " + inputText.trim());
      setInputText("");
    }
  };

  return (
    <div class={`module ${expanded ? "expanded" : ""}`}>
      <div class="module-header">
        <span>{title}</span>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Mostrar menos" : "Mostrar más"}
        </button>
      </div>

      {expanded && (
        <div class="module-content">
          <p>{text}</p>
          <input 
            type="text" 
            placeholder="" 
            value={inputText} 
            onInput={handleInputChange} 
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </div>
  );
}