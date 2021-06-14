
// 'use strict';

// let kittenProfiles = document.getElementById('kittenProfiles');

// // console.log(kittenProfiles);

// let frankie = {
//   name: 'Frankie',
//   age: 0,
//   likes: ['Food', 'chasing', 'napping'],
//   isGoodKids: true,
//   isGoodDog: false,
//   isGoodCat: true,
//   image: './images/frankie.jpeg',
//   breed: 'British',
//   getAge: function() {
//     // this -> object name
//     this.age = getRandomNumber(3, 12);
//   },
//   render: function() {
//     // Create a new Element
//     // add a text to the new element
//     // append the child to the parent

//     let articleElement = document.createElement('article');
//     // articleElement.textContent = 'test article content';
//     kittenProfiles.appendChild(articleElement);

//     let nameTitle = document.createElement('h2');
//     articleElement.appendChild(nameTitle);
//     nameTitle.textContent = this.name;

//     let kittenDescription = document.createElement('p');
//     articleElement.appendChild(kittenDescription);
//     kittenDescription.textContent = `${this.name} is a ${this.breed}, and he is ${this.age} months old`;

//     let kittenList = document.createElement('ul');
//     articleElement.appendChild(kittenList);

//     for(let i = 0; i < this.likes.length; i++) {
//       let listItem = document.createElement('li');
//       kittenList.appendChild(listItem);
//       listItem.textContent = this.likes[i];
//     }

//     let kittenImage = document.createElement('img');
//     // kittenImage.setAttribute('src', this.image);
//     kittenImage.src = this.image;
//     articleElement.appendChild(kittenImage);
//   }
// };

// let jumper = {
//   name: 'Jumper',
//   age: 0,
//   likes: ['Food', 'napping'],
//   isGoodKids: true,
//   isGoodDog: false,
//   isGoodCat: true,
//   image: './images/jumper.jpeg',
//   breed: 'Turkish',
//   getAge: function(min, max) {
//     // this -> object name
//     this.age = getRandomNumber(min, max);
//   },
//   render: function() {
//     // Create a new Element
//     // add a text to the new element
//     // append the child to the parent

//     let articleElement = document.createElement('article');
//     // articleElement.textContent = 'test article content';
//     kittenProfiles.appendChild(articleElement);

//     let nameTitle = document.createElement('h2');
//     articleElement.appendChild(nameTitle);
//     nameTitle.textContent = this.name;

//     let kittenDescription = document.createElement('p');
//     articleElement.appendChild(kittenDescription);
//     kittenDescription.textContent = `${this.name} is a ${this.breed}, and he is ${this.age} months old`;

//     let kittenList = document.createElement('ul');
//     articleElement.appendChild(kittenList);

//     for(let i = 0; i < this.likes.length; i++) {
//       let listItem = document.createElement('li');
//       kittenList.appendChild(listItem);
//       listItem.textContent = this.likes[i];
//     }

//     let kittenImage = document.createElement('img');
//     // kittenImage.setAttribute('src', this.image);
//     kittenImage.src = this.image;
//     articleElement.appendChild(kittenImage);
//   }
// };

// frankie.getAge(3, 12);
// frankie.render();

// jumper.getAge(3, 12);
// jumper.render();

// console.log(frankie);
// console.log(jumper);
// // console.log([frankie, jumper]);

// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }

// // console.log(getRandomNumber(3, 12))
// ///////////////////////////////////////////////////////////////////////////////////////////////









'use strict';

let citiesName = document.getElementById('citiesName');



let Seattle = {
  name: 'Seattle',
  valuesOfCust = { min: 23, max: 65, avg: 6.3 },
  hours: ['6am:cookiePerHour(0)', '7am:cookiePerHour(1)', '8am:cookiePerHour(2)', '9am:cookiePerHour(3)', '10am:cookiePerHour(4)', '11am:cookiePerHour(5)', '12pm:cookiePerHour(6)', '1pm:cookiePerHour(7)', '2pm:cookiePerHour(8)', '3pm:cookiePerHour(9)', '4pm:cookiePerHour(10)', '5pm:cookiePerHour(11)', '6pm:cookiePerHour(12)', '7pm:cookiePerHour(13)', 'Total= sumOfCookei'],
  cookiePerHour =[],
  getHours: function () {

    this.cookiePerHour.push(getRandomNumber(this.min, this.max) * 6.3)
    function sumOfCookei() {
      totalOfCookie = 0; {
        for (let i = 0; i < sumOfCookei.length; i++) {
          totalOfCookie = sumOfCookei[i];

        }
      }
    }
  },
  render: function () {



    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.name;



    let hourList = document.createElement('ul');
    articleElement.appendChild(hourList);

    for (let i = 0; i < this.hours.length; i++) {
      let listHour = document.createElement('li');
      hourList.appendChild(listHour);
      listHour.textContent = this.hours[i];
    }


  }
};


let tokyo = {
  name: 'tokyo',
  valuesOfCust = { min: 3, max: 24, avg: 1.2 },
  hours: ['6am:cookiePerHour(0)', '7am:cookiePerHour(1)', '8am:cookiePerHour(2)', '9am:cookiePerHour(3)', '10am:cookiePerHour(4)', '11am:cookiePerHour(5)', '12pm:cookiePerHour(6)', '1pm:cookiePerHour(7)', '2pm:cookiePerHour(8)', '3pm:cookiePerHour(9)', '4pm:cookiePerHour(10)', '5pm:cookiePerHour(11)', '6pm:cookiePerHour(12)', '7pm:cookiePerHour(13)', 'Total= sumOfCookei'],
  cookiePerHour =[],
  getHours: function () {

    this.cookiePerHour.push(getRandomNumber(this.min, this.max) * 1.2)
    function sumOfCookei() {
      totalOfCookie = 0; {
        for (let i = 0; i < sumOfCookei.length; i++) {
          totalOfCookie = sumOfCookei[i];

        }
      }
    }
  },
  render: function () {



    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.name;



    let hourList = document.createElement('ul');
    articleElement.appendChild(hourList);

    for (let i = 0; i < this.hours.length; i++) {
      let listHour = document.createElement('li');
      hourList.appendChild(listHour);
      listHour.textContent = this.hours[i];
    }


  }
};



let dubai = {
  name: 'dubai',
  valuesOfCust = { min: 11, max: 38, avg: 3.7 },
  hours: ['6am:cookiePerHour(0)', '7am:cookiePerHour(1)', '8am:cookiePerHour(2)', '9am:cookiePerHour(3)', '10am:cookiePerHour(4)', '11am:cookiePerHour(5)', '12pm:cookiePerHour(6)', '1pm:cookiePerHour(7)', '2pm:cookiePerHour(8)', '3pm:cookiePerHour(9)', '4pm:cookiePerHour(10)', '5pm:cookiePerHour(11)', '6pm:cookiePerHour(12)', '7pm:cookiePerHour(13)', 'Total= sumOfCookei'],
  cookiePerHour =[],
  getHours: function () {

    this.cookiePerHour.push(getRandomNumber(this.min, this.max) * 3.7)
    function sumOfCookei() {
      totalOfCookie = 0; {
        for (let i = 0; i < sumOfCookei.length; i++) {
          totalOfCookie = sumOfCookei[i];

        }
      }
    }
  },
  render: function () {



    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.name;



    let hourList = document.createElement('ul');
    articleElement.appendChild(hourList);

    for (let i = 0; i < this.hours.length; i++) {
      let listHour = document.createElement('li');
      hourList.appendChild(listHour);
      listHour.textContent = this.hours[i];
    }


  }
};





let paris = {
  name: 'paris',
  valuesOfCust = { min: 20, max: 38, avg: 2.3 },
  hours: ['6am:cookiePerHour(0)', '7am:cookiePerHour(1)', '8am:cookiePerHour(2)', '9am:cookiePerHour(3)', '10am:cookiePerHour(4)', '11am:cookiePerHour(5)', '12pm:cookiePerHour(6)', '1pm:cookiePerHour(7)', '2pm:cookiePerHour(8)', '3pm:cookiePerHour(9)', '4pm:cookiePerHour(10)', '5pm:cookiePerHour(11)', '6pm:cookiePerHour(12)', '7pm:cookiePerHour(13)', 'Total= sumOfCookei'],
  cookiePerHour =[],
  getHours: function () {

    this.cookiePerHour.push(getRandomNumber(this.min, this.max) * 2.3)
    function sumOfCookei() {
      totalOfCookie = 0; {
        for (let i = 0; i < sumOfCookei.length; i++) {
          totalOfCookie = sumOfCookei[i];

        }
      }
    }
  },
  render: function () {



    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.name;



    let hourList = document.createElement('ul');
    articleElement.appendChild(hourList);

    for (let i = 0; i < this.hours.length; i++) {
      let listHour = document.createElement('li');
      hourList.appendChild(listHour);
      listHour.textContent = this.hours[i];
    }


  }
};







let lima = {
  name: 'lima',
  valuesOfCust = { min: 2, max: 16, avg: 4.6 },
  hours: ['6am:cookiePerHour(0)', '7am:cookiePerHour(1)', '8am:cookiePerHour(2)', '9am:cookiePerHour(3)', '10am:cookiePerHour(4)', '11am:cookiePerHour(5)', '12pm:cookiePerHour(6)', '1pm:cookiePerHour(7)', '2pm:cookiePerHour(8)', '3pm:cookiePerHour(9)', '4pm:cookiePerHour(10)', '5pm:cookiePerHour(11)', '6pm:cookiePerHour(12)', '7pm:cookiePerHour(13)', 'Total= sumOfCookei'],
  cookiePerHour =[],
  getHours: function () {

    this.cookiePerHour.push(getRandomNumber(this.min, this.max) * 4.6)
    function sumOfCookei() {
      totalOfCookie = 0; {
        for (let i = 0; i < sumOfCookei.length; i++) {
          totalOfCookie = sumOfCookei[i];

        }
      }
    }
  },
  render: function () {



    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.name;



    let hourList = document.createElement('ul');
    articleElement.appendChild(hourList);

    for (let i = 0; i < this.hours.length; i++) {
      let listHour = document.createElement('li');
      hourList.appendChild(listHour);
      listHour.textContent = this.hours[i];
    }


  }
};



Seattle.getHours(23.65);
Seattle.render();


tokyo.getHours(3,24);
tokyo.render();


dubai.getHours(11,38);
dubai.render();



paris.getHours(20,38);
paris.render();



lima.getHours(2, 16);
lima.render();






console.log(Seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);



function getRandomNumber(min, max) {

  return Math.floor(Math.random() * (max - min + 1) smin); //The maximum is inclusive and the minimum is inclusive
}

// console.log(getRandomNumber(3, 12))



