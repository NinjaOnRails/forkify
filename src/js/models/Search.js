import axios from 'axios';
import { key, proxy } from '../config';

// key ed73daf4292565544fb5ee1f0002989e
// key d5d3ce7ef708dd7657f1329a4de4739e
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}/https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}