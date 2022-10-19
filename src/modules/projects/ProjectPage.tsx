import { Page } from "@/modules/shared/layout/Page"
import type { Prisma } from '@prisma/client'
import { useForm } from "react-hook-form";
import { Icon } from "../shared/icon";
import { Project } from "./components/Project"

interface Props {
  projects: Prisma.ProjectsSelect[]
  refreshData: () => void
}


const ProjectPage = ({projects, refreshData}: Props) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const body = { name: data.projectName };
      await fetch('/api/projects', {
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
    <Page>
      <h1>Projects</h1>

      {/* add a project */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5">
        <input type="text" {...register("projectName", { required: true })} />
        <div>
          <button type="submit" role="submit" className="text-white hover:text-persianBlue bg-persianBlue hover:bg-goldenTainoi rounded-full w-[57px] h-[57px] flex justify-center items-center"><Icon name="Plus" /></button>
        </div>
      </form>

      {/* project list */}
      <ul>
        {projects && projects.map((project, index) => (
          <li className="w-full flex justify-between mb-5" key={index}>
            <Project project={project} refreshData={refreshData} />
          </li>
        ))}
      </ul>

    </Page>
  )
}

export { ProjectPage }