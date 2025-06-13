'use client';

import { TaskList } from "@/components/task-list";
import { TaskForm } from "@/components/task-form";
import { Button } from "@/components/ui/button";
import { useTask } from "@/utilities/task-context";
import { useState } from "react";

export default function TasksPage() {
  const { tasks, addTask, updateTask, deleteTask } = useTask();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleSaveTask = (task: any) => {
    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }
    setIsFormOpen(false);
    setEditingTask(null);
  };

  const handleEditTask = (id: string) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingTask(taskToEdit as any);
      setIsFormOpen(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Task Management</h1>
        <Button onClick={() => {
          setEditingTask(null);
          setIsFormOpen(true);
        }}>Add New Task</Button>
      </div>

      <TaskList
        title="All Tasks"
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