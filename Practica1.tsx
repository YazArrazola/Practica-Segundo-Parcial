import { useEffect, useState } from "react";
import { Estado, Tarea } from "./Practica";
import TaskForm from "./TaskForm";
import Column from "./Column";
import "./styles.css";

const columnas: Estado[] = ["pendiente", "ejecucion", "terminado"];

export default function App() {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  /* Cargar localStorage */
  useEffect(() => {
    const data = localStorage.getItem("tareas");
    if (data) setTareas(JSON.parse(data));
  }, []);

  /* Guardar localStorage */
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (titulo: string) => {
    const nueva: Tarea = {
      id: Date.now(),
      titulo,
      tiempo: 0,
      estado: "pendiente",
    };
    setTareas([...tareas, nueva]);
  };

  const moverTarea = (id: number, estado: Estado) => {
    setTareas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, estado } : t
      )
    );
  };

  const incrementarTiempo = (id: number) => {
    setTareas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, tiempo: t.tiempo + 1 } : t
      )
    );
  };

  return (
    <div className="app">
      <h1>🧠 TaskFlow</h1>
      <TaskForm onAdd={agregarTarea} />

      <div className="kanban">
        {columnas.map((col) => (
          <Column
            key={col}
            estado={col}
            tareas={tareas.filter((t) => t.estado === col)}
            onDrop={moverTarea}
            onTick={incrementarTiempo}
          />
        ))}
      </div>
    </div>
  );
}
