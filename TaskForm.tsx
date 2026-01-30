import { useState } from "react";

interface Props {
  onAdd: (titulo: string) => void;
}

export default function TaskForm({ onAdd }: Props) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (texto.trim().length < 3) {
      setError("Mínimo 3 caracteres");
      return;
    }

    onAdd(texto);
    setTexto("");
    setError("");
  };

  return (
    <div className="form">
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={submit}>Agregar</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
