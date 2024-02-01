import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, '../src/__mocks__/msw.ts');
const content = fs.readFileSync(filePath, 'utf-8');

const updatedContent = `// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
${content}`;

fs.writeFileSync(filePath, updatedContent, 'utf-8');

console.log('Comments added successfully.');
