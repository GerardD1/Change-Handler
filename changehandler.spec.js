describe('ChangeHandler', function() {
    it('Return amountDue() based on number of coins entered, cashTendered equals zero', function() {
        let change = new ChangeHandler(4);
        expect(change.amountDue).toBe(4);
    });

    it('cashTendered() should be set to zero', function() {
        let cash = new ChangeHandler(100);
        expect(cash.cashTendered).toBe(0);
    });

    it('If quarter is entered add 25', function() {
        let quarter = new ChangeHandler(5);
        quarter.insertCoin('quarter');
        expect(quarter.cashTendered).toBe(25);
    });

    it('Inserting a dime adds 10', function() {
        let dime = new ChangeHandler(7);
        dime.insertCoin('dime');
        expect(dime.cashTendered).toBe(10);
    });

    it('Inserting a nickel adds 5', function() {
        let nickel = new ChangeHandler(3);
        nickel.insertCoin('nickel');
        expect(nickel.cashTendered).toBe(5);
    });

    it('Inserting a penny adds 1', function() {
        let penny = new ChangeHandler(4);
        penny.insertCoin('penny');
        expect(penny.cashTendered).toBe(1);
    });

    it('calling the function multiple times continues to add on', function() {
        let multipleCalls = new ChangeHandler(2);
        multipleCalls.insertCoin('quarter');
        multipleCalls.insertCoin('quarter');
        expect(multipleCalls.cashTendered).toBe(50);

    });

    it('Returns true if cashTendered more than amountDue', function() {
        let paymentSufficiency = new ChangeHandler(7);
        paymentSufficiency.insertCoin('quarter');
        expect(paymentSufficiency.isPaymentSufficient()).toBeTruthy;
    });

    it('Returns false if cashTendered less than amountDue', function() {
        let notEnoughBread = new ChangeHandler(11);
        notEnoughBread.insertCoin('dime');
        expect(notEnoughBread.isPaymentSufficient()).toBeFalsy;
    });

    it('Returns true if cashTendered equal to amountDue', function() {
        let equalMoney = new ChangeHandler(25);
        equalMoney.insertCoin('quarter');
        expect(equalMoney.isPaymentSufficient()).toEqual;
    });

    it('32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2', function() {
        let correctChange = new ChangeHandler(68);
        correctChange.insertCoin('quarter');
        correctChange.insertCoin('quarter');
        correctChange.insertCoin('quarter');
        correctChange.insertCoin('quarter');
        let changeAmount = correctChange.giveChange();
        expect(changeAmount).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
    });

    it('10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0', function() {
        let tenCents = new ChangeHandler(25);
        tenCents.insertCoin('quarter');
        tenCents.insertCoin('dime');
        let newChangeAmount = tenCents.giveChange();
        expect(newChangeAmount).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
    });

    it('27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2', function() {
        let twentySevenCents = new ChangeHandler(48);
        twentySevenCents.insertCoin('quarter');
        twentySevenCents.insertCoin('quarter');
        twentySevenCents.insertCoin('quarter');
        let correctChangeAmount = twentySevenCents.giveChange();
        expect(correctChangeAmount).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
    });

    it('68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3', function() {
        let sixtyEight = new ChangeHandler(32);
        sixtyEight.insertCoin('quarter');
        sixtyEight.insertCoin('quarter');
        sixtyEight.insertCoin('quarter');
        sixtyEight.insertCoin('quarter');
        let sixtyEightChange = sixtyEight.giveChange();
        expect(sixtyEightChange).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
    });
});