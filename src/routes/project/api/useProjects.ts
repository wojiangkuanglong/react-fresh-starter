import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { produce } from 'immer';

import { queryClient } from '@/lib/reactQuery';
import { Projects } from '@/services/Projects';
import { ExtractedProjectType, ProjectUpdateType } from '@/services/data-contracts';

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

const useAddProject = () => {
  return useMutation({
    mutationFn: (params: ProjectUpdateType) => ProjectApi.addProjects(params, { baseURL: '' }),
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['ProjectApi.getProjects'],
      });
      const previousData = queryClient.getQueryData(['ProjectApi.getProjects']);
      queryClient.setQueryData(
        ['ProjectApi.getProjects'],
        (old: AxiosResponse<ExtractedProjectType[], any>) => {
          return produce(old, (draft) => {
            draft.data.push({
              ...variables,
              id: `${Math.random()}`.slice(0, 5),
            } as unknown as ExtractedProjectType);
          });
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
          return produce(old, (draft) => {
            draft.data = draft.data.filter((item) => item.id !== variables);
          });
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

const useUpdateProject = () => {
  return useMutation({
    mutationFn: (params: ProjectUpdateType & { id: string }) => {
      const { id, ...rest } = params;
      return ProjectApi.updateProject(id, rest, { baseURL: '' });
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['ProjectApi.getProjects'],
      });
      const previousData = queryClient.getQueryData(['ProjectApi.getProjects']);
      queryClient.setQueryData(
        ['ProjectApi.getProjects'],
        (old: AxiosResponse<ExtractedProjectType[], any>) => {
          return produce(old, (draft) => {
            const curProject = draft.data.find((item) => item.id === variables.id);
            if (curProject) {
              curProject.name = variables.name;
            }
          });
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

export { useGetProjects, useAddProject, useDeleteProject, useUpdateProject };
