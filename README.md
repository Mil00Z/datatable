# My React Datatable Plugin

A simple Clone of Datable JQuery Plugin for React applications.

## Creation

#### package.json

```json
{
  "name": "milooz-datatable",
  "private": false,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.0.9",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.9"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.24.1",
    "vite": "^6.2.0"
  }
}

```

## Installation

```bash
npm install milooz-datatable
OR
pnpm install milooz-datatable
```

## Usage

#### Create Datas Folder in `myProject\src\`
```bash
mkdir datas
```
#### Import Datatable Component & Datas File
```jsx
//App.jsx
import { Datatable } from 'milooz-datatable';
import mock from '../datas/mock.json';

function App() {
  return (
    <h1 className="text-3xl text-black font-bold text-center flex justify-center">
        Simple Clone of DataTables
    </h1>
    <DataTable initialDatas={mock} />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| mock | array | initialDatas | Datasets to display |


#### UI Initials Settings
```css
@import "tailwindcss";

/* INIT */
:root{
  --main-color:rgb(202 138 4);
  --white-color:#FFF;
  --black-color:#000;
  --background:rgb(255 255 255);
  --body-font-size:1.5rem;
  --body-font-family:Arial, Helvetica, sans-serif;
  --bold-weight:700;
  --radius:5px;
  --container:75dvw;
}

#root {
  max-width: var(--container);
  margin: 0 auto;
  padding: 2rem;
}

body {
  font-family: var(--body-font-family);
  font-size:var(--body-font-size);
  color: var(--black-color);
  background: var(--background);
}

a {
  text-decoration: none;
}

/* DataTable */
thead th{
  cursor:pointer;
}


/* Pagination */
.pagination-link{
  --sizes:25px;
  --radius:50%;
  width:var(--sizes);
  height:var(--sizes);
  display: flex;
  justify-content: center;
  align-items: center;
  padding:5px;
  color:var(--main-color);
  font-size:.9rem;
  font-weight: var(--bold-weight);
  text-align: center;
  border-radius: var(--radius);
  transition:all .25s ease-in-out;
}

.active{
  background:var(--main-color);
  color:var(--white-color);
}
```

## License
MIT
