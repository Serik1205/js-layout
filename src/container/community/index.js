const page = document.createElement('div');
page.className = 'page';

const header = document.createElement('header');
header.className = 'header';

const backButton = createButton('/svg/header__back.svg');
const avatarButton = createButton('/img/header__avatar.png');

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Коммьюніті';

const tabs = document.createElement('div');
tabs.className = 'tabs';

const knowledgeTab = createTab('База знань', 'knowledgeTab');
const informationTab = createTab('Інформація', 'informationTab');
informationTab.classList.add('tab__active');

const mainContent = document.createElement('main');
mainContent.className = 'post__list';

const image = createImage('/img/community.png', 343, 160);
const postTitle = createTitle('Що таке база знань?');
const postInfo = createParagraph('База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях некоторой предметной области.В самообучающихся системах база знаний также содержит информацию,являющуюся результатом решения предыдущих задач');

const communityButton = createButton('Перейти до коммьюніті у Телеграм');
communityButton.classList.add('button__com');


header.appendChild(backButton);
header.appendChild(avatarButton);

tabs.appendChild(knowledgeTab);
tabs.appendChild(informationTab);

mainContent.appendChild(image);
mainContent.appendChild(postTitle);
mainContent.appendChild(postInfo);
mainContent.appendChild(communityButton);

page.appendChild(header);
page.appendChild(title);
page.appendChild(tabs);
page.appendChild(mainContent);

document.body.appendChild(page);


function createButton(imageSrc) {
	const button = document.createElement('button');
	const img = document.createElement('img');
	img.src = imageSrc;
	img.width = 24;
	img.height = 24;
	button.appendChild(img);
	button.className = 'button';
	return button;
}

function createTab(text, id) {
	const tab = document.createElement('div');
	tab.textContent = text;
	tab.id = id;
	tab.className = 'tab';
	return tab;
}

function createImage(src, width, height) {
	const img = document.createElement('img');
	img.src = src;
	img.width = width;
	img.height = height;
	return img;
}

function createTitle(text) {
	const title = document.createElement('h2');
	title.textContent = text;
	title.className = 'title';
	return title;
}

function createParagraph(text) {
	const paragraph = document.createElement('p');
	paragraph.textContent = text;
	paragraph.className = 'post__info';
	return paragraph;
}
