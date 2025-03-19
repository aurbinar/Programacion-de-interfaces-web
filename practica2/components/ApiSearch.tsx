export default function ApiSearch() {
    return (
    <div>
      <form action = "api/search" method="GET">
        <input
          type="text"
          name="word"
          placeholder="Escribe una palabra..."
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
    );
  }