
var seattle = {
    location: 'Seattle',
    minHrCust: 23,
    maxHrCust: 65,
    avgCooCust: 6.5,
    openHours: ['6 am: ', '7 am: ', '8 am: ','9 am: ','10 am: ','11 am: ','12 am: ','1 pm: ','2 pm: ','3 pm: ','4 pm: ','5 pm: ','6 pm: ','7 pm: ','8 pm: ','Total: ' ],
    genRandNumb: function () {
        // min = Math.ceil(this.minHrCust);
        // max = Math.ceil(this.maxHrCust);
        var avgCustPhr = Math.floor(Math.random() * (this.maxHrCust - this.minHrCust) + this.minHrCust) * this.avgCooCust;  //The maximum is exclusive and the minimum is inclusive
        return Math.ceil(avgCustPhr);
        
      },

    render: function()
    {
        var total = 0;
        var storeLocation = document.getElementById('location');
            storeLocation.innerHTML = this.location;

        for(var i = 0; i < 15; i++)
        {
            var grabUl = document.getElementById('seattle');
            var createUl= document.createElement('li');
            var gen = this.genRandNumb();
            createUl.textContent = `${this.openHours[i]}  ${gen} cookies` ;
            total = total + gen;
            grabUl.appendChild(createUl);
        }
        createUl.textContent = `${this.openHours[15]} A total of ${total} cookies are sold today`;
        grabUl.appendChild(createUl);
        
    }
}

    seattle.render();
    seattle.genRandNumb();


    function Store(city, minPerHrCus, maxPerHrCus, avgCookiePerCus)
    {
        this.city = city;
        this.minPerHrCus = minPerHrCus;
        this.maxPerHrCus = maxPerHrCus;
        this.avgCookiePerCus = avgCookiePerCus;
    }

    Store.prototype.genRanNumbCust()
    {
        var avgCustPhr = Math.floor(Math.random() * (this.maxHrCust - this.minHrCust) + this.minHrCust) * this.avgCooCust;  //The maximum is exclusive and the minimum is inclusive
        return Math.ceil(avgCustPhr);

    }

    Store.prototype.render()
    {
        var total = 0;
        var storeLocation = document.getElementById('location');
            storeLocation.innerHTML = this.location;

        for(var i = 0; i < 15; i++)
        {
            var grabUl = document.getElementById('seattle');
            var createUl= document.createElement('li');
            var gen = this.genRandNumb();
            createUl.textContent = `${this.openHours[i]}  ${gen} cookies` ;
            total = total + gen;
            grabUl.appendChild(createUl);
        }
        createUl.textContent = `${this.openHours[15]} A total of ${total} cookies are sold today`;
        grabUl.appendChild(createUl);
        
    }
