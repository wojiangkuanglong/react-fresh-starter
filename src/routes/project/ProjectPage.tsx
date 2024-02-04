import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoadingSpinner } from '@/components/ui/loading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { useDeleteProject, useGetProjects } from './api/useProjects';
import { ProjectModal } from './components/ProjectModal';

const ProjectPage = () => {
  const { isLoading, data } = useGetProjects();
  const [query, setQuery] = React.useState('');

  const { mutateAsync: delProject } = useDeleteProject();
  return (
    <div>
      <div className="flex align-middle">
        <Input
          placeholder="Filter project name..."
          className="mb-3 mr-3 w-[300px]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ProjectModal type="add" />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>name</TableHead>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>description</TableHead>
            <TableHead>tags</TableHead>
            <TableHead className="text-right">action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow className="flex">
              <TableCell colSpan={5}>
                <LoadingSpinner />
              </TableCell>
            </TableRow>
          ) : (
            data
              ?.filter((item) => item.name?.includes(query))
              ?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    {item.tags.map((item, index) => (
                      <Badge key={`${item}${index}`} className="mr-1">
                        {item}
                      </Badge>
                    ))}
                  </TableCell>
                  <TableCell className="text-right">
                    <ProjectModal type="edit" defaultValue={item.name} />
                    <Button size="sm" variant="destructive" onClick={() => delProject(item.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectPage;
