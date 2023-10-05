const {Converter} = require("./main")

describe('Обмен валют', () => {
    it('конвертируем 100 долларов в евро', () => {
      const amount = 100;
      const fromCurrency = 'USD';
      const toCurrency = 'EUR';
      const expectedAmount = 85;
        
      const con = new Converter()
      const result = con.exchange(mount, fromCurrency, toCurrency)
  
      expect(result).toBe(expectedAmount);
    });
    it('конвертируем 70 долларов в евро', () => {
        const amount = 70;
        const fromCurrency = 'USD';
        const toCurrency = 'EUR';
        const expectedAmount = 85;
          
        const con = new Converter()
        const result = con.exchange(mount, fromCurrency, toCurrency)
    
        expect(result).toBe(expectedAmount);
      });

})