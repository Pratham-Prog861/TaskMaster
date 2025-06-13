import { TaskCard } from "./task-card";

interface TaskListProps {
  title: string;
  tasks: {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    dueTime: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'To-do' | 'In-progress' | 'Completed';
    category?: string;
    categoryColor?: string;
  }[];
  onEditTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskList({ title, tasks, onEditTask, onDeleteTask }: TaskListProps) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}