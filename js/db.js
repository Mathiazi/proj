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

function orderList(a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase()) { return -1; }
    if (a.name.toUpperCase() > b.name.toUpperCase()) { return 1; }
}

$(window).on('load', () => {
    
    db.collection('itens')
        .doc('SfYOawlpa1ti6SQGVH3L')
        .get()
        .then( doc => {
            
            let getItem = doc.data()['itens-sams'].sort(orderList);

            for (let idx in getItem) {

                let getItemName = getItem[idx].name;
                let opt = document.createElement('option');

                opt.value = getItemName.toUpperCase();

                $('#itens').append(opt);
            }

            $('#preloader').fadeOut();
        })
        .catch(error => { alert(error); });
});

$(document).on('click', '#img-search', () => {

    let getVal = $('#input-search').val();

    db.collection('itens')
        .doc('SfYOawlpa1ti6SQGVH3L')
        .get()
        .then(doc => {

            let getItem = doc.data()['itens-sams'];

            for (let idx in getItem) {

                let i = getItem[idx];

                if (i.name.toUpperCase() == getVal.toUpperCase()) {

                    $('#input-calc').val(i.cod);

                    calc ();
                }
            }
        })
        .catch(error => { alert(error); });
});

$(document).on('click', '#btn-login', () => {

    let email = $('#email').val();
    let pass = $('#pass').val();

    if (email != '' && pass != '') {

        auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
            .then(() => {

                auth.signInWithEmailAndPassword(email, pass)
                    .then(() => {

                        $('#span-status-login').text('Status: Autenticado com sucesso!');

                        setTimeout(() => {

                            $('#form-login').fadeOut();

                        }, 1000);

                        setTimeout(() => {
                            
                            $('#form-prod').fadeIn();

                            $('#span-status-prod').text('Status: Adicione um novo item ...');

                        }, 1500);
                    })
                    .catch(error => { alert(error); });
            })
            .catch(error => { alert(error); });
    } else
        $('#span-status-login').text('Status: Preencha todos os campos ...');
});

$(document).on('click', '#btn-prod', () => {

    let name = $('#prod').val();
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
                $('#span-status-prod').text('Status: Item cadastrado com sucesso!');

                setTimeout(() => {

                    document.location.reload();
                
                }, 3000);
            })
            .catch(error => { alert(error); });
    } else
        $('#span-status-prod').text('Status: Preencha todos os campos ...');
});