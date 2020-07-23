var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest)
    .then(function (response) {
        console.log(response.type);
        console.log(response.url);
        console.log(response.useFinalURL);
        console.log(response.status);
        console.log(response.ok);
        console.log(response.statusText);
        console.log(response.headers);
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.blob();
    })
    .then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
    })
    .catch(function (error) {
        var p = document.createElement('p');
        p.appendChild(
            document.createTextNode('Error: ' + error.message)
        );
        document.body.insertBefore(p, myImage);
    });

var myBlob = new Blob();
var init = {
    "status": 200,
    "statusText": "SuperSmashingGreat!"
}
var myResponse = new Response(myBlob, init);