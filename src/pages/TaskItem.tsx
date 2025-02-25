import { Card } from "antd";
import React from "react";
import { useDrag } from "react-dnd";

export interface Task {
  id: number;
  title: string;
  description: string;
  estimation: number;
  category: string;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "CARD",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Card>
        <dt ref={dragRef as unknown as React.Ref<HTMLDivElement>} className="task" style={{opacity: isDragging ? 0.5 : 1}}>
            <span role="img" aria-label="task">📝</span> <strong>{task.title}</strong>
            <p>Description: {task.description}</p>
            <p>Estimation: {task.estimation} points</p>
        </dt>
    </Card>
  );
};

export default TaskItem;