//promiseの復習ファイル

const doSomethingAsync = () =>{
    return new Promise((resolve,reject)=>{
        //非同期の処理が成功したらresolveを呼ぶ
        setTimeout(()=>{
            resolve(true)
        },1000)

        setTimeout(()=>{
            reject(false)
        },1000)

    })
}


// Promise オブジェクトは then や catch 関数にあらかじめ、
// 成功時や失敗時に呼び出される処理をコールバック関数として登録できる。

const successCallback = () => { console.log('成功した') } 
const failureCallback = () => { console.log('失敗した') }

//thenとcatchを利用した場合
// 失敗時の処理は catch を利用する以外にも、then 関数の第 2 引数で設定できます。
doSomethingAsync().then(successCallback).catch(failureCallback)
doSomethingAsync().then(successCallback,failureCallback)



//------------------promiseの実例
const taskPromise = (name, total) => { return new Promise(resolve => {
    setTimeout(() => {
        total += 1
        console.log(`${name} finished! Total is ${total}.`)
        resolve(total)
    }, 1000) })
}

taskPromise('task-1',0)
.then(
    total => taskPromise('task-2', total)
)



// ※注意点。最初にpromise作る時にreturnをしなければ、.resolveを実行していても後続の処理へ移ることができない。
//expectもスキップされ、テストは強制的に成功したと評価される。
// async/awaitの場合は、returnしなくて良いので、より直感的に処理をかける。
const fetchDataWithPromiseResolve = () =>
    new Promise(resolve => setTimeout(resolve, 1000, 'lemon'))

// .resolvesを利用して成功時の値を受け取る 
test('return lemon', () => {
    return expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon')
})

// async/awaitを利用
test('return lemon with async/await', async () => {
    await expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon')
})