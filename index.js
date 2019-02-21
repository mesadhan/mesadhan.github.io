



document.addEventListener('DOMContentLoaded', (event) => {
    $("#appMain").load("src/app.html");


    // $.getScript( "/mypath/myscript1.js" );
    // $.getScript( "/mypath/myscript2.js" );
    // $.getScript( "/mypath/myscript3.js" );

    // let appMain = document.getElementById("appMain");

});


/* var promise1 = Promise.resolve(3);
 var promise2 = 42;
 var promise3 = new Promise(function(resolve, reject) {
     setTimeout(resolve, 100, 'foo');
 });

 Promise.all([promise1, promise2, promise3]).then(function(values) {
     console.log(values);
 });
 // expected output: Array [3, 42, "foo"]*/


window.onload = main;

function main() {
    //welcome.innerHTML = 'ddddddddddddddddddddd';

}



function welcomePage() {

    let promise1 = new Promise(function (resolve, reject) {

        let appMain = document.getElementById("appMain");
        if (appMain) {
            $("#appMain").load("welcome.html");
            resolve('success promise1');
        } else {
            reject('error');
        }
    });

    let promise2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            let welcome = document.getElementById("welcome");
            if (welcome) {
                welcome.innerHTML = 'what';
                resolve('success promise2');
            } else {
                reject('error');
            }
        }, 0);

    });

    Promise.all([promise1, promise2]).then(function(values) {
        console.log(values);

    }).catch(function (error) {
        console.log(error);
    });
}