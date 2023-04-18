//jest.fn() モックオブジェクトを作成し、下の2つの関数と組み合わせて利用する
//jest.mock() オブジェクト全体や、オブジェクトの1部のメソッドをモック化する

describe('jestのモック初め',()=>{
    test('モックオブジェクト',() =>{
        const mockFunction = jest.fn();

        // calssプロバティ・・・呼び出しごとの引数が含まれる
        // resultsプロパティ・・・呼び出しごとの結果が含まれる。

        //モックファンクションの結果はundefined。
        expect(mockFunction('foo')).toBe(undefined)

        //特定のプロパティを持っているか？
        expect(mockFunction).toHaveProperty('mock')

        // mockはcallsプロパティを持っている
        expect(mockFunction.mock).toHaveProperty('calls')
    })



    //jest.fnは任意の　返り血を設定できる。
    test('jest.fnの関数の返り値を設定',()=>{
        //返り値を設定
        const mockFunctionHello = jest.fn(()=>{
             return 'hello'
        })
        // const mockFunctionHello = jest.fn(()=> 'hello')//上記と同じ
        // const mockFunction = jest.fn().mockImplementation(() => 'Hello') // 上記と同じ設定
        expect (mockFunctionHello()).toBe('hello')
    })


    // mockImplementationOnceで呼び出し毎に異なる返り値を設定
    test('一回ハローを返して、一回おっすを返す' ,()=>{
        const mockFunctionHelloDouble = jest.fn()
            .mockImplementationOnce(()=> 'ハロー')//登録1
            .mockImplementationOnce(()=> 'オッス')//登録2
        expect(mockFunctionHelloDouble()).toBe('ハロー')//1のテスト
        expect(mockFunctionHelloDouble()).toBe('オッス')//2のテスト
        expect(mockFunctionHelloDouble()).toBe(undefined)//全ての回数返した後はundefinedを返す
    })

})



