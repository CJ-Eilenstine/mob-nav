export var wordArray = ["home", "about", "products", "contact"];

export function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');
    console.log(hashTag + ' ' + pageID);
    
    if (pageID != '') {
    $.get(`pages/${pageID}.html`, function (data) {
     console.log('data ' + data);
     $('#app').html(data);
    });
    } else {
    $.get(`pages/home.html`, function (data) {
    console.log('data ' + data);
     $('#app').html(data);
    });
    }
    }