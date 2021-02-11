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
let user = firebase.auth().currentUser;

//#region lista de itens
function order(a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    return false;
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
    $('.lbl-status').text('Finalizando ...');

    setTimeout(() => {
        $('.form').css({ 'display': 'none' });
        $('#icon-menu-mobile').css({ 'display': 'block' });
    }, 1200);
}

function formLogIn() {
    $('.lbl-status').text('Esperando login do usuário ...');
    menu();
    $('#icon-menu-mobile').css({ 'display': 'none' });
    setTimeout(() => {
        if (user)
            $('#add-prod').css({ 'display': 'block' });
        else
            $('#form-login').css({ 'display': 'block' });
    }, 1000);
}

function authUser() {

    let email = $('#email').val();
    let pass = $('#pass').val();

    if (email != '' && pass != '') {

        auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
            .then(() => {

                auth.signInWithEmailAndPassword(email, pass)
                    .then(() => {
                        $('.lbl-status').text('Logado com sucesso!');

                        setTimeout(() => {
                            $('#form-login').css({ 'display': 'none' });
                        }, 1200);

                        setTimeout(() => {
                            $('.lbl-status').text('Adicione um novo item ...');
                            $('#add-prod').css({ 'display': 'block' });
                        }, 1200);
                    })
                    .catch(error => {
                        alert(error);
                    });
            })
            .catch(error => {
                alert(error);
            });
    }
    else
        $('.lbl-status').text('Preencha todos os campos ...');
}

function addItem() {

    let name = $('#name').val();
    let cod = $('#cod').val();

    if (name != '' && cod != '') {
        db.collection('itens')
            .doc('SfYOawlpa1ti6SQGVH3L')
            .update({
                'itens-sams': firebase.firestore.FieldValue.arrayUnion({
                    name: name,
                    cod: cod
                })
            })
            .then(() => {
                $('.lbl-status').text('item criado com sucesso!');
                setTimeout(() => {
                    windowClose();
                }, 2000);
            })
            .catch(error => {
                alert(error);
            });
    }
    else
        $('.lbl-status').text('Preencha todos os campos ...');
}