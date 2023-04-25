## Husky - pre-commit

Husky permet de linter, tester ou formatter le code juste avant de commit.

ESLint check certaines pratiques de developpementafin de prevenir des bugs.
Prettier formatte le code afin de l'unifier.
Commit lint veille a ce aue les messages de commit soient corrects.

Tout cela permet d'avoir du code propre sur github.

## Config github repository

// TODO: can not push on main
// TODO: can not merge PR if not revewed ok
// TODO: can not merge PR if CI fails
// TODO: auto delete branch on merge

## Github actions

### Lint

Nous avons ajouter un workflow dans les github actions permettant de verrifier aue le code qui vient d'etre push ne comporte pas d'erreurs.

https://binary-studio.com/blog/2021/12/21/lint-your-project-with-github-actions/
https://dev.to/samsonsham/how-to-setup-nextjs-project-with-typescript-eslint-and-prettier-1apk

### Deploy

https://lewiskori.com/blog/deploying-next-js-apps-to-a-vps-using-github-actions-and-docker/
