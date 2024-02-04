import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { queryClient } from '@/lib/reactQuery';
import { Projects } from '@/services/Projects';
import { ExtractedProjectType } from '@/services/data-contracts';

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

const useDeleteProject = () => {
  return useMutation({
    mutationFn: (id: string) => ProjectApi.deleteProject(id, { baseURL: '' }),
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['ProjectApi.getProjects'],
      });
      const previousData = queryClient.getQueryData(['ProjectApi.getProjects']);
      queryClient.setQueryData(
        ['ProjectApi.getProjects'],
        (old: AxiosResponse<ExtractedProjectType[], any>) => {
          return { ...old, data: old.data.filter((item) => item.id !== variables) };
        },
      );

      return { previousData };
    },
    // onError: (err, _, context) => {
    //   console.error(err);
    //   queryClient.setQueryData(['ProjectApi.getProjects'], context?.previousData);
    // },
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['ProjectApi.getProjects'] });
    // },
  });
};

export { useGetProjects, useDeleteProject };
