import type { Tasks } from '@prisma/client'
import Link from 'next/link'
import { Icon } from '../shared/icon'
import { Task } from './components/Task'
import { useForm } from "react-hook-form";

interface Props {
  projectName: string
  projectId: number
  tasks: Tasks[]
  refreshData: () => void
}

const TaskPage = ({ projectId, projectName, refreshData, tasks }: Props) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const body = { name: data.taskName, projectId: data.projectId };
      await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      refreshData();
      reset();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      {/* back arrow */}
      <Link href="/">
        <a className="text-electricIndigo absolute left-0 top-0 bg-triangle w-[100px] h-[100px] bg-no-repeat p-3">
          <Icon name="Arrow" />
        </a>
      </Link>

      <h1>{projectName}</h1>

      {/* add tasks */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5">
        <input type="text" {...register("taskName", { required: true })} />
        <input type="hidden" {...register('projectId')} value={projectId} />
        <div>
          <button type="submit" role="submit" className="text-white hover:text-persianBlue bg-persianBlue hover:bg-goldenTainoi rounded-full w-[57px] h-[57px] flex justify-center items-center"><Icon name="Plus" /></button>
        </div>
      </form>

      {/* task list */}
      {tasks && tasks.map((task) => (
        <Task key={task.id} task={task} refreshData={refreshData} />
      ))}
    </div>
  )
}

export { TaskPage }