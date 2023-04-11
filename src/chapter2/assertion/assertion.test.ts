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
test('can1とcan2はexpect not では一致しない。インスタンスが同じ',()=>{
    expect(can1).not.toBe(can2);
})

//インスタンスが同じ;
test('can1とcan2ひかく',()=>{
    expect(can2).toBe(can3)
})

//toEqualはインスタンスは異なるが、値が同じなら一致する
test('can1とcan2ひかく',()=>{
    expect(can1).toEqual(can2);  
})

test('can2 とcan4は違うインスタンスだが、値が同じなので一致', () => {
    expect(can2).toEqual(can4)
})


//真偽値の判断
test('真偽値の判断、toBeTruthy', () => {
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

test('期待値がnullやundefinedではないことを評価したい時はanything。一部プロパティや型も確認可能', () => {
    // 期待値がnullやundefinedではないことを評価
    expect(hoge()).toEqual(expect.anything())

    // 期待値の一部のプロパティがnullやundefinedではないことを評価することも可能
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
test('0.1 + 0.2 returns 0.3。近しい値チェック', () => {
    expect(0.1 + 0.2).not.toBe(0.3)
    expect(0.1 + 0.2).toBeCloseTo(0.3) // デフォルトでは小数点以下2桁までを評価する
})


//配列やオブジェクトに要素があるか
const fruits = ['apple','orange','lemon'];
const itemList = [
    { name: 'Apple', price: 100 },
    { name: 'Lemon', price: 150 }
]

test('対象のデータは配列やオブジェクトにあるか？',()=>{
    expect(fruits).toContain('lemon')//厳密なチェック。プリミティブ用。
    expect(itemList).toContainEqual({ name: 'Apple', price: 100 })//オブジェクトチェック

    expect(itemList).toEqual( expect.arrayContaining([//前者の中に、後者が含まれるか。
            { name: 'Apple', price: 100 }
        ]),
    )
})



//オブジェクトの部分一致
const ciBuild = {
    number: 1,
    duration: 12000,
    state: 'success',
    triggerParameters: {
        is_scheduled: true, 
    },
    type: 'scheduled_pipeline',
    actor: {
        login: 'Taka', 
    },
}
test('1つのプロパティを検証', () => {
    expect(ciBuild).toHaveProperty('state', 'success')
})
test('ネストしたプロパティを検証', () => {
    expect(ciBuild).toHaveProperty('actor.login', 'Taka')
})
test('複数のプロパティを検証', () => {
    expect(ciBuild).toEqual( expect.objectContaining(
        {
            triggerParameters: expect.objectContaining({ is_scheduled: true }),
            type: 'scheduled_pipeline', 
        }
    ),
    ) 
})


//エラーの評価
class User {
    name:string
    password:string
    constructor({name,password}:{name:string,password:string}){
        if(password.length < 6) throw new Error('パスワードは6文字以上必要です。')
        this.name = name
        this.password = password
    }
}

test('新しいユーザーの値を比較',()=>{
    expect(new User({
            name:'abehiroshi',
            password:'passss'
        })
    ).toEqual(
        {
            name:'abehiroshi',
            password:'passss'
        }
    )
})

test('6文字以上でエラーが投げられているか確認',()=>{
    // Errorがthrowされたかのチェック
    expect(
        ()=> new User({name:'hoge',password:'12356'})
    )
    .toThrow()
    // expect(() => new User({ name: 'hoge', password: '12345' })).toThrow() 
})



// const fetchDataWithCallback = callback => { setTimeout(callback, 3000, 'lemon')
// }
// test('return lemon', () => {
// const callback = (message: string) => {
// expect(message).toBe('lemon') }
// fetchDataWithCallback(callback) })

//消費税の計算テスト
// const calcurateSalesTax = (price:number) =>{
   
    
const calculateSalesTax = (price: number) =>{
    return price > 0 ? Math.floor((price / 100) * 10) :0 
}

describe('消費税計算_each',() =>{
    test.skip.each([
        {price:100,expected:10},
        {price:500,expected:50}
    ])(
        '計算しますここにはテストの説明が入るよ',
        ({price,expected}) =>{
            expect(calculateSalesTax(price)).toBe(expected)

        }
    )
})



//前後処理
let beforetest;

beforeAll(() => {
    beforetest = 'testです'
})

test('beforeallです。',()=>{
    expect(beforetest).toBe('testです');

})

// その他の処理。
// ■ beforeAll: describe 内で定義されているすべてのテストの実行前に 1 回実行される
// ■ beforeEach: describe 内で定義されているそれぞれのテストの実行前に 1 回実行される 
// ■ afterAll: describe 内で定義されているすべてのテストの終了後に 1 回実行される
// ■ afterEach: describe 内で定義されているそれぞれのテストの終了後に 1 回実行される



// ■ describe.skip or xdescribe: グループ内のテストケースすべてをスキップ 
// ■ test.skip or xtest: テストケースをスキップ
// ■ it.skip or xit: テストケースをスキップ

// skipを追加すると、そのテストは飛ばされる

