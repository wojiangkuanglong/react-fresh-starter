import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

import { ProjectModal } from './ProjectModal';

test('add project btn text', async () => {
  const projectModal = render(<ProjectModal type="add" />);

  const btn = await projectModal.findByTestId('add-project-btn');
  expect(btn.textContent).toEqual('Add');
  projectModal.unmount();
});
