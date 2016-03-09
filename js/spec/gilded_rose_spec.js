describe("When updateing quality for standard item", function() {
    describe("Sell in date has not passed date", function() {
        it("then Sell in number and quality should be decreased by one", function() {
            items = [new Item('+5 Dexterity Vest', 10, 20)];
            
            update_quality();
            
            expect(items[0].name).toEqual("+5 Dexterity Vest");
            expect(items[0].sell_in).toEqual(9);
            expect(items[0].quality).toEqual(19);
        });
    });
    
    describe("Sell in date has passed date", function() {
        it("then Sell in number should be decreased by one and quality by two", function() {
            items = [new Item('+5 Dexterity Vest', -1, 20)];
            
            update_quality();
            
            expect(items[0].name).toEqual("+5 Dexterity Vest");
            expect(items[0].sell_in).toEqual(-2);
            expect(items[0].quality).toEqual(18);
        });
    });
    
    describe("Quality is 0", function() {
        it("then Sell in number should be decreased by one and quality stay the same", function() {
            items = [new Item('+5 Dexterity Vest', -1, 0)];
            
            update_quality();
            
            expect(items[0].name).toEqual("+5 Dexterity Vest");
            expect(items[0].sell_in).toEqual(-2);
            expect(items[0].quality).toEqual(0);
        });
    });
});


describe("When updateing quality for aged Brie", function() {
    describe("Sell in date has not passed date", function() {
        it("then Sell in number should be decreased but quality increased by one", function() {
            items = [new Item('Aged Brie', 10, 20)];

            update_quality();
            
            expect(items[0].name).toEqual("Aged Brie");
            expect(items[0].sell_in).toEqual(9);
            expect(items[0].quality).toEqual(21);
        });
    });
    
    describe("Sell in date has passed date", function() {
        it("then Sell in number should be decreased but quality increased by two", function() {
            items = [new Item('Aged Brie', -1, 20)];
            
            update_quality();
            
            expect(items[0].name).toEqual("Aged Brie");
            expect(items[0].sell_in).toEqual(-2);
            expect(items[0].quality).toEqual(22);
        });
    });
    
    describe("Quality is 49", function() {
        it("then Sell in number should be decreased but quality should be 50", function() {
            items = [new Item('Aged Brie', -1, 49)];
            
            update_quality();
            
            expect(items[0].name).toEqual("Aged Brie");
            expect(items[0].sell_in).toEqual(-2);
            expect(items[0].quality).toEqual(50);
        });
    });
    
    describe("Quality is 50", function() {
        it("then Sell in number should be decreased but quality should not be", function() {
            items = [new Item('Aged Brie', -1, 50)];
            
            update_quality();
            
            expect(items[0].name).toEqual("Aged Brie");
            expect(items[0].sell_in).toEqual(-2);
            expect(items[0].quality).toEqual(50);
        });
    });
});


describe("When updateing quality for Sulfuras", function() {
    describe("Sell in date has not passed date", function() {
        it("then Sell in number and quality should should not be changed", function() {
            items = [new Item('Sulfuras, Hand of Ragnaros', 10, 80)];

            update_quality();
            
            expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
            expect(items[0].sell_in).toEqual(10);
            expect(items[0].quality).toEqual(80);
        });
    });
    
    describe("Sell in date has passed date", function() {
        it("then Sell in number and quality should should not be changed", function() {
            items = [new Item('Sulfuras, Hand of Ragnaros', -1, 80)];
            
            update_quality();
            
            expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
            expect(items[0].sell_in).toEqual(-1);
            expect(items[0].quality).toEqual(80);
        });
    });
});


    //items.push(new Item('', 15, 20));
describe("When updateing quality for Backstage passes to a TAFKAL80ETC concert", function() {
    describe("Sell in date has not passed date", function() {
        it("then Sell in number should be decreased but quality increased by one", function() {
            items = [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)];

            update_quality();
            
            expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
            expect(items[0].sell_in).toEqual(14);
            expect(items[0].quality).toEqual(21);
        });
    });
    
    describe("Sell in date is 10 or less", function() {
        it("then Sell in number should be decreased but quality increased by two", function() {
            items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)];

            update_quality();
            
            expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
            expect(items[0].sell_in).toEqual(9);
            expect(items[0].quality).toEqual(22);
        });
    });
    
    describe("Sell in date is 5 or less", function() {
        it("then Sell in number should be decreased but quality increased by tree", function() {
            items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)];
            
            update_quality();
            
            expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
            expect(items[0].sell_in).toEqual(4);
            expect(items[0].quality).toEqual(23);
        });
    });
    
    describe("Sell in date is 0 and quality 40", function() {
        it("then Sell in number should not be decreased and quality should be equal to 0", function() {
            items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40)];
            
            update_quality();
            
            expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
            expect(items[0].sell_in).toEqual(-1);
            expect(items[0].quality).toEqual(0);
        });
    });
    
    describe("Quality is 48 and Sell in 5", function() {
        it("then Sell in number should be decreased but quality should be equal to 50", function() {
            items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48)];
            
            update_quality();
            
            expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
            expect(items[0].sell_in).toEqual(4);
            expect(items[0].quality).toEqual(50);
        });
    });
    
    describe("Quality is 50 and Sell in 5", function() {
        it("then Sell in number should be decreased but quality should be equal to 50", function() {
            items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50)];
            
            update_quality();
            
            expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
            expect(items[0].sell_in).toEqual(4);
            expect(items[0].quality).toEqual(50);
        });
    });
});
