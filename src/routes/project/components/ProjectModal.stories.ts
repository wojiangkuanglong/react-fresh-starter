import { type Meta, type StoryObj } from '@storybook/react';

import '@/styles/index.css';

import { ProjectModal } from './ProjectModal';

const meta = {
  title: 'Project/ProjectModal',
  component: ProjectModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectModal>;

type Story = StoryObj<typeof meta>;

export const AddProjectModal: Story = {
  args: {
    type: 'add',
  },
};

export const EditProjectModal: Story = {
  args: {
    type: 'edit',
  },
};

export default meta;
