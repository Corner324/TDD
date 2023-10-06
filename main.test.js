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
        it('конвертируем 30 долларов в рубли', () => {
            const amount = 30;
            const fromCurrency = 'USD';
            const toCurrency = 'RUB';
            const expectedAmount = 2976.44;
            
            const con = new Converter()
            const result = con.exchange(amount, fromCurrency, toCurrency)
        
            expect(result).toBe(expectedAmount);
        });
    })

    describe('Предсказание курса', () => {
        it('предсказываем дальнейший курс 1000 рублей к евро', () => {
            const fromCurrency = 'RUB';
            const toCurrency = 'EUR';
            const expectedAmount = 10.47;

            const con = new Converter()
            const result = con.predict(fromCurrency, toCurrency)

            expect(result).toBe(expectedAmount);

        });
    });


});