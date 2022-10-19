import type { GetServerSideProps } from 'next'
import type { Prisma } from '@prisma/client'
import Head from 'next/head'
import prisma from '@/lib/prisma';
import { ProjectPage } from '@/modules/projects'
import { useRouter } from 'next/router';

interface Props {
  projects: Prisma.ProjectsSelect[]
}

const Home = ({ projects }: Props) => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath)
  }

  console.log({projects})

  return (
    <>
      <Head>
        <title>Projects | Task Glitter</title>
        <meta name="description" content="Adding a little sparkle to your everyday to dos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectPage projects={projects} refreshData={refreshData} />
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await prisma.projects.findMany();
  return {
    props: { projects },
  };
};