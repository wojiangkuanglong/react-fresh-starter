import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

type Props = {
  type: 'add' | 'edit';
  defaultValue?: string;

  onSubmit?: (value?: string) => void;
};

export function ProjectModal(props: Props) {
  const { type, defaultValue = '', onSubmit } = props;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);
  return (
    <Dialog
      open={open}
      onOpenChange={(visible) => {
        if (!visible) {
          setValue(defaultValue);
        }
        setOpen(visible);
      }}
    >
      <DialogTrigger asChild>
        <Button
          data-testid={type === 'add' ? 'add-project-btn' : 'edit-project-btn'}
          variant="outline"
        >
          {type === 'add' ? 'Add' : 'Edit'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{type === 'add' ? 'Add' : 'Edit'}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            name
            <Input
              id="name"
              defaultValue={value}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              setOpen(false);
              onSubmit?.(value);
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
