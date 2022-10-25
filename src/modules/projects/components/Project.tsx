import { useEffect, useState } from 'react'
import { Icon } from '@/modules/shared/icon'
import type { Prisma } from '@prisma/client'
import Link from "next/link"
import { useForm } from "react-hook-form";
import { DeleteButton } from '@/modules/shared/DeleteButton';

interface Props {
  project: Prisma.ProjectsSelect
  refreshData: () => void
}

const Project = ({ project, refreshData }: Props) => {
  const [projectState, setProjectState] = useState<'view' | 'edit'>('view');

  const { register, handleSubmit, reset, formState: { errors }, setFocus } = useForm();

  useEffect(() => {
    setFocus('projectName');
  }, [setFocus, projectState]);

  const onSubmit = async (data) => {
    try {
      const body = { name: data.projectName };
      await fetch(`/api/projects/${project.id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
      });
      refreshData();
    setProjectState('view');
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProject = async (): Promise<void> => {
    await fetch(`/api/projects/${project.id}`, {
      method: 'DELETE',
    });
    refreshData();
  }

  const cancelEdit = () => {
    setProjectState('view')
    reset();
  }

  return (
    <>
      {projectState === 'view' && (
        <div className="flex justify-between items-center gap-x-5 w-full">
          <Link href={`/${project.id}`}><a className="text-6xl font-bold text-white hover:text-goldenTainoi border-b border-transparent">{project.name}</a></Link>
          <div className="flex gap-4">
            <button className="icon-button w-[42px] h-[42px]" onClick={ () => setProjectState('edit') }><Icon name="Edit" /></button>
            <DeleteButton deleteItem={deleteProject} />
          </div>
        </div>
      )}
      {projectState === 'edit' && (
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between items-center m-0 p-0 w-full relative -top-[18px] -mb-[30px]">
          <input type="text" defaultValue={project.name} {...register("projectName", { required: true })} className="p-0 m-0 list-input flex-1 text-6xl font-bold text-white border-b border-dashed bg-transparent focus:outline-none" />
          <div className="flex gap-4">
            <button className="icon-button" type="submit" role="submit"><Icon name="Check" height={42} width={42} /></button>
            <button className="icon-button" onClick={ cancelEdit }><Icon name="Cancel" height={42} width={42} /></button>
          </div>
        </form>
      )}
    </>
  )
}

export { Project }
