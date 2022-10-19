import {Store} from "../Store"

export interface SearchState{
    title:string,
    subtitle:string
}

const initState: SearchState = {
    title:"",
    subtitle:""
}

export function searchReducer(state:SearchState, actionKey:any):SearchState{
    switch (actionKey) {
        case 'APP-SEARCH':
            return {title: initState.title + '오늘의집', subtitle: initState.subtitle + '오늘의 집은 천만 유저를 자랑하는..'}
        case 'GAME-SEARCH':
            return {title: initState.title +'겟엠프드', subtitle: initState.subtitle + '겟임프드는 2000년대 향수를 자극하는 게임으로써..'}
        default:
            return state
    }

}
export const SearchStore = new Store(initState, searchReducer)