# Next.js application

my Next.js application.

---

# 構成

| 名前 | バージョン |
| :--- | :---: |
| npm | 8.1.0 |
| node | 16.13.0 |
| yarn | 1.22.17 |
| react | 17.0.2 |
| TypeScript | 4.5.2 |

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


---

## プロジェクト作成

```Shell-session
$ yarn create next-app --typescript

yarn create v1.22.17
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...

success Installed "create-next-app@12.0.10" with binaries:
      - create-next-app
✔ What is your project named? … project-name
Creating a new Next.js app in /path/current/project-name.

Using yarn.

Installing dependencies:
- react
- react-dom
- next

yarn add v1.22.17
info No lockfile found.
✨  Done in 276.47s.

Installing devDependencies:
- eslint
- eslint-config-next
- typescript
- @types/react
- @types/node

yarn add v1.22.17
[1/4] 🔍  Resolving packages...
info There appears to be trouble with your network connection. Retrying...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 161 new dependencies.
info Direct dependencies

✨  Done in 75.27s.

Success! Created next at /path/current/project-name
Inside that directory, you can run several commands:

  yarn dev
    Starts the development server.

  yarn build
    Builds the app for production.

  yarn start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd next
  yarn dev

✨  Done in 419.68s.

```

---

# devサーバーの実行

```Shell-session
$ yarn dev
```

`http://localhost:3000`でトップページにアクセス出来る。

`http://localhost:3000/api/hello`でサンプルにAPIにアクセス出来る。


---

# srcディレクトリの作成

```Shell-session
$ mkdir
$ mv pages src/
$ mv styles src/
```

---

# eslintの設定の修正

既存の.eslintrc.jsonを削除し、react側で使用している.eslintrcを利用する。

```Shell-session
$ mv .eslintrc.json .eslintrc.json.old
$ touch .eslintrc.js
```

eslint関係のパッケージの追加

```Shell-session
$ yarn add --dev @typescript-eslint/eslint-plugin
$ yarn add --dev @typescript-eslint/parser
// 一括
$ yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

---

# prettierのインストール

```Shell-session
$ yarn add --dev prettier
// eslint連携用のパッケージ
$ yarn add --dev eslint-config-prettier eslint-plugin-prettier
```

### .prettierrcの作成と編集

```Json
{
  "semi": false,
  "arrowParens": "always",
  "singleQuote": true
}
```

---

# stylelint

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


## tsconfig.jsonの設定(エイリアス等)

デフォルトのtsconfig.jsonの設定は下記

```Json
{
  "compilerOptions": {
    "target": "esnext",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "types": [
      // "@types/jest",
      // "jest",
      "node"
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "src/**/*.ts",
    "src/**/*.tsx",
    "tests/unit/**/*.ts",
    "tests/unit/**/*.tsx"
  ],
  "exclude": ["node_modules"]
}
```

---

### axios

```Shell-session
$ yarn add axios
```

---

# @types/nodeのインストール

Next.jsの場合はプロジェクト作成時にデフォルトでインストールされる。

```Shell-session
$ yarn add --dev @types/node
```

---


