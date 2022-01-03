# amplify-test

my amplify test.

---

# 構成

| 名前 | バージョン |
| :--- | :---: |
| npm | 8.1.0 |
| node | 16.13.0 |
| react | 17.0.2 |
| TypeScript | 4.4.4 |

---

## Update Yarn

```Shell-session
$ yarn -v
1.22.4

$ npm uninstall yarn -g
$ npm install yarn -g

$ yarn --version
1.22.10
```

## TypeScriptのインストール

### グローバルにインストールする

```Shell-session
$ npm install -g typescript
$ tsc -v
Version 4.1.3
```

### プロジェクトにインストールする

＊Vue-cliのプロジェクト作成時にもインストール出来る。

```Shell-session
$ yarn add typescript
```

---


## Make Projet

### gitリポジトリそのものをフロントエンドのリポジトリにしたい場合
一度rootに新規プロジェクトディレクトリを作成し、
node_modules以外をrootディレクトリに移すことでプロジェクトを作ることが出来る。

```Shell-session
$ yarn create vite
$ mv sample/* ./ // エディターを使ってコピペして来た方が良い
$ rm -rf sample
$ yarn install
```


## プロジェクト作成時のコンソール内容

`React`+`TypeScript`の構成が前提

```Shell-session
$ yarn create vite
yarn create v1.22.10

success Installed "create-vite@2.6.6" with binaries:
      - create-vite
      - cva
✔ Project name: … vite-test
✔ Select a framework: › react
✔ Select a variant: › react-ts

Scaffolding project in /Users/userName/path/vite-test...

Done. Now run:

  cd vite-test
  yarn
  yarn dev

✨  Done in 22.98s.

```

## Project setup
```Shell-session
yarn install
```

### Compiles and hot-reloads for development(default port is 3000)
```Shell-session
yarn dev
```

### Compiles and hot-reloads for development(vite preview)
```Shell-session
yarn serve
```

### Compiles and minifies for production
```Shell-session
yarn build
```

### Run your unit tests
```Shell-session
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```Shell-session
yarn lint
```

---

# 環境構築

yarn crete viteでプロジェクト作成時は必要最低限のパッケージがインストールされている為随時インストールする。

## envファイルの設定

「.env.example」をリネームして環境ごとの環境変数を設定する

```
.env.local
.env.development
.env.prod

# .env.local
NODE_ENV='local'
VUE_APP_API_BASE_URL='http://localhost:8080/api/v1/xxx'

# .env.development
# NODE_ENV='development'
# VUE_APP_API_BASE_URL='https://development/api/v1/xxx'

# .env.prod
# NODE_ENV='production'
# VUE_APP_API_BASE_URL='https://production/api/v1/xxx'
```

## .editorconfigの設定

```config
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

## アセットディレクトリの作成

/src/assets/下に
「css」、「img」ディレクトリ作成

## パッケージの追加

下記のライブラリを追加

### sass

```Shell-session
$ yarn add --dev sass
```

下記のcssファイルの拡張子を`scss`に変更する

```Shell-session
- /src/App.css
- /src/index.css
```

元々のcssファイルをインポートしていた箇所も修正する

```Shell-session
- /src/App.tsx
- /src/main.tsx
```

### axios

```Shell-session
$ yarn add axios
$ yarn add --dev stylelint
```

### stylelint

```Shell-session
$ yarn add --dev stylelint
```

`package.json`の`scripts`に設定を追記

```json
  "scripts": {
    ...
    "lint:css": "stylelint src/**/*.scss"
  },
```

### eslint

```Shell-session
$ yarn add --dev eslint
$ yarn add --dev @typescript-eslint/eslint-plugin
$ yarn add --dev @typescript-eslint/parser
// 一括
$ yarn add --dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

`package.json`の`scripts`に設定を追記

```json
  "scripts": {
    ...
    "lint": "eslint --ext .ts,.js,.tsx,.jsx --ignore-path .gitignore . --fix"
  },
```

### prettier

```Shell-session
$ yarn add --dev prettier
// eslint連携用のパッケージ
$ yarn add --dev eslint-config-prettier eslint-plugin-prettier
```

---

## パッケージのscriptsの設定

package.jsonの編集

```Json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "serve": "vite preview",
    "lint": "eslint --ext .ts,.js,.tsx,.jsx --ignore-path .gitignore . --fix",
    "lint:css": "stylelint src/**/*.scss"
  },
```

---

## パッケージの設定ファイルの設定

### /.eslintrc.jsの作成と編集

`prettier`と`typescript-eslint`の設定を追加する

```TypeScript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    'no-unused-components': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/e2e/**/*.spec.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}

```

### .prettierrcの作成と編集

```Json
{
  "semi": false,
  "arrowParens": "always",
  "singleQuote": true
}
```

### .stylelintrcの作成と編集

```Json
{
  "rules": {
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "custom-property-no-outside-root": true,
    "indentation": 2,
    "length-zero-no-unit": true,
    "media-feature-name-no-vendor-prefix": true,
    "number-leading-zero": "never",
    "selector-root-no-composition": true,
    "string-quotes": "single"
  }
}
```

---

## jestのインストール

確認中。
まだ出来る様になっていない。

```Shell-session
$ yarn add --dev jest ts-jest @types/jest
```

`package.json`の設定

```Json
  "scripts": {
    ...
    "test:unit": "jest --config jest.config.js",
    "test:e2e": "cypress open --browser chrome"
  },
```

`jest.config.js`の設定

```JavaScript
module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  testMatch: ['<rootDir>/tests/unit/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json'],
  testURL: 'http://localhost/',
  collectCoverage: false, // no check coverage
}

```

`@testing-library/react`のインストール

```Shell-session
$ yarn add --dev @testing-library/react
```


---

## tsconfig.jsonの設定

デフォルトのtsconfig.jsonの設定は下記

```Json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "include": ["./src"],
  "exclude": [
    "node_modules"
  ]
}
```

production build の為に`skipLibCheck`は`true`を設定する。

```Json
{
  "compilerOptions": {
    "skipLibCheck": true,
  }
}
```

---

## vite.config.tsの設定

必要最低限の設定は下記の通り

⇨`vite`の`2.7.2`から`plugin-react`が自動的に設定される様になっていた為、下記のインストールは不要。

```Shell-session
$ yarn add --dev @vitejs/plugin-react-refresh
```

```TypeScript
import { defineConfig } from 'vite'
// import reactRefresh from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './src',
  build: {
    target: 'esnext',
    outDir: '../dist',
    emptyOutDir: true,
  },
  base: '/',
  resolve: {
    alias: {
      '@/': path.join(__dirname, './src/'),
    },
  },
  server: {
    open: true,
    port: 8080, //default 3000
    // Configure custom proxy rules for the dev server.
    proxy: {
      // '/api': 'http://localhost:8000/api',
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

```

---

## routerの設定

```Shell-session
yarn add react-router-dom
yarn add --dev @types/react-router-dom
```

### pageコンポーネント

```TypeScript
export const Home: React.VFC = () => {
  return (
    <div>
      <div className="board-row">
        <p>Hello Home!</p>
      </div>
    </div>
  )
}

export default Home
```

### Router.tsx

`react-router-dom`の`v6`からパッケージの使い方が変更になったので下記の通りに利用する。

```TypeScript
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import { Home } from '@/pages/Home'

export const AppRouter = (): JSX.Element => {
  // process.envがdevelopかの判定
  // 開発時用専用のページを用意したい時に設定する
  const isDevelop = import.meta.env.DEV || false

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

```

---

## Cypressの設定

### Cypressのインストール


```Shell-session
yarn add --dev cypress @types/jest
```

### tsconfig.jsonにtypesの設定を追加

`tsconfig.json`の`compilerOptions`に`types`の設定を追加する。

```Json
{
  "compilerOptions": {
    ...
    "jsx": "react",
    "types": [
      "@types/jest",
      "cypress"
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  }
}
```

### package.jsonの設定

`package.json`の`scripts`の設定を追加

```Json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "serve": "vite preview",
    "lint": "eslint --ext .ts,.js,.tsx,.jsx --ignore-path .gitignore . --fix",
    "lint:css": "stylelint src/**/*.scss",
    "test:e2e": "cypress open --browser chrome"
  },
```
### cypress.jsonの設定

`package.json`の`scripts`の設定を追加

```Json
{
  "baseUrl": "http://localhost:8080",
  "pluginsFile": "tests/e2e/plugins/index.js"
}
```

### e2eディレクトリの設定

vue-cliの設定を踏襲して、`tests/e2e`ディレクトリで実行させる。

`cypress`ディレクトリ = `e2e`ディレクトリ

`tests/e2e/plugins/index.js`の設定を修正(ファイルの出力先の設定)

```JavaScript
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  return Object.assign({}, config, {
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/integrations',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js'
  })
}
```

---

## husky,lint-stagedの設定

huskyが設定されていなければ追加する

v5系から設定方法が変わっている。

```Shell-session
$ yarn add --dev husky lint-staged
```

package.jsonの`srcripts`に`prepare`が追記されている為下記の通り修正する。(モノレポ用の設定)

`frontend/.huskyディレクトリ`を作成する為に`yarn prepare`と`yarn create-precommit`をそれぞれ実行する。

```Shell-session
$ yarn prepare
$ yarn create-precommit
```

```json
  "scripts": {
    ...
    "prepare": "cd .. && husky install frontend/.husky",
    "create-precommit": "cd .. && husky add frontend/.husky/pre-commit \"cd frontend && yarn lint-staged\"",
    "lint-staged": "lint-staged"
  },
```

また、自分のホームディレクトリに`~/.huskyrc`を作成してnvmの設定しないと`yarn`コマンドが使えなくなる為設定する。

```Shell-session
$ touch ~/.huskyrc
$ vim ~/.huskyrc
```

```Shell-session
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# 現在利用しているnodeバージョンをuseする
nvm use stable
```


## Componentsディレクトリの設定

```Shell-session
parts
modules
views
```

---


```Shell-session

```



---

#
