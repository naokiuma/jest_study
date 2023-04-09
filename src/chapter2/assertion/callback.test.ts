//コールバック関数を受け取る
const fetchDataWithCallback = callback => {
    setTimeout(callback, 3000, 'lemon')
}

//コールバック関数の評価では、単純にexpectではエラーになる。
//これでは正常にテストしない。
// test('return lemon', () => {
//     const callback = data => {
//         expect(data).toBe('lemonnn')
//     }
//     fetchDataWithCallback(callback) 
// })

// test関数の引数で、done関数を受け取る必要がある。
test('return lemon', done => {
    const callback = data => {
        expect(data).toBe('lemon') 
        done()//テストの終了を宣言
    }
    fetchDataWithCallback(callback) 
})


