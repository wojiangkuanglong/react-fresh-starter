import { useQuery } from '@tanstack/react-query';

import { Projects } from '@/services/Projects';

const ProjectApi = new Projects();

const useGetProjects = (enabled?: boolean) => {
  const { isLoading, isSuccess, status, data, error } = useQuery({
    queryKey: ['ProjectApi.getProjects'],
    queryFn: () => ProjectApi.getProjects({ baseURL: '' }),
    enabled,
  });
  return {
    isLoading,
    isSuccess,
    status,
    data: data?.data,
    error,
  };
};

export { useGetProjects };
