function createServiceMenu() {
    const serviceMenu = document.createElement('div');
    serviceMenu.classList.add('service-menu');

    serviceMenu.appendChild(
        createServiceItem(
            "Swedish Massage",
            "A relaxing massage featuring lighter flowing strokes."
        )
    );
    serviceMenu.appendChild(
        createServiceItem(
            "Deep Therapy Massage",
            "Medium to firm massage utilizing warm oil and hands-on techniques."
        )
    );
    serviceMenu.appendChild(
        createServiceItem(
            "Rejuvenating Body scrub",
            "A gentler exfoliant for sensitive and all skin types, conditions and moisturizes and helps to remove toxins."
        )
    );
    serviceMenu.appendChild(
        createServiceItem(
            "Hot Stone Treatment",
            "Relaxing massage using warm stones and hands-on techniques."
        )
    );
    serviceMenu.appendChild(
        createServiceItem(
            "Signature Facial",
            "Awaken your skin with a comprehensive facial customized for your skin type."
        )
    );
    serviceMenu.appendChild(
        createServiceItem(
            "Premium Facial",
            "Find ultimate luxury with our Premiere Facial that includes deep exfoliants."
        )
    );

    return serviceMenu;
}

function createServiceItem(name, description){
    const serviceItem = document.createElement('div');
    serviceItem.classList.add('service-item');

    const serviceName = document.createElement('h2');
    serviceName.textContent = name;

    const serviceDescription = document.createElement('p');
    serviceDescription.textContent = description;

    const serviceImg = document.createElement('img');
    serviceImg.src = `../dist/images-vids/${name.replaceAll(' ', '-').toLowerCase()}.png`;
    serviceImg.alt = `${name}`;

    serviceItem.appendChild(serviceImg);
    serviceItem.appendChild(serviceName);
    serviceItem.appendChild(serviceDescription);

    return serviceItem;

}

function loadServiceMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createServiceMenu());
}

export default loadServiceMenu;