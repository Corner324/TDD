// const fs = require('fs')


class Converter{

    constructor(){
        this.history = []

        fetch('course.json')
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                this.courses = data
            })
            .catch(error => {
                console.error('Ошибка при загрузке файла course.json:', error);
            });

        // let fileContent = fs.readFileSync("course.json", "utf8");
        // this.courses = JSON.parse(fileContent)

        fetch('historyCourse.json')
            .then(response => response.json())
            .then(data => {
                this.historyCourses = data
            })
            .catch(error => {
                console.error('Ошибка при загрузке файла course.json:', error);
            });

        // fileContent = fs.readFileSync("historyCourse.json", "utf8");
        // this.historyCourses = JSON.parse(fileContent)
    }

    linearExtrapolation(x1, y1, x2, y2, newX) {
        const slope = (y2 - y1) / (x2 - x1);
        const newY = y1 + (newX - x1) * slope;
        return newY;
    }

    round = num => Math.round(num * 100) / 100 

    exchange(amount, fromCurrency, toCurrency){
        if(toCurrency === "EUR"){
            if (fromCurrency === "EUR"){return "Incorrect conversion"}
            this.resEur = (amount * 1000) / this.courses[fromCurrency]
            return Math.round(this.resEur * 100) / 100 
        }
        else if(fromCurrency === "EUR"){
            if (toCurrency === "EUR"){return "Incorrect conversion"}
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

    predict(fromCurrency){
        for(const course of this.historyCourses[fromCurrency]){
            this.resEur = (1000 * 1000) / course 
            this.history.push(this.round(this.resEur))
        }
        let predNum = this.linearExtrapolation(1, this.history.pop(), 2, this.history.pop(), 3)
        return this.round(predNum)
    }
}

// module.exports = Converter;


const con = new Converter()

function startConvert(){
    const fromCurrency = document.getElementById("fromCurrency").value
    const toCurrency = document.getElementById("toCurrency").value
    const cost = document.getElementById("cost").value
    const checkBox = document.getElementById("checkBox")
    const result = document.getElementById("result")

    if(checkBox.checked){
        if(toCurrency != "EUR"){ result.textContent = "Only for Euro" }
        else{ result.textContent = con.predict(fromCurrency) }
    }
    else{
        result.textContent = con.exchange(cost, fromCurrency, toCurrency)
    }

}
