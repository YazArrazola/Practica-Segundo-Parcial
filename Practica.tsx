export type Estado = "pendiente" | "ejecucion" | "terminado";

export interface Tarea {
  id: number;
  titulo: string;
  tiempo: number; 
  estado: Estado;
}
export const tareasIniciales: Tarea[] = [
  { id: 1, titulo: "Tarea 1", tiempo: 30, estado: "pendiente" },
  { id: 2, titulo: "Tarea 2", tiempo: 45, estado: "ejecucion" },
  { id: 3, titulo: "Tarea 3", tiempo: 60, estado: "terminado" },
];
