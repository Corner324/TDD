const fs = require('fs')


class Converter{

    constructor(){
        this.history = []

        let fileContent = fs.readFileSync("course.json", "utf8");
        this.courses = JSON.parse(fileContent)

        fileContent = fs.readFileSync("historyCourse.json", "utf8");
        this.historyCourses = JSON.parse(fileContent)
    }

    linearExtrapolation(x1, y1, x2, y2, newX) {
        const slope = (y2 - y1) / (x2 - x1);
        const newY = y1 + (newX - x1) * slope;
        return newY;
    }

    round = num => Math.round(num * 100) / 100 

    exchange(amount, fromCurrency, toCurrency){
        if(toCurrency === "EUR"){
            this.resEur = (amount * 1000) / this.courses[fromCurrency]
            return Math.round(this.resEur * 100) / 100 
        }
        else if(fromCurrency === "EUR"){
            this.resEur = amount
            this.result = this.resEur * this.courses[toCurrency] / 1000
            return this.round(this.result)
        }
        else {
            this.resEur = (amount * 1000) / this.courses[fromCurrency]
            this.result = this.resEur * this.courses[toCurrency] / 1000
            return this.round(this.result)
        }
    }

    predict(fromCurrency, toCurrency){
        for(const course of this.historyCourses[fromCurrency]){
            this.resEur = (1000 * 1000) / course 
            this.history.push(this.round(this.resEur))
        }
        let predNum = this.linearExtrapolation(1, this.history.pop(), 2, this.history.pop(), 3)
        return this.round(predNum)
        
    }
}

module.exports = Converter;
