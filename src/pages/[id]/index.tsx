import { Page } from "@/modules/shared/layout/Page"
import { TaskPage } from "@/modules/tasks"
import type { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma';
import { GetServerSideProps } from "next";
import Head from 'next/head'
import { useRouter } from "next/router";

interface Props {
  project: Prisma.ProjectsSelect
}

const Tasks = ({ project }: Props) => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath)
  }

  console.log({project})

  return (
    <>
      <Head>
        <title>Tasks | Task Glitter</title>
        <meta name="description" content="Adding a little sparkle to your everyday to dos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <TaskPage projectName={project.name} projectId={project.id} tasks={project.Tasks} refreshData={refreshData} />
      </Page>
    </>
  )
}

export default Tasks

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.id) {
    return {
      props: {},
    }
  }

  const project = await prisma.projects.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      Tasks: true,
    }
  })

  return {
    props: { project },
  };
};