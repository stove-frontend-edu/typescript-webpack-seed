import './main-style.css';

import { DocumentSelectionExample } from './component/document-selection-example';
import {Search} from "./component/pages/Search";

const excute = () => {
    const documentSelectionExample = new DocumentSelectionExample();
    const search = new Search();

    search.searchSelection("game")
    search.searchSelection("app")

};

excute();