import type { Prisma } from '@prisma/client'
import { Icon } from "@/modules/shared/icon"
import { useState } from "react";

interface Props {
  task: Prisma.TasksSelect
}

const Task = ({ task }: Props) => {
  const [taskState, setTaskState] = useState<'view' | 'edit' | 'completed'>('view');

  return (
    <div className="flex justify-between">
      <div className="flex flex-1">
        <input type="checkbox" className="task" name={`task-${task.id}`} id={`task-${task.id}`} />
        <label htmlFor={`task-${task.id}`} className="text-white task-name">
          Talk about being awesome
        </label>
        </div>
      <div className="flex gap-5">
        <button className="icon-button"><Icon name="Edit" /></button>
        <button className="icon-button"><Icon name="Trash" /></button>
      </div>
    </div>
  )
}

export { Task }