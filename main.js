const fs = require('fs')


class Converter{

    constructor(){
        let fileContent = fs.readFileSync("course.json", "utf8");
        this.courses = JSON.parse(fileContent)
    }
    exchange(amount, fromCurrency, toCurrency){
        if(toCurrency === "EUR"){
            this.resEur = (amount * 1000) / this.courses[fromCurrency]
            return Math.round(this.resEur * 100) / 100 
        }
        else {
            console.log(amount)
            this.resEur = (amount * 1000) / this.courses[fromCurrency]
            this.result = this.resEur * 1000 * this.courses[toCurrency] / 1000
            return Math.round(this.result * 100) / 100 
        }

 
    }
    predict(){

    }


}

module.exports = Converter;
