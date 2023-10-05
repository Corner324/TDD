const fs = require('fs')


class Converter{

    constructor(){
        let fileContent = fs.readFileSync("course.json", "utf8");
        this.courses = JSON.parse(fileContent)
        fileContent = fs.readFileSync("historyCourse.json", "utf8");
        this.historyCourses = JSON.parse(fileContent)
    }
    exchange(amount, fromCurrency, toCurrency){
        if(toCurrency === "EUR"){
            this.resEur = (amount * 1000) / this.courses[fromCurrency]
            return Math.round(this.resEur * 100) / 100 
        }
        else if(fromCurrency === "EUR"){
            this.resEur = amount
            this.result = this.resEur * this.courses[toCurrency] / 1000
            return Math.round(this.result * 100) / 100 
        }
        else {
            this.resEur = (amount * 1000) / this.courses[fromCurrency]
            this.result = this.resEur * 1000 * this.courses[toCurrency] / 1000
            return Math.round(this.result * 100) / 100 
        }

 
    }
    predict(сurrency){
        historyCourses
    }


}

module.exports = Converter;
