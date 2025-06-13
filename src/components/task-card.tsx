import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, CheckCircle2, Trash2 } from "lucide-react";
import { useTask } from "@/utilities/task-context";

interface TaskCardProps {
  task: {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    dueTime: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'To-do' | 'In-progress' | 'Completed';
    category?: string;
    categoryColor?: string;
  };
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const { updateTask } = useTask();

  const handleComplete = () => {
    updateTask({
      ...task,
      status: 'Completed'
    });
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{task.title}</CardTitle>
        <div className="flex items-center gap-2">
          {task.status !== 'Completed' && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleComplete}
              className="h-8 w-8 text-green-500 hover:text-green-600 hover:bg-green-50"
              title="Mark as Complete"
            >
              <CheckCircle2 className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
            title="Delete Task"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(task.id)}>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-red-500">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground mb-2">{task.description}</CardDescription>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Badge variant={task.status === 'Completed' ? 'default' : 'outline'}>
              {task.status}
            </Badge>
          </div>
          <div className="text-muted-foreground">Due: {task.dueDate} {task.dueTime}</div>
        </div>
      </CardContent>
    </Card>
  );
}