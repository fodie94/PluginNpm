# Migration d'une application jQuery vers React

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-303540?style=for-the-badge&logo=react&logoColor=61DAFB)

## Présentation

![SNAPSHOT](../modalep14/src/lib/assets/modal.png "Titre de l'image")

- repository : https://github.com/fodie94/PluginNpm.git

- package npm : https://www.npmjs.com/package/@fodieniakate/modalep14

## Installing the package

### 1/ Install package :

`npm i @fodieniakate/modalep14`

### 2/ Import the component from the library :

`import { Modale2 } from "@fodieniakate/modalep14";`

### 3/ Place this state hook (concerning the opening/closing of the modal) at the start of the function that uses the Modal component :

`const [isOpen, setIsOpen] = useState(false)`

### 4/ In the return of the function, call the Modal component with at least the `setIsOpen` and `text` props :

`{isOpen && <Modal setIsOpen={setIsOpen}  />}`

### 5/ Example :

```js
import React, { useState } from "react";
import { Modale2 } from "@fodieniakate/modalep14";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Modal Test</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}
```

## Prérequis

![npm](https://img.shields.io/badge/npm-9.1.3-%23000000?style=flat-square&logo=npm&logoColor=white)

![Node.js](https://img.shields.io/badge/Node.js-16.14.0-43853D?style=flat-square&logo=node.js&logoColor=white)

## Dépendances

![react](https://img.shields.io/badge/react-%5E18.2.0-blue)

![react-dom](https://img.shields.io/badge/react-dom-%5E18.2.0-blue)

![@babel/cli](https://img.shields.io/badge/@babel/cli-%5E7.23.9-blue)

![@babel/core](https://img.shields.io/badge/@babel/core-%5E7.23.9-blue)

![@babel/plugin-syntax-jsx](https://img.shields.io/badge/@babel/plugin-syntax-jsx-%5E7.23.3-blue)

![@babel/preset-react](https://img.shields.io/badge/@babel/preset-react-%5E7.23.3-blue)

![@fodieniakate/modalep14](https://img.shields.io/badge/@fodieniakate/modalep14-%5E0.0.9-blue)
