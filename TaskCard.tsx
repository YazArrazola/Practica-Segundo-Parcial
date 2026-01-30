import { useEffect } from "react";
import { Tarea } from "../Practica";

interface Props {
  tarea: Tarea;
  onTick: (id: number) => void;
}

export default function TaskCard({ tarea, onTick }: Props) {
  useEffect(() => {
    if (tarea.estado === "ejecucion") {
      const timer = setInterval(() => onTick(tarea.id), 1000);
      return () => clearInterval(timer);
    }
  }, [tarea.estado]);

  return (
    <div
      className="task"
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData("id", tarea.id.toString())
      }
    >
      <strong>{tarea.titulo}</strong>
      <p>⏱ {tarea.tiempo}s</p>
    </div>
  );
}
