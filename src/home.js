function createHomePage(){
    const home = document.createElement('div');
    home.classList.add('home');

    const lobbyImg = document.createElement('img');
    lobbyImg.src = "images-vids/spa-lobby.png";
    lobbyImg.alt = "Lobby";

    home.appendChild(makeParagraph(''));
    home.appendChild(makeParagraph('Where relaxation and rejuvenation are our top priority'));
    home.appendChild(lobbyImg);
    home.appendChild(makeParagraph('Book an appointment with us today!'));

    return home;
}

function makeParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHomePage(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomePage());
}

export default loadHomePage;