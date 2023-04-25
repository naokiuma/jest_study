◼️透過性を評価する関数<br>
toBe・・・プリミティブな値は等しいか、objectにおいては同じインスタンスか？<br>
・プリミティブを評価したい時<br>
・同じオブジェクトの参照を持つ変数であること尾を評価<br><br>

toEqual・・・プリミティブな値は等しいか、objectにおいては全プロパティのプリミティブ値が同じか<br>
・オブジェクトのプロパティの値の評価<br><br>

toStrictEqual・・・より厳しい。<br>
・厳密な比較。undefinedなプロパティなど<br>


yarn run testで実行。<br>
ts-node src/chapter2/assertion/promise.ts で、指定ファイルを実行<br>
npx jest src/chapter2/getting_started_jest/sum.test.ts<br>
で、特定ファイルだけテスト

下記のようにワーカーを指定して、メモリを制限することも可能。<br>
・1つのワーカーでテストする<br>
npx jest --runInBand src/chapter2/group/group.test.ts<br>
・2つのワーカーでテストする<br>
npx jest --maxWorkers=2 src/chapter2/group/group.test.ts<br>
・マシンの持つCPUの50%の数のワーカーでテストする<br>
npx jest --maxWorkers=50% src/chapter2/group/group.test.ts<br>

<br>
yarn run test --runInBand<br>
で、1つのワーカーで実行する<br>

<br>
jsdomについて
<br>
プロジェクト全体のtestEnvironment を jsdom に変更する場合: jest.config.ts
```
export default {
    "testEnvironment": "jsdom",
}
```
ファイル単位でやる場合
```
/**
* @jest-environment node
*/
```


