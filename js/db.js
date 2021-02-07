
var firebaseConfig = {
    apiKey: "AIzaSyAsM-wXNJZxezK8fgESTUT_Z68Z3sG9uW4",
    authDomain: "list-itens.firebaseapp.com",
    databaseURL: "https://list-itens-default-rtdb.firebaseio.com",
    projectId: "list-itens",
    storageBucket: "list-itens.appspot.com",
    messagingSenderId: "849149979243",
    appId: "1:849149979243:web:e3c0c7fdaca301f3265f2e",
    measurementId: "G-YGTEH12ZTR"
};
firebase.initializeApp(firebaseConfig);

//#region loadList
let db = firebase.firestore();
db.collection("itens")
    .doc("SfYOawlpa1ti6SQGVH3L")
    .get()
    .then(doc => {
        let getItem = doc.data()['itens-sams'];
        for (let index in getItem) {
            let getItemName = getItem[index].name;
            let opt = document.createElement('option');
            opt.value = getItemName.toUpperCase();
            document.getElementById("itens").appendChild(opt);
        }
    })
    .catch(error => {
        alert(error);
    });

function getcodItem() {
    let getValue = document.getElementsByClassName("input-search")[0].value;
    let setValue = document.getElementsByClassName("input-calc")[0];
    db.collection("itens")
        .doc("SfYOawlpa1ti6SQGVH3L")
        .get()
        .then(doc => {
            let getItem = doc.data()['itens-sams'];
            for (let index in getItem) {
                let i = getItem[index];
                if (i.name.toUpperCase() == getValue.toUpperCase()) {
                    setValue.value = i.cod;
                    calc();
                }
            }
        })
        .catch(error => {
            alert(error);
        });
}
//#endregion 

//#region auth
function closeAuth() {
    var formLogin = document.getElementById("form-login");
    formLogin.style.display = "none";
}
function admLoginDesktop() {
    setTimeout(() => {
        let formLogin = document.getElementById("form-login");
        formLogin.style.display = 'block';
    }, 400)
}
function admLoginMob() {
    menuMobile();

    setTimeout(() => {
        let formLogin = document.getElementById("form-login");
        formLogin.style.display = 'block';
    }, 1000)
}
//#endregion