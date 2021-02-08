var tbody = document.getElementById('tableBody');
function renderHead()
{
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = 'City';
    tbody.appendChild(trElement);
    trElement.appendChild(thElement);
    for(var i = 6; i < 21; i++ ){

        if(i < 12) {
            var thElement = document.createElement('th');
            thElement.textContent = i + ' AM';
            trElement.appendChild(thElement);
        }else{
             var thElement = document.createElement('th');
            thElement.textContent = i - 12 + ' PM';
            trElement.appendChild(thElement);
        }
    }
    var thElement = document.createElement('th');
    thElement.textContent = 'Total';
    tbody.appendChild(trElement);
    trElement.appendChild(thElement);
} 
renderHead();

var allStores = [];
function Stores(city,minHrCust,maxHrCust,avgCooCust)
{
    this.city = city;
    this.minHrCust = minHrCust;
    this.maxHrCust = maxHrCust;
    this.avgCooCust = avgCooCust;

    allStores.push(this);
}

Stores.prototype.generateRandomNumber = function()
{
    var avgCustPhr = Math.floor(Math.random() * (this.maxHrCust - this.minHrCust) + this.minHrCust) * this.avgCooCust;  
    return Math.ceil(avgCustPhr);
}

Stores.prototype.render = function()
{
    var storeTotal = 0;
        var trElement = document.createElement('tr');
        var thElement = document.createElement('th');
        thElement.textContent = this.city;
        tbody.appendChild(trElement);
        trElement.appendChild(thElement);

        for(var i = 6; i < 21; i++ ){

            var tdElement = document.createElement('td');
            var randGen =  this.generateRandomNumber();
            storeTotal += randGen;
            tdElement.textContent =randGen;
            trElement.appendChild(tdElement);
        
        }

        var tdElement = document.createElement('td');
        tdElement.textContent =storeTotal;
        trElement.appendChild(tdElement);
}


var store = new Stores("Shoreline", 5,10,2);
var store2 = new Stores("Addis Ababa", 12,30,3);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);


for(var i = 0; i < allStores.length; i++)
{
    allStores[i].generateRandomNumber();
    allStores[i].render();

}