import  {chohan} from './chohan'

//jest.mockの第一引数には内部モジュールのパスを渡す。
//この操作でseedをモック化する。seedは10しか返さなくなる。
jest.mock('./seed',() => {
    return{
        seed:jest.fn()
            .mockImplementation(()=> 300)
    }
})

describe('丁半',()=>{
    it('必ず300がかえるようになっちゃった',()=>{
        expect(chohan()).toBe('300もあるぞ〜〜〜')
    })
})
