#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const configPath = path.resolve(process.cwd(), 'vite.config.js');

if (!fs.existsSync(configPath)) {
  const content = `import { defineConfig } from 'vite';
import viteTestConfig from 'vite-test-config';

export default defineConfig({
  ...viteTestConfig,
  // Aquí puedes agregar o sobrescribir configuraciones específicas de tu proyecto
});
`;

  fs.writeFileSync(configPath, content);
  console.log('Se ha creado el archivo vite.config.js con la configuración de pruebas.');
}

const args = process.argv.slice(2);
const command = 'vitest';

const child = spawn(command, args, { stdio: 'inherit' });

child.on('error', (error) => {
  console.error(`Error al ejecutar ${command}:`, error);
  process.exit(1);
});

child.on('close', (code) => {
  process.exit(code);
});