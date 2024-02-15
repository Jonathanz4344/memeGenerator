const memeForm = document.querySelector('#meme-form');
const memes = document.querySelector('#memes');

memeForm.addEventListener("submit", e => {
    e.preventDefault();
    const meme = document.createElement('div');
    meme.className = "meme";
    const textTop = document.createElement('p');
    textTop.className = "text-top";
    textTop.innerText = e.target.textTop.value.toUpperCase();
    meme.append(textTop);
    const memeImg = document.createElement('img');
    memeImg.setAttribute('src', e.target.url.value);
    meme.append(memeImg);
    const textBot = document.createElement('p');
    textBot.className = "text-bot";
    textBot.innerText = e.target.textBot.value.toUpperCase();
    meme.append(textBot);
    const btnDiv = document.createElement('div');
    btnDiv.className = "btn";
    const xDiv = document.createElement('div');
    xDiv.className = "x";
    xDiv.innerText = "X";
    btnDiv.append(xDiv);
    meme.append(btnDiv);
    memes.append(meme);
    memeForm.reset();
});

memes.addEventListener("click", e => {
    if (e.target.className === 'x') {
        const meme = e.target.parentElement.parentElement;
        meme.remove();
    };
});