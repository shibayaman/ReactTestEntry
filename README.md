# ReactTestEntry
Reactのテストに入門するためのレポ

テストに入門するために
- Node.js
- Express
- React
- styled-components

で簡単なTodoアプリを作って

- Jest
- react-testing-library
- supertest

でテストした形跡
```
- src
  - backend //バックエンドのコード(node.js)
    - バックエンドのコードたち...
    - __test__
      - バックエンドのテストたち...
  - components //Reactのコンポーネントたち
    - Reactのコードたち...
    - __test__
      - Reactのテストたち...
  
```

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

jsをディベロップメントビルド:
```
npm run build 
```

jsをディベロップメントビルド(差分検知で再ビルド):
```
npm run build:watch
```

jsをプロダクションビルド:
```
npm run build:prod 
```

テスト実行:
```
npm run test
```

