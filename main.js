const makeElement = (tagName, className, attributeName, attributeValue, text) => {
    const element = document.createElement(tagName);
    element.classList.add(className);
    if (attributeName) {
        element.setAttribute(attributeName, attributeValue); 
    }

    if (text) {
      element.innerHTML = text;
    }
    return element;
  };


const app = document.getElementById('app');

const header = makeElement('header', 'header');
app.append(header);

const image = document.createElement('img');
image.src = 'logo.png';
image.alt = 'Описание изображения';
header.append(image);

const navigation = document.createElement('nav');
navigation.classList.add('site-navigation');

const navigationList = document.createElement('ul');
navigation.append(navigationList);

const guidesListItem = document.createElement('li');
const guidesListItemLink = document.createElement('a');
guidesListItemLink.innerHTML = 'Guides';
guidesListItemLink.href = '#';
guidesListItem.append(guidesListItemLink);
guidesListItem.classList.add('navigation-item');

const featuresListItem = document.createElement('li');
const featuresListItemLink = document.createElement('a');
featuresListItemLink.innerHTML = 'Features';
featuresListItemLink.href = '#';
featuresListItem.append(featuresListItemLink);
featuresListItem.classList.add('navigation-item');

const pricingListItem = document.createElement('li');
const pricingListItemLink = document.createElement('a');
pricingListItemLink.innerHTML = 'Pricing';
pricingListItemLink.href = '#';
pricingListItem.append(pricingListItemLink);
pricingListItem.classList.add('navigation-item');

const supportListItem = document.createElement('li');
const supportListItemLink = document.createElement('a');
supportListItemLink.innerHTML = 'Support';
supportListItemLink.href = '#';
supportListItem.append(supportListItemLink);
supportListItem.classList.add('navigation-item');

const changelogListItem = document.createElement('li');
const changelogListItemLink = document.createElement('a');
changelogListItemLink.innerHTML = 'Changelog';
changelogListItemLink.href = '#';
changelogListItem.append(changelogListItemLink);
changelogListItem.classList.add('navigation-item');

navigationList.append(guidesListItem, featuresListItem, pricingListItem, pricingListItem, supportListItem, changelogListItem);
navigationList.classList.add('site-navigation');

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');

const signInButton = document.createElement('button');
signInButton.innerHTML = 'Sign in';
signInButton.classList.add('button');

const signUpButton = document.createElement('button');
signUpButton.innerHTML = 'Sign up';
signUpButton.classList.add('button-active');

buttonsContainer.append(signInButton, signUpButton);

const navigationAndButtonsContainer = document.createElement('div');
navigationAndButtonsContainer.classList.add('navigation-buttons-container');

navigationAndButtonsContainer.append(navigation, buttonsContainer);
header.append(navigationAndButtonsContainer);


const main = document.createElement('main');
app.append(main);

const headlineSection = document.createElement('section');
headlineSection.classList.add('headline-section');

const headline = document.createElement('h1');
headline.innerHTML = `Finally, all your team's work in one place`;
headline.classList.add('headline');

const subheadline = document.createElement('h2');
subheadline.innerHTML = `Increase your team's <span>speed, collaboration,</span> and <span>alignment</span> by giving everyone an overview of the most important work happening across your company.`;
subheadline.classList.add('subheadline');

headlineSection.append(headline, subheadline);

const startSection = document.createElement('section');
startSection.classList.add('start-section');

const mainButtonsContainer = document.createElement('div');
mainButtonsContainer.classList.add('main-button-container');

const getStartedButton = document.createElement('button');
getStartedButton.innerHTML = 'Get started for free';
getStartedButton.classList.add('main-start-button');

const watchVideoButton = document.createElement('button');
watchVideoButton.innerHTML = 'Watch video';
watchVideoButton.classList.add('main-watch-button');

const note = document.createElement('div');
note.innerHTML = 'No credit card required';
note.classList.add('start-note');

mainButtonsContainer.append(getStartedButton, watchVideoButton);
mainButtonsContainer.classList.add('main-buttons-container');

startSection.append(mainButtonsContainer, note);

main.append(headlineSection, startSection);
