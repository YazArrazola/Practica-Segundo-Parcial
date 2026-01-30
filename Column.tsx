import { Estado, Tarea } from "./Practica";
import TaskCard from "./TaskCard";

interface Props {
  estado: Estado;
  tareas: Tarea[];
  onDrop: (id: number, estado: Estado) => void;
  onTick: (id: number) => void;
}

export default function Column({ estado, tareas, onDrop, onTick }: Props) {
  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const id = Number(e.dataTransfer.getData("id"));
        onDrop(id, estado);
      }}
    >
      <h2>{estado.toUpperCase()}</h2>

      {tareas.map((t) => (
        <TaskCard key={t.id} tarea={t} onTick={onTick} />
      ))}
    </div>
  );
}
