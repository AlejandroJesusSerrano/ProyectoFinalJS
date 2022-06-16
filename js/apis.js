programBtns()

const apisContainer = document.getElementById('apisContainer')

function programBtns(){
    btnShowPosts()
    btnW();
}

function btnShowPosts()
{
    const btnPostApi = document.getElementById('posts');
    btnPostApi.addEventListener('click', ()=>{
        loadPosts();
    });
};

function btnW(){
    const btnW=document.getElementById('weatherBtn');
    btnW.addEventListener('click', ()=>{
            loadWeather();
    });
}

function loadPosts()
{
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response)=>response.json())
    .then((json)=>showPosts(json))
    .catch(()=>Swal.fire({
        icon: 'error',
        title: 'Lo Sentimos...',
        text: 'Esta Aplicaciòn no esta disponible!.',
        text:'Por favor reintenta en unos instantes'
      }));
    ;
}

function loadWeather()
{
    fetch("https://api.openweathermap.org/data/2.5/weather?lat={-26.073}&lon={-65.9761}&appid={4713fa4ed0318d4221ba53070c6b44b0}")
    .then((response)=>response.json())
    .then((json)=>showWheather(json))
    .catch(()=>Swal.fire({
        icon: 'error',
        title: 'Lo Sentimos...',
        text: 'Esta Aplicaciòn no esta disponible!.',
        text:'Por favor reintenta en unos instantes'
      }));
}

function showPosts(data)
{
    const div=document.getElementById('apisContainer');

    data.forEach(blogPost => {

        const {title, body} = blogPost;

        const divPost = document.createElement('div');
        divPost.innerHTML=`<h2 class="cardTitleSm">${title}</h2>
                            <p class="paragraph">${body}</p>
                            <hr />`        

    div.appendChild(divPost)
    });
};

function showWheather(wheather)
{
    const div = document.getElementById('apisContainer');
    
    wheather.forEach(data=>{
        const {name, main, description, icon} = data;
    
        const frame = document.getElementById('div');
    
            const wheather = document.createElement('div');
            wheather.innerHTML=`<h2>${name}</h2>
                                    <h4>${main}</h4>
                                    <p>${description}</p>
                                    <div>${icon}</div>`
    div.appendChild(frame);

    });
};