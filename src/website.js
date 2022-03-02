import loadHomePage from "./home";
import loadServiceMenu from "./services";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const spaName = document.createElement("h1");
    spaName.classList.add('spa-name');
    spaName.textContent = "Oasis Spa"

    header.appendChild(spaName);
    header.appendChild(createNavBar());

    return header;
}

function createNavBar() {
    const nav = document.createElement("nav");

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('button-nav');
    homeBtn.setAttribute('id', 'home-btn');
    homeBtn.textContent = "Home";
    homeBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(homeBtn);
        loadHomePage();
    });

    const servicesBtn = document.createElement('button');
    servicesBtn.classList.add('button-nav');
    servicesBtn.setAttribute('id', 'services-btn')
    servicesBtn.textContent = 'Services';
    servicesBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return
        setActiveButton(servicesBtn);
        loadServiceMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('button-nav');
    contactBtn.setAttribute('id', 'contact-btn');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return
        setActiveButton(contactBtn);
        loadContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(servicesBtn);
    nav.appendChild(contactBtn);

    return nav;
    
}

function setActiveButton(button){
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) =>{
        if(button != this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active')
}


function makeMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function makeFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const gitHubLink = document.createElement('a');
    gitHubLink.href = "https://github.com/Dhary-Anne";

    const gitHubIcon = document.createElement('i');
    gitHubIcon.classList.add('github-icon');
    gitHubIcon.classList.add('fa-github');

    gitHubLink.appendChild(gitHubIcon);
    footer.appendChild(gitHubLink);

    return footer;
}

function openWebpage(){
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(makeMain());
    content.appendChild(makeFooter());

    setActiveButton(document.querySelector('.button-nav'));
    loadHomePage();

}

export default openWebpage;