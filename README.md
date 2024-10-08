# vite-test-config

Este paquete proporciona una configuración centralizada de Vite para pruebas unitarias.

## Instalación

```bash
npm install --save-dev vite-test-config
```

## Uso

Después de instalar el paquete, puedes usar el comando `vite-test-config` para ejecutar tus pruebas:

```bash
npx vite-test-config
```

Este comando creará automáticamente un archivo `vite.config.js` en tu proyecto si no existe, y ejecutará las pruebas usando Vitest.

Puedes pasar cualquier argumento que Vitest acepte:

```bash
npx vite-test-config --watch
npx vite-test-config --coverage
```

Para personalizar la configuración, puedes modificar el archivo `vite.config.js` generado.

## Configuración

El paquete proporciona una configuración básica que incluye:

- Soporte para pruebas globales
- Entorno jsdom para simular el navegador
- Cobertura de código con reportes en texto, JSON y HTML

Puedes extender o sobrescribir esta configuración en tu `vite.config.js` local.

## Scripts

Agrega el siguiente script a tu `package.json`:

```json
"scripts": {
  "test": "vite-test-config"
}
```

Ahora puedes ejecutar tus pruebas con:

```bash
npm test
```

Y pasar argumentos adicionales si es necesario:

```bash
npm test -- --watch
```

## Requisitos

Este paquete requiere TypeScript como dependencia de pares. Asegúrate de tener TypeScript instalado en tu proyecto.