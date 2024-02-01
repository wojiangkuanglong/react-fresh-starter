import { useGetProjects } from './api/useProjects';

const ProjectPage = () => {
  const { isLoading, data } = useGetProjects();
  console.log(666, isLoading, data);
  return <div>project</div>;
};

export default ProjectPage;
