◼️透過性を評価する関数<br>
toBe・・・プリミティブな値は等しいか、objectにおいては同じインスタンスか？<br>
・プリミティブを評価したい時<br>
・同じオブジェクトの参照を持つ変数であること尾を評価<br><br>

toEqual・・・プリミティブな値は等しいか、objectにおいては全プロパティのプリミティブ値が同じか<br>
・オブジェクトのプロパティの値の評価<br><br>

toStrictEqual・・・より厳しい。<br>
・厳密な比較。undefinedなプロパティなど<br>


yarn run testで実行。
ts-node src/chapter2/assertion/promise.ts で、指定ファイルを実行