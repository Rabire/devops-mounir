## Projet
Un super appli nextjs a l'occasion de la journée du cerf-volant. Elle comporte 2 pages rendues en SSR et une route d'API GET.

URL de production: https://devops-mounir.rabire.com

## Husky - pre-commit

Husky permet de linter, tester ou formater le code juste avant de commit.

ESLint check certaines pratiques de développement afin de prévenir des bugs.
Prettier formate le code dans le but de l'unifier.
Commit lint veille à ce que les messages de commit soient corrects et respectent une certaine convention.

Tout cela permet d'avoir du code propre sur github

## Config github repository
- Impossible de merge une PR sans review
- Les branches sont automatiquement supprimées quand une PR est mergée
// TODO: can not push on main

![Capture d’écran 2023-04-25 à 12 02 31](https://user-images.githubusercontent.com/49844846/234576937-c44f8654-a8ad-48da-97ae-34fce0110d72.png)
![Capture d’écran 2023-04-25 à 14 34 48](https://user-images.githubusercontent.com/49844846/234577206-f8d93adc-9f65-4b1b-851c-c5ea89b8a9cf.png)

## Github actions

### Lint

Nous avons ajouté un workflow dans les github actions permettant de vérifier que le code qui vient d'être push ne comporte pas d'erreurs.

https://binary-studio.com/blog/2021/12/21/lint-your-project-with-github-actions/
https://dev.to/samsonsham/how-to-setup-nextjs-project-with-typescript-eslint-and-prettier-1apk

### Deploy
L'application est dockerisée. Lorsqu'une PR est mergée sur main, la CI met a jour la prod.

On a essayé d'automatiser le déploiement depuis la CI via cet article. Au final, on a bloqué sur le push de l'image...
https://lewiskori.com/blog/deploying-next-js-apps-to-a-vps-using-github-actions-and-docker/

Au final, on a utilisé un moyen plus straight forward pour entrer dans le VPS et exécuter des commandes.

### Tests

Tout les reste écrits avec jest se lancent dans la CI après chaque commit pousses.

![Capture d’écran 2023-04-25 à 11 30 02](https://user-images.githubusercontent.com/49844846/234576787-7153885d-9bb0-4d6e-b60e-d9bfad7600d7.png)
![Capture d’écran 2023-04-25 à 11 30 02](https://user-images.githubusercontent.com/49844846/234576860-de4ef03d-b18b-46c7-a54c-a7b3f8343310.png)


## DNS et Nginx

L'application utilise Nginx pour mapper le port du container qui fait tourner l'application vers une URL.

![Capture d’écran 2023-04-26 à 14 46 20](https://user-images.githubusercontent.com/49844846/234579117-a7ea4c2b-26f9-4cca-8453-70914e4e679d.png)
![Capture d’écran 2023-04-26 à 14 47 32](https://user-images.githubusercontent.com/49844846/234579296-d87898ef-6a3e-4785-8c47-1a3d5f23fa90.png)

