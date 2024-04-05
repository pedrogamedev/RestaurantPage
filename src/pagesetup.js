const pageContent = document.getElementById('content');

// Home

export function setHome ()
{
    cleanPage();
    const homeParagraph = document.createElement('p');
    homeParagraph.innerText = "Welcome to my website, created using WebPacks, it also implements most of the DOM elements using JS!";
    pageContent.appendChild(homeParagraph);
}

// Menu

export function setMenu ()
{
    cleanPage();
    const menuParagraph = document.createElement('p');
    menuParagraph.innerText = "Lets pretend there is a menu here with restaurant itens";
    pageContent.appendChild(menuParagraph);
}

// About Us

export function setAboutUs ()
{
    cleanPage();
    const aboutUsParagraph = document.createElement('p');
    aboutUsParagraph.innerText = "Well there is not 'us' in here since I created this project alone. Anyway, time to promote myself:";
    const aboutUsGithubLink = document.createElement('a');
    aboutUsGithubLink.innerText = "Please give me a job";
    aboutUsGithubLink.setAttribute('href', 'https://github.com/pedrogamedev');

    pageContent.appendChild(aboutUsParagraph);
    pageContent.appendChild(aboutUsGithubLink);
}

// Clean Page Content

export function cleanPage ()
{
    while(pageContent.firstChild)
    {
        pageContent.removeChild(pageContent.lastChild);
    }
}