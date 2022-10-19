import {SearchStore} from "../../stores/modules/SearchStore";
import {appSearch, gameSearch} from "../../actions/SearchAction";

export interface SearchType{
    title:string,
    subtitle:string
}

export class Search{
    constructor() {
        this.getResult()
    }
    onGameSearch = () => {
        SearchStore.dispatch(gameSearch())
    }
    onAppSearch = () =>{
        SearchStore.dispatch(appSearch())
    }
    getResult = () =>{
        return SearchStore.getState()
    }

    searchSelection(searchType:string):SearchType {
        if(searchType === "game") {
          const searchPromise = new Promise((resolve, reject)=>{
              this.onGameSearch()
              resolve(true)
          })
          searchPromise.then(()=>{
              console.log("검색결과:",this.getResult())
              return this.getResult()
          })
        }

        else if(searchType === "app") {
            const searchPromise = new Promise((resolve, reject) => {
                this.onAppSearch()
                resolve(true)
            })
            searchPromise.then(() => {
                console.log("검색결과:", this.getResult())
                return this.getResult()
            })
        }

        return <SearchType>this.getResult()
    }
}
