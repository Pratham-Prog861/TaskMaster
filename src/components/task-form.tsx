import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Task {
  id?: string;
  title: string;
  description: string;
  dueDate: string;
  dueTime: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'To-do' | 'In-progress' | 'Completed';
  category?: string; 
  categoryColor?: string;
}

interface TaskFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  initialData?: Task;
}

export function TaskForm({ isOpen, onClose, onSave, initialData }: TaskFormProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [dueDate, setDueDate] = useState(initialData?.dueDate || '');
  const [dueTime, setDueTime] = useState(initialData?.dueTime || '');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>(initialData?.priority || 'Low');
  const [status, setStatus] = useState<'To-do' | 'In-progress' | 'Completed'>(initialData?.status || 'To-do');
  const [category, setCategory] = useState(initialData?.category || ''); // Added state for category
  const [categoryColor, setCategoryColor] = useState(initialData?.categoryColor || ''); // Added state for categoryColor

  const handlePriorityChange = (value: string) => {
    setPriority(value as 'Low' | 'Medium' | 'High');
  };

  const handleStatusChange = (value: string) => {
    setStatus(value as 'To-do' | 'In-progress' | 'Completed');
  };

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setDescription(initialData.description || '');
      setDueDate(initialData.dueDate || '');
      setDueTime(initialData.dueTime || '');
      setPriority(initialData.priority || 'Low');
      setStatus(initialData.status || 'To-do');
      setCategory(initialData.category || ''); // Set category from initialData
      setCategoryColor(initialData.categoryColor || ''); // Set categoryColor from initialData
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
      setDueTime('');
      setPriority('Low');
      setStatus('To-do');
      setCategory(''); // Clear category on new task
      setCategoryColor(''); // Clear categoryColor on new task
    }
  }, [initialData]);

  const handleSubmit = () => {
    if (!title.trim()) {
      alert('Please enter a task title');
      return;
    }
    
    const taskData = {
      title,
      description,
      dueDate,
      dueTime,
      priority,
      status,
      category, // Include category in taskData
      categoryColor, // Include categoryColor in taskData
    };
  
    if (initialData?.id) {
      onSave({ ...taskData, id: initialData.id });
    } else {
      onSave(taskData);
    }
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{initialData ? 'Edit Task' : 'Create Task'}</DialogTitle>
          <DialogDescription>
            {initialData ? 'Make changes to your task here.' : 'Fill in the details to create a new task.'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">Description</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dueDate" className="text-right">Due Date</Label>
            <Input id="dueDate" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dueTime" className="text-right">Due Time</Label>
            <Input id="dueTime" type="time" value={dueTime} onChange={(e) => setDueTime(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="priority" className="text-right">Priority</Label>
            <Select value={priority} onValueChange={handlePriorityChange}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">Status</Label>
            <Select value={status} onValueChange={handleStatusChange}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="To-do">To-do</SelectItem>
                <SelectItem value="In-progress">In-progress</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}