import { expect, test } from 'vitest';

import { render } from '@/utils/test';

import { Home } from './Home';

test('home test', async () => {
  const home = render(<Home />);

  const btn = await home.findByTestId('home-test');
  expect(btn.textContent).toEqual('test');
  home.unmount();
});
