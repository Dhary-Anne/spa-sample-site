function makeContactPage(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 123 456 7890';

    const address = document.createElement('p');
    address.textContent = '📍 123 Serenity Street, Miami, FL, USA';

    const spaLocation = document.createElement('img');
    spaLocation.src = '/images-vids/map.png';
    spaLocation.alt = 'Oasis Spa location';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(spaLocation);
    
    return contact;

}
function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(makeContactPage());
}

export default loadContact;