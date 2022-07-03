console.log("This is news site created by Prakash Banjade")

let newsContainer = document.getElementById('newsContainer');
let leftNews = document.getElementById("ln");
let rightNews = document.getElementById('rn');
let updateTime = document.querySelectorAll('.updateTime');
let apiKey = '642bf49f4bc44ac58d9e831de81c1a9c';


// ========== Getting Indian News ============
let xhrInd = new XMLHttpRequest();
let indianNewsSource = 'in'
xhrInd.open('GET', `https://newsapi.org/v2/top-headlines?country=${indianNewsSource}&apiKey=${apiKey}`, true);
xhrInd.onload = function() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        Array.from(updateTime).forEach((e) => {
            e.innerText = json.articles[0].publishedAt;
        })

        let leftNewsHtml = '';
        let rightNewsHtml = '';
        json.articles.forEach(function(element, index) {
            leftNewsHtml += `<div class="news1" id="${index}">
            <span>${element.title.slice(0, 50)}....</span>
            <img src="${element.urlToImage}">
            <span class="readMore">Read More <a href="${element.url}">Here!</a></span>
        </div>`;
            rightNewsHtml += `<li><a href="#${index}">${element.title}</a></li>`;
        });

        leftNews.innerHTML = leftNewsHtml;
        leftNews.children[0].children[2].style.display = "none";
        rightNews.children[1].innerHTML = rightNewsHtml;
        leftNews.children[0].addEventListener('click', () => {
            location.href = `${json.articles[0].url}`;
        })



    } else {
        newsContainer.innerHTML = `<div style="font-size: 3rem; margin-top: 2rem;">The server is down for some reason!<br><span style="font-size:1.5rem;">Please try again in a while.</span></div>`;
    }
}
xhrInd.send();

// changing the category

// let category = document.getElementById('category');
// category.addEventListener('change', (e) => {
//     let apiCat = e.target.value;
//     let xhr = new XMLHttpRequest();
//     // let indianNewsSource = 'in'
//     // xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${indianNewsSource}&apiKey=${apiKey}`, true);
//     xhr.open('GET', `https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=642bf49f4bc44ac58d9e831de81c1a9c`, true);
//     xhr.onload = function() {
//         if (this.status == 200) {
//             let json = JSON.parse(this.responseText);
//             Array.from(updateTime).forEach((e) => {
//                 e.innerText = json.articles[0].publishedAt;
//             })

//             let leftNewsHtml = '';
//             let rightNewsHtml = '';
//             json.articles.forEach(function(element, index) {
//                 leftNewsHtml += `<div class="news1" id="${index}">
//             <span>${element.title.slice(0, 50)}....</span>
//             <img src="${element.urlToImage}">
//             <span class="readMore">Read More <a href="${element.url}">Here!</a></span>
//         </div>`;
//                 rightNewsHtml += `<li><a href="#${index}">${element.title}</a></li>`;
//             });

//             leftNews.innerHTML = leftNewsHtml;
//             leftNews.children[0].children[2].style.display = "none";
//             rightNews.children[1].innerHTML = rightNewsHtml;
//             leftNews.children[0].addEventListener('click', () => {
//                 location.href = `${json.articles[0].url}`;
//             })



//         } else {
//             newsContainer.innerHTML = `<div style="font-size: 3rem; margin-top: 2rem;">The server is down for some reason!<br><span style="font-size:1.5rem;">Please try again in a while.</span></div>`;
//         }
//     }
//     xhr.send();
// })

Array.from(leftNews.children).forEach((e) => {
    e.children[0].innerText = `${ e.children[0].innerText.slice(0,50)}...`;
});

// ========== Getting Tesla News News ============
apiKey = '642bf49f4bc44ac58d9e831de81c1a9c';
let teslaNews = document.getElementById('tesla-today');
let xhrTes = new XMLHttpRequest();
xhrTes.open('GET', `https://newsapi.org/v2/everything?q=tesla&from=2022-06-03&sortBy=publishedAt&apiKey=${apiKey}`, true);
xhrTes.onload = function() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let teslaTodayHtml = '';
        json.articles.forEach(function(element, index) {
            teslaTodayHtml += `<div class="news1" id="${index}">
            <span>${element.title.slice(0, 50)}....</span>
            <img src="${element.urlToImage}">
            <span class="readMore">Read More <a href="${element.url}">Here!</a></span>
        </div>`;
        });
        teslaNews.innerHTML = `<h2>Tesla Today</h2>${teslaTodayHtml}`;
        teslaNews.children[1].children[2].style.display = 'none';
    } else {
        teslaNews.innerHTML = `<div style="font-size: 3rem; margin-top: 2rem;">Can't show now! 
        Come back in a while.</span></div>`;
    }
};

xhrTes.send();

// ============== Apple News ================
apiKey = '642bf49f4bc44ac58d9e831de81c1a9c';
let appleNews = document.getElementById('apple-now');
let xhrApple = new XMLHttpRequest();
xhrApple.open('GET', `https://newsapi.org/v2/everything?q=apple&from=2022-07-02&to=2022-07-02&sortBy=popularity&apiKey=${apiKey}`, true);
xhrApple.onload = function() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let appleNowHtml = '';
        json.articles.forEach(function(element, index) {
            appleNowHtml += `<div class="news1" id="${index}">
            <span>${element.title.slice(0, 50)}....</span>
            <img src="${element.urlToImage}">
            <span class="readMore">Read More <a href="${element.url}">Here!</a></span>
        </div>`;
        });
        appleNews.innerHTML = `<h2>Apple Now</h2>${appleNowHtml}`;
        appleNews.children[1].children[2].style.display = 'none';
    } else {
        appleNews.innerHTML = `<div style="font-size: 3rem; margin-top: 2rem;">Can't show now! 
        Come back in a while.</span></div>`;
    }
};

xhrApple.send();