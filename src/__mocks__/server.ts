import { setupServer } from 'msw/node';

import { handlers } from './msw';

export const server = setupServer(...handlers);
