import type { Prisma } from '@prisma/client'
import Link from 'next/link'
import { Icon } from '../shared/icon'
import { Task } from './components/Task'
import { useForm } from "react-hook-form";

interface Props {
  projectName: string
  projectId: number
  tasks: Prisma.TasksSelect[]
  refreshData: () => void
}

const TaskPage = ({ projectId, projectName, refreshData, tasks }: Props) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
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
        <div>
          <button type="submit" role="submit" className="text-white hover:text-persianBlue bg-persianBlue hover:bg-goldenTainoi rounded-full w-[57px] h-[57px] flex justify-center items-center"><Icon name="Plus" /></button>
        </div>
      </form>

      {/* task list */}
      {tasks && tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  )
}

export { TaskPage }