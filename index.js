// //array string
// const cars = ['ayla','agya','calya','sigra','innova','kijang']

// //array with integer

// const numbers = [1,2,3,4,5,6,7]

// console.log(cars) 
// console.log(numbers)

// console.log(cars[3])

// document.write(cars + '<br>')
// document.write(numbers + '<br>')
// document.write(cars[3] + '<br>')
// document.write('<span>Jumlah data adalah: </span>' + cars.length +'<br>')
// document.write('<span>Join: </span>' + cars.join('-') +'<br>')
// // pop to delete the last data from the array
// document.write('<span>Pop</span>: ' + cars.pop() + '<br>')
// document.write(cars +'<br>')
// document.write('<span>Add: </span>' + cars.push('BMW') + '<br>')
// document.write(cars +'<br>')

// //LOOP
// for(index = 0; index < 8; index += 2) {
//    document.write(cars[index] + '<br>')
// }

// // const data2 = [
     
// // ]

// var container = document.getElementById("di-user");

// const data = [
//    {
//       "id": 7,
//       "email": "michael.lawson@reqres.in",
//       "first_name": "Michael",
//       "last_name": "Lawson",
//       "avatar": "https://reqres.in/img/faces/7-image.jpg"
//   },
//   {
//       "id": 8,
//       "email": "lindsay.ferguson@reqres.in",
//       "first_name": "Lindsay",
//       "last_name": "Ferguson",
//       "avatar": "https://reqres.in/img/faces/8-image.jpg"
//   },
//   {
//       "id": 9,
//       "email": "tobias.funke@reqres.in",
//       "first_name": "Tobias",
//       "last_name": "Funke",
//       "avatar": "https://reqres.in/img/faces/9-image.jpg"
//   },
//   {
//       "id": 10,
//       "email": "byron.fields@reqres.in",
//       "first_name": "Byron",
//       "last_name": "Fields",
//       "avatar": "https://reqres.in/img/faces/10-image.jpg"
//   },
//   {
//       "id": 11,
//       "email": "george.edwards@reqres.in",
//       "first_name": "George",
//       "last_name": "Edwards",
//       "avatar": "https://reqres.in/img/faces/11-image.jpg"
//   },
//   {
//       "id": 12,
//       "email": "rachel.howell@reqres.in",
//       "first_name": "Rachel",
//       "last_name": "Howell",
//       "avatar": "https://reqres.in/img/faces/12-image.jpg"
//   }
// ]

// var container = document.getElementById("di-user");
// for(user of data) {
//    //iterate location properties
//    for (var prop in user) {
//       if(Object.prototype.hasOwnProperty.call(user, prop)) {
//          //create and append grid item
//          var item = document.createElement("DIV");
//          item.classList.add(user[prop]);
//          item.innerHTML = user[prop];
//          container.appendChild(item);
//       }
//    }
// }

// axios.get('https://reqres.in/api/users?page=2')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// function user(name, age) {
//    console.log(name, age)
// }

// user ('Abdel', 28),
// user ('Dwi', 37)



// const user2 = function(name, age){
//    const result = `Nama: ${name} dan usia: ${age}`
//    return result
// }

// const dwi = user2('Dwi', 37)
// console.log(dwi)

// //arrow function
// const user3 = (nama, usia) => {
//    const result = `Nama : ${nama} dan usia : ${usia}`
//    return result
// }

// console.log(user3('Emily', 35))

const score = 70

if(score > 50){
   console.log('Lulus')
} else{
   console.log("Tidak lulus")
}

const scoreMtk = 55

if(scoreMtk > 70 && scoreMtk < 80){
   console.log("lulus")
} else if (scoreMtk > 50){
   console.log('Lulus memuaskan')
}
else if (scoreMtk < 50){
   console.log('Tidak lulus')
} else {
   console.log('Sangat Memuaskan')
}
