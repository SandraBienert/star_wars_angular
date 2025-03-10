# StarsWars

## 📄 Descripció

Exercici que té diversos objectius; d'una banda practicar la crida d'Apis, login y register, rutes protegides per finalment mostrar dades, ja siguin textos o imatges.
La web és dedicada al món d' "Star Wars", té una primera pagina "welcome" ón podeu registrar-vos o bé anar a fer login i login des de google. Podeu probar emails ja registrarts com:

/*email:<lanalane@gmail.com> // password: 12121516
o
email:<pepe@gmail.com> // password: 190781*/

## 📋 Requisits

- Tenir instal·lat: npm;
- Tenir instal·lat: node;

- IMPORTANT: Utilitzar --force al npm install, firebase y fire donen problemes amb Angular v19 de compatibilitat, si ho forcem, funciona.

## 🛠️ Instal·lació

1- Clona el repositori

```bash
git clone https://github.com/SandraBienert/star_wars_angular.git
```

2- Unlink del repositori para no modificar mi trabajo

```bash
git remote rm origin
```

3- Entra a la carpeta:

```bash
cd star_wars
````

4- Instal·lar las dependencias con npm

```bash
npm install
```

Si tens alguna complicació en quant a conflictes amb firebase:

```bash
npm install --force
```

4- Inicial·litzar el servidor per veure la web

```bash
ng serve -o
```

## 💻 Tecnologies y Recursos Utitlitzats

- ANGULAR 19 Standalone: true;
- ANGULAR CLI
- ANGULAR MATERIAL
- TYPESCRIPT
- FIREBASE
- BOOTSTRAP - CSS - Bootstrap Icons
- RXJS
- Routes

## ✨ Característiques

- He treballat el disseny amb bootstrap, amb css i alguns components amb Angular material, per comoditat
- La crida a Api:  "<https://starwars-visualguide.com/assets/img/>" gairebé no funciona. I
- La Api:  "<https://swapi.dev/api/starships/>" te poques imatges.
