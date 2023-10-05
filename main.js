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
        else if(toCurrency != "EUR"){
            this.resEur = amount * 1000 / this.courses[fromCurrency]
            //console.log(this.courses[toCurrency])
        }
    }
    predict(){

    }


}

module.exports = Converter;
