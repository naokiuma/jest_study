// canの型を定義 
type CanType = {
    flavor: string
    ounces: number
}


// can1とcan2はそれぞれ同じプロパティと同じ値を持つ
const can1: CanType = {
    flavor: 'grapefruit',
    ounces: 12, 
}
const can2: CanType = {
    flavor: 'grapefruit',
    ounces: 12,
}

// can3はcan2の参照を持つ
const can3:CanType = can2



// Canクラス
class Can {
    flavor: string
    ounces: number
    constructor({flavor,ounces}: CanType){
        this.flavor = flavor
        this.ounces = ounces
    }
}
// can4はCanクラスで生成されたオブジェクトでcan1、can2と同じプロパティを持つ
const can4 = new Can(
    {
        flavor: 'grapefruit',
        ounces: 12, 
    }
)


//ここからテスト
test('can1とcan2はexpectでは一致しない。',()=>{
    expect(can1).not.toBe(can2);
    //インスタンスが異なる

})

test('can1とcan2ひかく',()=>{
    expect(can2).toBe(can3)
    //インスタンスが同じ;
})


test('can1とcan2ひかく',()=>{
    //toEqualはインスタンスは異なるが、値が同じなら一致する
    expect(can1).toEqual(can2);  
})

test('can2 とcan4は違うインスタンスだが、値が同じなので一致', () => {
    expect(can2).toEqual(can4)
})


//真偽値の判断
test('"0" should be Truthy', () => {
     expect('0').toBeTruthy()
})
test('0 should be Falsy', () => {
     expect(0).toBeFalsy()
})

// 補足：
// falseになる値
// false
// 0
// -0
// 0n
// ""
// null
// undefined 
// NaN



// nullとundefinedの評価
// toBeNull、toBeUndefined


// null、undefined以外の値かどうかを評価
const hoge = () => ({ hoge: 'hogehoge', number: 0 })

test('hoge return anything', () => {

    // 期待値がnullやundefinedではないことを評価
    expect(hoge()).toEqual(expect.anything())

    // 期待値の一部のプロパティがnullやundefinedではないことを評価 
    expect(hoge()).toEqual({
        hoge: 'hogehoge',
        number: expect.anything(), 
    })

    // 期待値の一部のプロパティnumberがNumber型であることを評価
    expect(hoge()).toEqual({
        hoge: 'hogehoge',
        number: expect.any(Number), 
    })
})


//数字比較について
test('0.1 + 0.2 returns 0.3', () => {
    expect(0.1 + 0.2).toBe(0.3)
    expect(0.1 + 0.2).toBeCloseTo(0.3) // デフォルトでは小数点以下2桁までを評価する
})

