document.addEventListener('DOMContentLoaded', loading)

function loading() {
    jsonFile()
}

// using function to fetch the file from a specific url
function jsonFile() {
    fetch('https://picsum.photos/v2/list?limit=10')
    .then(response => response.json())
    .then(newData)
}
function newData(data) {
    let myhtml = document.createElement('main');
    data.forEach(du => {
        let img = document.createElement('img');
        let fetchUrl = du.download_url.replace(`${du.width}\/${du.height}`, '400/300');
        img.setAttribute('src', fetchUrl);
        img.setAttribute('alt', du.author);
        myhtml.append(img);
    }); 
    document.body.append(myhtml);
}