# My React Datatable Plugin

A simple Clone of Datable JQuery Plugin for React applications.

[![forthebadge](https://forthebadge.com/images/badges/made-with-react.svg)](https://forthebadge.com) 

[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)

## 🛒 1.Installation

```bash
npm install milooz-datatable
  OR
pnpm install milooz-datatable
```


## 🎯 2.Settings

#### Global Settings

```json
{
  "name": "milooz-datatable",
  "private": false,
  "version": "0.1.2",
  "description": "Un plugin d'affichage de tableau de données pour React",
  "keywords": [
    "react",
    "typescript",
    "component",
    "ui",
    "datatable",
    "newbie"
  ],
  "license": "MIT",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "files": [
    "dist",
    "src/datas/mock.json"
  ],
  "types": "./dist/index.d.ts",
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0",
    "tailwindcss": "^4.0.0"
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
    "@tailwindcss/vite": "^4.0.0",
    "vite": "^6.2.0"
  }
}
```

## 📚 3.Usage

### Create Data file in `myProject\src\`
```bash
touch mock.json
```

#### Exemple `mock.json`
```json
[
  {
    "firstName": "Aurélie",
    "lastName": "Dupont",
    "dateBirth": "1995-02-12",
    "city": "Lyon",
    "department": "Marketing",
    "id": ":r1:",
    "startDate": "2023-05-15",
    "street": "Rue des Écoles",
    "zipCode": "69000"
  },
  {
    "firstName": "Benoît",
    "lastName": "Voyou",
    "dateBirth": "1988-08-23",
    "city": "Bordeaux",
    "department": "Engineering",
    "id": ":r2:",
    "startDate": "20221-11-01",
    "street": "Boulevard de la République",
    "zipCode": "33000"
  },
  {
    "firstName": "Camille",
    "lastName": "Lefebvre",
    "dateBirth": "1998-04-20",
    "city": "Bordeaux",
    "department": "IT",
    "id": ":r3:",
    "startDate": "2021-07-01",
    "street": "Rue de la Gironde",
    "zipCode": "33000"
  }
]
```

### Import Tailwind Directives in main file css

```css
 /* App.css */
@import "tailwindcss";

/* Styles default */
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

Vous pouvez appliquer des classes Tailwind CSS aux élèments de ce plugin pour personnaliser leur style.

### Import Datatable Component & Data File
```jsx
//App.jsx
import { Datatable } from 'milooz-datatable';
import mock from './mock.json';

function App() {
  return (
    <h1 className="text-3xl text-black font-bold text-center flex justify-center">
        Simple Clone of DataTables
    </h1>
    <DataTable initialDatas={mock} />
  );
}
```

## 💡 4.Props

| Prop | Type | Default | Description | Required |
|------|------|---------|-------------|--------|
| mock | array | initialDatas | Datasets to display | yes



## 📒 5.More informations
* Consultez la [documentation de Tailwind CSS](https://tailwindcss.com/docs/installation) pour plus d'informations.

## 📖 License
MIT
