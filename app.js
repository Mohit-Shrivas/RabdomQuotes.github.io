

const content = document.querySelector("#content");
const Author = document.querySelector("#authr");
const btn = document.querySelector("#btn");

const setHeader = {
    headers:{
        Accept : "application/json"
    }
}

const genratequotes = () => {

fetch('https://api.quotable.io/random',setHeader)
.then( (qdata) => qdata.json() )
.then( (data) => {
    console.log(data);
    content.innerHTML = `<img src="https://img.icons8.com/ios-filled/50/000000/quote-left.png"/> ${data.content}
    <img src="https://img.icons8.com/ios-filled/50/000000/quote-right.png"/>`;
    Author.innerHTML = `Author : ${data.author}`;
}).catch( (ero) => {
    console.log(`The Error -: ${ero}`)
})

}
btn.addEventListener('click' , genratequotes);
genratequotes();




