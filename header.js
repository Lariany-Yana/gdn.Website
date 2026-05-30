const headerTemplate = `
	<nav class="ecosys">
		<a href="main.html">Главная</a>
		<a href="titles.html">Тайтлы</a>
		<a href="orders.html">Заказы</a>
	</nav>

	<nav class="search-header">
		<a class="header-icon stream" href="https://www.twitch.tv/godenname" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill-rule="evenodd"><path d="m38.785 93.605v-2.8945h-5.7891v-5.7891h-5.7891v-5.7891h-5.7891v-11.586h-5.7891v-5.7891h-5.7891v-5.7891h-5.7891l-0.015625-11.594v-11.582h5.7891v-5.7891h5.7891l0.003907-5.793v-5.793h5.7891v-5.7891h5.7891v-5.7891h46.336v5.7891h5.7891v5.7891h5.7891v11.586h5.7891v5.7891h5.7891v23.164h-5.7891v5.7891h-5.7891v5.7891h-5.7891v11.586h-5.7891v5.7891h-5.7891v5.7891h-5.7891v5.7891h-23.164zm17.375-11.582v-2.8945h5.7891v-5.7891h-5.7891v5.7891h-11.586v-5.7891h-5.7891v5.7891h5.7891v5.7891h11.586zm-17.375-23.168v-2.8945h5.7891v-17.375h-5.7891v-5.7891h-5.7891v-5.7891h-11.586v5.7891h-5.7891v17.375h5.7891v5.7891h5.7891v5.7891h11.586zm-5.793-17.375v-2.8945h-5.7891v-5.7891h5.7891v5.7891h5.7891v5.7891h-5.7891zm40.543 17.375v-2.8945h5.7891v-5.7891h5.7891l0.007813-2.8984v-2.8984h-5.7891v-5.7891h5.7891v-5.7891h-5.7891v-5.7891h-11.586v5.7891h-5.7891v5.7891h-5.7891v17.375h5.7891v5.7891h11.586zm0-23.168v-2.8945h5.7891v5.7891h-5.7891z"></path></svg></a>
		<div class="header-icon liked" onclick="godenEngine.openStaticPopup('Favorites')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill-rule="evenodd"><path d="m86.82 25.449v-8.1797h-8.1797v-8.1797h-16.371v8.1797h-8.1797v8.1797h-8.1797v-8.1797h-8.1797v-8.1797h-16.371v8.1797h-8.1797v8.1797h-8.1797v24.551h8.1797v8.1797h8.1797v8.1797h8.1914v8.1914h8.1797v8.1797h8.1797v8.1797h8.1797v-8.1797h8.1797v-8.1797h8.1797v-8.1914h8.1914v-8.1797h8.1797v-8.1797h8.1797v-24.551z"></path></svg> </div>
		<input type="text" id="searchInput" placeholder="" maxlength="15">
	</nav>
	
	<template id="content-search">
		<button class="popup-exit"></button>
		<div class="results-container"></div>
	</template>

	<template id="popup-base-template">
		<div class="popup-overlay">
			<article class="popup"></article>
		</div>
	</template>

	<template id="Favorites">
		<button class="popup-exit"></button>
		<div class="results-container"></div>
	</template>
`;

// Вставляем шаблон в начало body
document.body.insertAdjacentHTML("afterbegin", headerTemplate);
