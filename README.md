# My React Datatable Plugin

A simple Clone of Datable JQuery Plugin for React applications.

## Creation

#### package.json

```json
{
  "name": "milooz-datatable-react-plugin", 
  "version": "0.1.0",
  "type": "module",
  "main": "dist/index.js",
  "module": "dist/index.js",
  "files": [
    "dist"
  ],
  "publishConfig": {
    "access": "public"
  },
  "scripts":{
  "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },

  "peerDependencies": {
    "react": ">=16.8.0",
  },
  "dependencies": {
  "tailwind": "^2.2.19"
}
}
```

## Installation

```bash
npm install milooz-datatable-react-plugin
OR
pnpm install milooz-datatable-react-plugin
```

## Usage

#### Create Datas Folder in `myProject\src\`
```bash
mkdir datas
```
#### Import Datatable Component & Datas File
```jsx
//App.jsx
import { Datatable } from 'milooz-datatable-react-plugin';
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


#### Sub Component in Plugin ?? => Pagination 
```jsx
//file.jsx

function SubComponent() {
  return (
    <Pagination 
      counterPages={counterPages} 
      pageIndex={pageIndex} 
      setPageIndex={setPageIndex} 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| counterPages | array | [] | Array of Pagination Element |
| PageIndex | number | 1 | Current Index of Page |
| setPageIndex | function |  ❌  | Setter of Page Index |


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
