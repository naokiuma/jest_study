import {seed} from './seed'

export const chohan = () => {
    //モックの場合だけ通るパターン
    if(seed() === 300){
        return '300もあるぞ〜〜〜';
    }

    return seed() % 2 === 0 ? 'チョウ' : 'ハン'
}
