# StarsWars

## 📄 Descripció | ## 📄 Description

Exercici que té diversos objectius; d'una banda practicar la crida d'Apis, login y register, rutes protegides per finalment mostrar dades, ja siguin textos o imatges.
La web és dedicada al món d' "Star Wars", té una primera pagina "welcome" ón podeu registrar-vos o bé anar a fer login i login des de google. Podeu probar emails ja registrarts com:
|
This exercise has several objectives: on one hand, to practice calling APIs, login and registration, and protected routes, ultimately displaying data, whether it be text or images.
The website is dedicated to the world of "Star Wars." It has a first "welcome" page where you can register or go to log in, including login via Google. You can test already registered emails such as:

/*email:<lanalane@gmail.com> // password: 12121516
o
email:<pepe@gmail.com> // password: 190781*/

## 📋 Requisits | Requirements

- Tenir instal·lat: npm; | Have installed: npm;
- Tenir instal·lat: node; | Have installed: node;

- IMPORTANT: Utilitzar --force al npm install, firebase y fire donen problemes amb Angular v19 de compatibilitat, si ho forcem, funciona.
- IMPORTANT: Use --force with npm install, as Firebase and Fire have compatibility issues with Angular v19.

## 🛠️ Instal·lació

1- Clona el repositori | Clone the repository:

```bash
git clone https://github.com/SandraBienert/star_wars_angular.git;
```

2- Unlink del repositori para no modificar mi trabajo | Unlink the repository to avoid modifying my work:

```bash
git remote rm origin
```

3- Instal·lar las dependencias con npm | Install the dependencies using npm:

```bash
npm install --force
```

4- Inicial·litzar el servidor per veure la web | Start the server to view the web application:

```bash
ng serve -o
```

## 💻 Tecnologies y Recursos Utitlitzats | Technologies and Resources Used

- ANGULAR 19 Standalone: true;
- ANGULAR CLI
- ANGULAR MATERIAL
- TYPESCRIPT
- FIREBASE
- BOOTSTRAP - CSS - Bootstrap Icons
- RXJS
- Routes

## ✨ Característiques: | Features

- He treballat el disseny amb bootstrap, amb css i alguns components amb Angular material, per comoditat
- La crida a Api:  "<https://starwars-visualguide.com/assets/img/>" gairebé no funciona. I
- La Api:  "<https://swapi.dev/api/starships/>" te poques imatges.

- I worked on the design using Bootstrap, CSS, and some components with Angular Material for convenience.
- The API call to "<https://starwars-visualguide.com/assets/img/>" barely works.
- The API "<https://swapi.dev/api/starships/>" has very few images.
