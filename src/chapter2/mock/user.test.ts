import axios from 'axios'
import Users from './users'

jest.mock('axios')
//これを書くことで、自動でモックできるようになる
//これで、.getに対してmockResolvedValueができるようになる

test('should fetch all users', async () => {
    const users = [{ name: 'Bob' }]
    const resp = { data: users };
    (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(resp)//tsでは、こういうふうに型を返す。いつでもrespをくれる。
    // axios.get.mockResolvedValue(resp)//通常はこれ書く
    // axios.get.mockImplementation(() => Promise.resolve(resp)) // 上記のmockResolvedValueと同 じ設定

    await expect(Users.search()).resolves.toEqual(users) })