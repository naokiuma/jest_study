import {sum} from './sum'

//テストケースを定義
test('1 + 2 は3',()=>{
    expect(sum(1,2)).toBe(3)
})