const app = document.getElementById('app');

const makeElement = (tag, attributes, text) => {
  const element = document.createElement(tag);

  attributes && Object.keys(attributes).forEach(key => {
     element.setAttribute(key, attributes[key]);
  });
  
  if (text) {
    element.innerHTML = text;
  }
  return element;
};

const header = makeElement('header');
app.append(header);

const image = makeElement('img', {'src': 'logo.png', 'alt': 'Логотип'});
header.append(image);
console.log(header);

const navigation = makeElement('nav');
const navigationList = makeElement('ul', {'class': 'site-navigation'}); 
navigation.append(navigationList);

const guidesListItem = makeElement('li', {'class': 'navigation-item'});
const guidesListItemLink = makeElement('a', {'href': '#'}, 'Guides');
guidesListItem.append(guidesListItemLink);


const featuresListItem = makeElement('li', {'class': 'navigation-item'});
const featuresListItemLink = makeElement('a', {'href': '#'}, 'Features');
featuresListItem.append(featuresListItemLink);

const pricingListItem = makeElement('li', {'class': 'navigation-item'});
const pricingListItemLink = makeElement('a', {'href': '#'}, 'Pricing');
pricingListItem.append(pricingListItemLink);

const supportListItem = makeElement('li', {'class': 'navigation-item'});
const supportListItemLink = makeElement('a', {'href': '#'}, 'Support');
supportListItem.append(supportListItemLink);

const changelogListItem = makeElement('li', {'class': 'navigation-item'});
const changelogListItemLink = makeElement('a', {'href': '#'}, 'Changelog');
changelogListItem.append(changelogListItemLink);

navigationList.append(guidesListItem, featuresListItem, pricingListItem, pricingListItem, supportListItem, changelogListItem);

const buttonsContainer = makeElement('div', {'class': 'buttons-container'});

const signInButton = makeElement('button', {'class': 'button'}, 'Sign in');
const signUpButton = makeElement('button', {'class': 'button-active'}, 'Sign up');
buttonsContainer.append(signInButton, signUpButton);

const navigationAndButtonsContainer = makeElement('div', {'class': 'navigation-buttons-container'});

navigationAndButtonsContainer.append(navigation, buttonsContainer);
header.append(navigationAndButtonsContainer);

const main = makeElement('main');
app.append(main);

const headlineSection = makeElement('section', {'class': 'headline-section'});

const headline = makeElement('h1', {'class': 'headline'}, `Finally, all your team's work in one place`);
const subheadline = makeElement('h2', {'class': 'subheadline'}, `Increase your team's <span>speed, collaboration,</span> and <span>alignment</span> by giving everyone an overview of the most important work happening across your company.`);

headlineSection.append(headline, subheadline);

const startSection = makeElement('section', {'class': 'start-section'});

const mainButtonsContainer = makeElement('div', {'class': 'main-button-container'});

const getStartedButton = makeElement('button', {'class': 'main-start-button'}, 'Get started for free');

const watchVideoButton = makeElement('button', {'class': 'main-watch-button'}, 'Watch video');

const note = makeElement('div', {'class': 'start-note'}, 'No credit card required');

mainButtonsContainer.append(getStartedButton, watchVideoButton);

startSection.append(mainButtonsContainer, note);

main.append(headlineSection, startSection);
 