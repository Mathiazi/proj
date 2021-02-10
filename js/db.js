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

let auth = firebase.auth();
let db = firebase.firestore();

//#region lista de itens
function order(a, b) {

    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;

    return 0;
}
db.collection("itens").doc("SfYOawlpa1ti6SQGVH3L").get()
    .then(doc => {

        let getItem = doc.data()['itens-sams'].sort(order);

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
//#endregion
//#region codigo do item
function getcodItem() {
    let getValue = document.getElementsByClassName("input-search")[0].value;
    let setValue = document.getElementsByClassName("input-calc")[0];
    db.collection("itens").doc("SfYOawlpa1ti6SQGVH3L").get()
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

function windowClose() {

    setTimeout(() => {
        document.getElementById("form-login").style.display = "none";
        document.getElementById("add-prod").style.display = "none";
        document.getElementById("icon-menu-mobile").style.display = 'block';
    }, 100);
}

function formLogIn() {

    menu();

    document.getElementById("icon-menu-mobile").style.display = 'none';

    let logged = auth.currentUser;

    if (logged != null) {

        setTimeout(() => {
            document.getElementById("add-prod").style.display = "block";
        }, 1000)
    }
    else {

        setTimeout(() => {
            document.getElementById("form-login").style.display = "block";
        }, 1000);
    }
}

function authUser() {

    let userEmail = document.getElementById('userEmail').value;
    let userPass = document.getElementById('userPass').value;

    auth.signInWithEmailAndPassword(userEmail, userPass)
        .then(() => {

            alert('logado com sucesso!');

            document.getElementById("form-login").style.display = "none";

            setTimeout(() => {
                document.getElementById("add-prod").style.display = "block";
            }, 1000)
        })
        .catch(error => {
            alert(error);
        });
}

function addItem() {

    let name = document.getElementById('name').value;
    let item = document.getElementById('cod').value;

    if (name != '' &&
        item != '') {

        db.collection('itens').doc('SfYOawlpa1ti6SQGVH3L')
            .update({
                'itens-sams': firebase.firestore.FieldValue.arrayUnion(
                    {
                        name: name,
                        cod: item
                    }
                )
            })
            .then(

                alert('Item Sams adicionado com sucesso!'),

                auth.signOut()
                    .then(
                        alert('O usuário foi deslogado.'),
                        document.location.reload()
                    )
                    .catch(error => {
                        alert(error);
                    })
            )
            .catch(error => {
                alert(error);
            })
    }
    else
        alert('Preencha todos os campos antes de continuar.')
}