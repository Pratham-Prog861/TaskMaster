'use client';

import { TaskList } from "@/components/task-list";
import { TaskForm } from "@/components/task-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTask } from "@/utilities/task-context";

interface Task {
  id?: string;
  title: string;
  description: string;
  dueDate: string;
  dueTime: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'To-do' | 'In-progress' | 'Completed';
}

export default function DashboardPage() {
  const { tasks, addTask, updateTask, deleteTask } = useTask();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleSaveTask = (task: Task) => {
    if (task.id) {
      updateTask(task as Task & { id: string });
    } else {
      addTask(task);
    }
    setIsFormOpen(false);
    setEditingTask(null);
  };

  const handleEditTask = (id: string) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
      setIsFormOpen(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Task Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Button onClick={() => {
            setEditingTask(null);
            setIsFormOpen(true);
          }}>Add New Task</Button>
        </div>
      </div>

      <TaskList
        title="My Tasks"
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={deleteTask}
      />

      <TaskForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveTask}
        initialData={editingTask || undefined}
      />
    </div>
  );
}