## Projet
Un super appli nextjs a l'occation de la jounee du cerf volant. Elle comporte 2 pages rendues en SSR et une route d'API GET.

URL de production: https://devops-mounir.rabire.com
## Husky - pre-commit

Husky permet de linter, tester ou formatter le code juste avant de commit.

ESLint check certaines pratiques de developpementafin de prevenir des bugs.
Prettier formatte le code afin de l'unifier.
Commit lint veille a ce aue les messages de commit soient corrects.

Tout cela permet d'avoir du code propre sur github.

## Config github repository
- Impossible de merge une PR sans review
- Les branches sont automatiquement supprimees quand une PR est mergee
// TODO: can not push on main

## Github actions

### Lint

Nous avons ajouter un workflow dans les github actions permettant de verrifier aue le code qui vient d'etre push ne comporte pas d'erreurs.

https://binary-studio.com/blog/2021/12/21/lint-your-project-with-github-actions/
https://dev.to/samsonsham/how-to-setup-nextjs-project-with-typescript-eslint-and-prettier-1apk

### Deploy
L'application est dockerisee.

On a essayer d'automatiser le deploiement depuis la CI via cet article. Au final on est reses bloques sur le push de l'image
https://lewiskori.com/blog/deploying-next-js-apps-to-a-vps-using-github-actions-and-docker/

Au fianl on a utiliser un moyer plus strqight forward pour entrer dans le container 

### Tests
Tout les rests ecrits avec jest se lancent dans la CI apres chaque commit pousse.
