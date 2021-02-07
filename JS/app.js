
var seattle = {
    location: 'Seattle',
    minHrCust: 5,
    maxHrCust: 25,
    avgCooCust: 2,
    openHours: ['6 am: ', '7 am: ', '8 am: ','9 am: ','10 am: ','11 am: ','12 am: ','1 pm: ','2 pm: ','3 pm: ','4 pm: ','5 pm: ','6 pm: ','7 pm: ','8 pm: ','Total: ' ],
    genRandNumb: function () {
        min = Math.ceil(this.minHrCust);
        max = Math.floor(this.maxHrCust);
        return avgCustPhr = Math.floor(Math.random() * (max - min) + min) * this.avgCooCust;  //The maximum is exclusive and the minimum is inclusive
        
      },
    render: function()
    {
        var total = 0;
        for(var i = 0; i < 15; i++)
        {
            var grabUl = document.getElementById('theList');
            var createUl= document.createElement('li');
            var gen = this.genRandNumb();
            createUl.textContent = this.openHours[i] + gen;
            total = total + gen;
            grabUl.appendChild(createUl);
        }
        createUl.textContent = this.openHours[15] + total;
        grabUl.appendChild(createUl);
        
    }
}

    seattle.render();
    seattle.genRandNumb();

