const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
];

// function createArticleCard(article) {
//     return `
//         <article class="article-card" id="article-${article.id}">
//             <div class="article-content">
//                 <p class="article-date">${article.date}</p>
//                 <p>${article.description}</p>
//                 <p><strong>Age Group:</strong> ${article.ages}</p>
//                 <p><strong>Genre:</strong> ${article.genre}</p>
//                 <p><strong>Rating:</strong> ${article.stars}</p>
//             </div>
//             <div class="article-image-container">
//                 <img src="${article.imgSrc}" alt="${article.imgAlt}">
//                 <h3>${article.title}</h3>
//             </div>
//         </article>
//     `;
// }

// function displayArticles(articlesToDisplay) {
//     const container = document.getElementById('articles-container');
//     container.innerHTML = articlesToDisplay.map(createArticleCard).join('');
// }

// // Display all articles when the page loads
// document.addEventListener('DOMContentLoaded', () => {
//     displayArticles(articles);
// });
