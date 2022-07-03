console.log("This is news site created by Prakash Banjade")

let xhr = new XMLHttpRequest();
let newsSrc = 'us'
let apiKey = '642bf49f4bc44ac58d9e831de81c1a9c';
let newsContainer = document.getElementById('newsContainer');
let leftNews = document.getElementById("ln");
let rightNews = document.getElementById('rn');
let updateTime = document.querySelectorAll('.updateTime');

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${newsSrc}&apiKey=${apiKey}`, true);

xhr.onload = function() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        // updateTime.innerText = json.articles[0].publishedAt;
        Array.from(updateTime).forEach((e) => {
            e.innerText = json.articles[0].publishedAt;
        })

        let leftNewsHtml = '';
        let rightNewsHtml = '';
        json.articles.forEach(function(element, index) {
            leftNewsHtml += `<div class="news1" id="${index}">
            <span>${element.title}</span>
            <img src="${element.urlToImage}">
            <span class="readMore">Read More <a href="${element.url}">Here!</a></span>
        </div>`;
            rightNewsHtml += `<li><a href="#${index}">${element.title}</a></li>`
        });

        leftNews.innerHTML = leftNewsHtml;
        leftNews.children[0].children[2].style.display = "none";
        rightNews.innerHTML = `<ul>${rightNewsHtml}</ul>`;

        leftNews.children[0].addEventListener('click', () => {
            location.href = `${json.articles[0].url}`;
        })



    } else {
        newsContainer.innerHTML = `<div style="font-size: 3rem; margin-top: 2rem;">The server is down for some reason!<br><span style="font-size:1.5rem;">Please try again in a while.</span></div>`;
    }
}



xhr.send();