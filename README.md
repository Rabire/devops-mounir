## Projet
Un super appli nextjs a l'occation de la jounee du cerf volant. Elle comporte 2 pages rendues en SSR et une route d'API GET.

URL de production: https://devops-mounir.rabire.com

## Husky - pre-commit

Husky permet de linter, tester ou formatter le code juste avant de commit.

ESLint check certaines pratiques de developpementafin de prevenir des bugs.
Prettier formatte le code afin de l'unifier.
Commit lint veille a ce que les messages de commit soient corrects et respectent une certaine convention.

Tout cela permet d'avoir du code propre sur github.

## Config github repository
- Impossible de merge une PR sans review
- Les branches sont automatiquement supprimees quand une PR est mergee
// TODO: can not push on main

![Capture d’écran 2023-04-25 à 12 02 31](https://user-images.githubusercontent.com/49844846/234576937-c44f8654-a8ad-48da-97ae-34fce0110d72.png)

![Capture d’écran 2023-04-25 à 14 34 48](https://user-images.githubusercontent.com/49844846/234577206-f8d93adc-9f65-4b1b-851c-c5ea89b8a9cf.png)

## Github actions

### Lint

Nous avons ajouter un workflow dans les github actions permettant de verrifier aue le code qui vient d'etre push ne comporte pas d'erreurs.

https://binary-studio.com/blog/2021/12/21/lint-your-project-with-github-actions/
https://dev.to/samsonsham/how-to-setup-nextjs-project-with-typescript-eslint-and-prettier-1apk

### Deploy
L'application est dockerisee. Lorsqu'une PR est mergee sur main, la CI met a jour la prod.

On a essayer d'automatiser le deploiement depuis la CI via cet article. Au final on a bloque sur le push de l'image...
https://lewiskori.com/blog/deploying-next-js-apps-to-a-vps-using-github-actions-and-docker/

Au fianl on a utiliser un moyer plus straight forward pour entrer dans le vsp et executer des commandes.

### Tests

Tout les rests ecrits avec jest se lancent dans la CI apres chaque commit pousses.

![Capture d’écran 2023-04-25![Capture d’écran 2023-04-25 à 11 30 02](https://user-images.githubusercontent.com/49844846/234576787-7153885d-9bb0-4d6e-b60e-d9bfad7600d7.png)
![Capture d’écran 2023-04-25 à 11 30 02](https://user-images.githubusercontent.com/49844846/234576860-de4ef03d-b18b-46c7-a54c-a7b3f8343310.png)



