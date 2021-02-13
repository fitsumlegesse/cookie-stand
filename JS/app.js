var tbody = document.getElementById('tableBody');
function renderHead()
{
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = 'City';
    tbody.appendChild(trElement);
    trElement.appendChild(thElement);

    // A for loop that creats the creates and renders the operation hours 
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
    thElement.textContent = 'Total Today';
    tbody.appendChild(trElement);
    trElement.appendChild(thElement);
} 
renderHead();
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Construction function for the stores we will create 

//The array below will store the stores creates by the construction functions 
var allStores = [];
function Stores(city,minHrCust,maxHrCust,avgCooCust)
{
    this.city = city;
    this.minHrCust = minHrCust;
    this.maxHrCust = maxHrCust;
    this.avgCooCust = avgCooCust;

    //Pushes the newly created store into the allStores array
    allStores.push(this);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// The method below generates a random number of customers visiting at a given time and multiply that by the ammount of  avg cookies a customer buys at that store
// the min num of customer visiting in a given hour is provided
// the max num of customer visiting in a given hour is provided
// the avg number of a cookie bought by a customer at that store is given 

Stores.prototype.genCookiesBought = function()
{
    var avgCustPhr = Math.floor(Math.random() * (this.maxHrCust - this.minHrCust) + this.minHrCust) * this.avgCooCust;  
    return Math.ceil(avgCustPhr);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// The constructor function below will render the city first and all the hours using a for loop
//After all the operation hours are rendered using the for loop, the last td,Total Today with a text content of  storeTotal(A var )

Stores.prototype.render = function()
{
    var storeTotal = 0;
        var trElement = document.createElement('tr');
        var thElement = document.createElement('th');
        thElement.textContent = this.city;
        tbody.appendChild(trElement);
        trElement.appendChild(thElement);

// A for loop that creates a ran gen number for each hour of the day for a single store  
        for(var i = 6; i < 21; i++ ){
            // A TD will be created for the hours of 6 am and 21 am
            var tdElement = document.createElement('td');
            var randGen =  this.genCookiesBought();
            storeTotal += randGen;
            tdElement.textContent =randGen;
            trElement.appendChild(tdElement);
        
        }
// After generating numbers for all the operating hours, we will go out of the loop and create a td for the Total Today 
//Total Today will have a text content of calculated total that is previously stored in the genCookiesBought() function
        var tdElement = document.createElement('td');
        tdElement.textContent =storeTotal;
        trElement.appendChild(tdElement);

        
        
}

Stores.prototype.generateFooterRow = function()
{
    var totalOfAllTotals = 0;
    var parent = document.getElementById('tableBody');
    var trElement = document.createElement('tr');
    parent.appendChild(trElement);

    for(var i = 6; i < 21; i++)
        var  hourlyTotal = 0;
    {
        for(var j = 0; j < allStores.length;j++)
        {
            hourlyTotal += allStores[j].genCookiesBought[i];
            totalOfAllTotals += allStores[j].genCookiesBought[i];
        }
           
    }
        
}



var formElement = document.getElementById('form');

function storeMaker(event)
{
    event.preventDefault();

    
    var storeLocation = event.target.storeLocation.value;
    var minCust = event.target.min.value;
    var maxCust = event.target.max.value;
    var aveCustCo = event.target.avg.value;

    
 

    new Stores(storeLocation,minCust,maxCust,aveCustCo);

}

formElement.addEventListener('submit', storeMaker);

var store = new Stores("Shoreline", 5,10,2);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);
var store3 = new Stores("San Fransisco", 5,20,4);

for(var i = 0; i < allStores.length; i++)
{
    allStores[i].genCookiesBought();
    allStores[i].render();
    allStores[i].generateFooterRow();
    
    

}