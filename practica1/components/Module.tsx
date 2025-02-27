export default function Module({ title }: { title: string }) {
    return (
      <div class="module">
        <span>{title}</span>
        <button>Mostrar más</button>
      </div>
    );
  }