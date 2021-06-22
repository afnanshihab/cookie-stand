
'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const parentElement = document.getElementById('salesData');
let salestable = document.getElementById('salestable');

let newBranchForm = document.getElementById('newBranchForm');



function CookieStand(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesPerHour = [];
  this.total = 0;


  allCookies.push(this)
}

let allCookies = [];


CookieStand.prototype.getCustomer = function () {
  //  console.log(getRandomCustomer(this.minCust, this.maxCust))
  for (let i = 0; i < hours.length; i++) {


    let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
    this.cookiesPerHour.push(cookies);
    this.total += cookies;
  }
};

CookieStand.prototype.render = function () {

  let tr = document.createElement('tr');
  salestable.appendChild(tr);

  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = this.name;


  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.cookiesPerHour[i];

  }
  let td2 = document.createElement('td');
  tr.appendChild(td2);
  td2.textContent = this.total;



}

let seattle = new CookieStand('Seattle', 23, 65, 6.3);

let tokyo = new CookieStand('Tokyo', 3, 24, 1.2);

let dubai = new CookieStand('Dubai', 11, 38, 3.7);

let paris = new CookieStand('Paris', 20, 38, 2.3);

let lima = new CookieStand('Lima', 2, 16, 4.6);



makeTableHeader();

seattle.getCustomer();
seattle.render();

tokyo.getCustomer();
tokyo.render();

dubai.getCustomer();
dubai.render();

paris.getCustomer();
paris.render();

lima.getCustomer();
lima.render();











function makeTableHeader() {
  let tr = document.createElement('tr');
  salestable.appendChild(tr);


  let th1 = document.createElement('th')
  tr.appendChild(th1);
  th1.textContent = 'location';

  for (let i = 0; i < hours.length; i++) {
    let th2 = document.createElement('th')
    tr.appendChild(th2);
    th2.textContent = hours[i];
  }

  let th3 = document.createElement('th')
  tr.appendChild(th3);
  th3.textContent = 'daily total';


}


 

function makeTableFooter() {

  let tr = document.createElement('tr');
  salestable.appendChild(tr);

  let th1 = document.createElement('th')
  tr.appendChild(th1);
  th1.textContent = 'totals';




  let totals = 0;
  for (let i = 0; i < hours.length; i++) {
    let totalPerHour = 0;
    for (let j = 0; j < allCookies.length; j++) {

      let total2 = allCookies[j].cookiesPerHour[i];

      totalPerHour += allCookies[j].cookiesPerHour[i];

      totals += allCookies[j].cookiesPerHour[i];


    }
    let td3 = document.createElement('td')
    tr.appendChild(td3);
    td3.textContent = totalPerHour;
    
    }


 

  let th2 = document.createElement('th')
  tr.appendChild(th2);
  th2.textContent = totals;

}

makeTableFooter();



function formAdding(event) {
  event.preventDefault();
  let name = event.target.branchName.value;
  let minCust = event.target.minCust.value;
  let maxCust = event.target.maxCust.value;
  let avgCookie = event.target.avgCookie.value;

  salestable.deleteRow(-1);

  let newBranch = new CookieStand(name, minCust, maxCust, avgCookie);
  
newBranch.getCustomer();
newBranch.render();
newBranchForm.reset();
makeTableFooter() ;

}

newBranchForm.addEventListener('submit', formAdding);



function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



