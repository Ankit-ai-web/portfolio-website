function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather report");
            resolve(200);
        },2000);
    });
}


async function getWeatherData() {
    await api(); 
    
}

// Use of Promises

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data 1");
//             resolve("success");
//         }, 3000);
//     });
// };

// function asyncFunc2() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("Some data 2");
//             resolve("Success");
//         }, 3000)
//     });
// }

// console.log("Fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);

//     console.log("Fetching data 2 ");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });
// });

// function getData(dataId, getNextData) {

//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }
// // Callback Hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

