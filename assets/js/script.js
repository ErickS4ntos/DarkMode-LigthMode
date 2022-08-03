const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click', changeMode);

function changeMode(){
    changeClasses();
    changeTexts();
}

function changeClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
}

function changeTexts(){
    const darkMode = "Dark Mode";
    const ligthMode = "Ligth Mode";

    if(body.classList.contains('dark-mode')){
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
        h1.innerHTML = ligthMode + " ON";
        return;
}