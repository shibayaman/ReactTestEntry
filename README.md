# ReactTestEntry
Reactのテストに入門するためのレポ

テストに入門するために
- Node.js
- Express
- TypeScript
- React
- styled-components

で簡単なTodoアプリを作って

- Jest
- react-testing-library
- supertest

でテストした形跡

## ディレクトリ構成
```
- src
  - backend //バックエンドのコード(node.js)
    - バックエンドのコードたち...
    - __tests__
      - バックエンドのテストたち...
  - components //Reactのコンポーネントたち
    - Reactのコードたち...
    - __tests__
      - Reactのテストたち...
  - shared //バックエンドとフロントエンドの共有ファイル
  - app.tsx //フロントエンドのエントリーポイント
  - server.ts //バックエンドのエントリーポイント
  
```

## npm scripts
初回起動時:
```
npm install
npm run build
npm serve

//http://localhost:3000/staticにアクセス
```
nodeのサーバーを立てる:
```
npm run serve 
```

nodeのサーバーを立てる(変更検知):
```
npm run serve:watch
```

フロントのコードをディベロップメントビルド:
```
npm run build 
```

フロントのコードをディベロップメントビルド(差分検知で再ビルド):
```
npm run build:watch
```

フロントのコードをプロダクションビルド:
```
npm run build:prod 
```

テスト実行:
```
npm run test
```

プロジェクト全体の型チェック:
```
npm run type
```

