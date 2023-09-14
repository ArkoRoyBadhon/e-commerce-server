

## Husky Install

```javascript
 yarn add husky --dev
```

#### Do git init before husky install so that husky hook can be integrated with git repository

```javascript
 yarn husky install
```

#### Create a hook
```javascript
 yarn husky add .husky/pre-commit "npm test"
```

### Then search lint-staged npm

```javascript
 yarn add -D lint-staged
```

#### Put this lint staged in package.json file before devDependency
```javascript
 "lint-staged": {
    "src/**/*.ts": "yarn lint-prettier"
  },
```

#### Put this code in .husky > pre-commit file
```javascript
 #!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint-staged
```



