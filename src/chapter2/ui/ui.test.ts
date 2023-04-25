import {JSDOM,DOMWindow} from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname,'./index.html'),'utf8')

describe('シンプルuiテスト',()=>{
    let document:Document
    let window: DOMWindow

    beforeEach(()=>{
        window = new JSDOM(html,{runScripts:'dangerously'}).window
        document = window.document
    })

    //テストケース
    // ボタンがクリックされていない場合に、「message」が表示されていないこと 
    it("doesn't show a message at the initial state", () => {
        const message = document.querySelector('#message > p') //message配下のpタグ要素を取得
        expect(message).toBe(null) 
    })
})
