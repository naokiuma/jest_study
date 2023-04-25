describe('math.randomeをモック化',()=>{
    let spy
    afterEach(()=>{
        spy.mockRestore()//モックを元の関数に戻す
        //jest.restoreAllMocks()//これを行えば、すべてのモック化された関数をオリジナルに戻せる
    })

    it('math.random 1を返す',()=>{
        spy = jest.spyOn(Math,'random').mockImplementation(()=> 1)//Math.random()は1を返す。第一引数にオブジェクト、だいににメソッド名。
        expect(Math.random()).toBe(1);


    })
})

