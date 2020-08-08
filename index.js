// 6346092ff1974cd0862384e4fe73ef53
// source=`the-times-of-india`
// https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=6346092ff1974cd0862384e4fe73ef53

console.log('hey this is me ,whatsup')
let source = 'the-times-of-india';
let apiKey = '6346092ff1974cd0862384e4fe73ef53'
let newsAccordion = document.getElementById('newsAccordion')
const xhr = new XMLHttpRequest()
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6346092ff1974cd0862384e4fe73ef53`, true)
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        console.log(articles)
        let newHtml = ""
        articles.forEach(function (element, index) {
            let news = ` 
            <div class="card">
                <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                            data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News : ${index + 1} </b>${element['title']}
                        </button>
                    </h2>
                </div>

                <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}"
                    data-parent="#newsAccordion">
                    <div class="card-body">
                        <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
                    </div>
                </div>
        </div>`
            newHtml += news
        });
        newsAccordion.innerHTML = newHtml
    }
    else {
        console.log('some error occured')
    }
}
xhr.send()