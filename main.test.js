const Converter = require('./main.js');

describe('Работа с валютами', () => {
    describe('Обмен валют', () => {
        it('конвертируем 100 долларов в евро', () => {
        const amount = 100;
        const fromCurrency = 'USD';
        const toCurrency = 'EUR';
        const expectedAmount = 95.12;
            
        const con = new Converter()
        const result = con.exchange(amount, fromCurrency, toCurrency)
    
        expect(result).toBe(expectedAmount);
        });
        it('конвертируем 70 долларов в евро', () => {
            const amount = 70;
            const fromCurrency = 'USD';
            const toCurrency = 'EUR';
            const expectedAmount = 66.59;
            
            const con = new Converter()
            const result = con.exchange(amount, fromCurrency, toCurrency)
        
            expect(result).toBe(expectedAmount);
        });
        it('конвертируем 100 евро в доллары', () => {
            const amount = 100;
            const fromCurrency = 'EUR';
            const toCurrency = 'USD';
            const expectedAmount = 105.13;
            
            const con = new Converter()
            const result = con.exchange(amount, fromCurrency, toCurrency)
        
            expect(result).toBe(expectedAmount);
        });
        it('конвертируем 80 рублей в евро', () => {
            const amount = 80;
            const fromCurrency = 'RUB';
            const toCurrency = 'EUR';
            const expectedAmount = 0.77;
            
            const con = new Converter()
            const result = con.exchange(amount, fromCurrency, toCurrency)
        
            expect(result).toBe(expectedAmount);
        });
    })

    describe('Предсказание курса', () => {
        it('предсказываем дальнейший курс евро', () => {
            const сurrency = 'EUR';
            const expectedAmount = [20,30,40];

            const con = new Converter()
            const result = con.predict(сurrency)

            expect(result).toBe(expectedAmount);

        });
    });


});