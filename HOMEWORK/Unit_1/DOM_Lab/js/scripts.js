const data = [
	{
		body: "Fugit itaque ipsam perferendis sequi harum.",
		category: "Unknown generator",
		cover: "https://picsum.photos/seed/2327/1920/1080",
		createdAt: "2015-05-18T20:48:08Z",
		id: 1,
		isDraft: false,
		title: "dolorum",
		views: 223,
        authorAvatar: "https://i.pravatar.cc/200?img=1",
        authorName: "Emily Smith"
	},
	{
		body: "Eos culpa et voluptatem.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/0316/1920/1080",
		createdAt: "2018-08-15T19:55:08Z",
		id: 2,
		isDraft: false,
		title: "perspiciatis rerum",
		views: 403,
        authorAvatar: "https://i.pravatar.cc/200?img=3",
        authorName: "Benjamin Johnson"
	},
	{
		body: "Illo saepe consequuntur a libero deserunt a eos, perferendis sint, accusantium qui dolorum sed at.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/4326/1920/1080",
		createdAt: "2016-06-12T00:16:07Z",
		id: 3,
		isDraft: false,
		title: "molestiae odio nisi",
		views: 994,
        authorAvatar: "https://i.pravatar.cc/200?img=5",
        authorName: "Emily Smith"
	},
	{
		body: "Unde veniam.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/4729/1920/1080",
		createdAt: "2010-06-19T16:41:51Z",
		id: 4,
		isDraft: false,
		title: "cumque est",
		views: 178,
        authorAvatar: "https://i.pravatar.cc/200?img=6",
        authorName: "Benjamin Johnson"
	},
	{
		body: "Debitis et neque facilis magnam.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/8392/1920/1080",
		createdAt: "2016-04-19T19:44:19Z",
		id: 5,
		isDraft: false,
		title: "ad impedit sunt",
		views: 733,
        authorAvatar: "https://i.pravatar.cc/200?img=7",
        authorName: "Emily Smith"
	},
	{
		body: "Error nisi deserunt consectetur ea a.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/9839/1920/1080",
		createdAt: "2012-11-14T20:24:23Z",
		id: 6,
		isDraft: false,
		title: "molestias",
		views: 151,
        authorAvatar: "https://i.pravatar.cc/200?img=8",
        authorName: "Benjamin Johnson"
	},
	{
		body: "Mollitia doloribus a reprehenderit vitae, incidunt incidunt.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/2230/1920/1080",
		createdAt: "2015-10-05T17:56:52Z",
		id: 7,
		isDraft: false,
		title: "dolore",
		views: 129,
        authorAvatar: "https://i.pravatar.cc/200?img=39",
        authorName: "Sarah Davis"
	},
	{
		body: "Reprehenderit et, asperiores sed reprehenderit nisi, architecto a reprehenderit ipsa.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/9417/1920/1080",
		createdAt: "2012-01-16T01:37:42Z",
		id: 8,
		isDraft: false,
		title: "labore quae nostrum",
		views: 757,
        authorAvatar: "https://i.pravatar.cc/200?img=48",
        authorName: "Sarah Davis"
	},
	{
		body: "Perspiciatis minima sit.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/8842/1920/1080",
		createdAt: "2013-06-23T14:40:58Z",
		id: 9,
		isDraft: false,
		title: "inventore",
		views: 448,
        authorAvatar: "https://i.pravatar.cc/200?img=55",
        authorName: "Emily Smith"
	},
	{
		body: "Dolore perferendis deleniti ab, in molestiae quia, autem perspiciatis aliquam corrupti.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/5668/1920/1080",
		createdAt: "2017-09-25T10:48:38Z",
		id: 10,
		isDraft: false,
		title: "a vel laborum non a",
		views: 719,
        authorAvatar: "https://i.pravatar.cc/200?img=69",
        authorName: "Sarah Davis"
	}
]

function createCard(arr) {
	arr.forEach(element => {

		const cardSize = document.createElement('div')
		cardSize.className = 'col-lg-4', 'col-md-6', 'col-sm-12'
		
		const card = document.createElement('div')
		card.className = 'card-body'

		const image = document.createElement('img')
		image.className = 'card-img-top'
		image.setAttribute('src', element.cover)
		image.setAttribute('alt', element.title)

		const title = document.createElement('h3')
		title.className = 'card-title'
		title.innerText = element.title

		const cardText = document.createElement('p')
		cardText.className = 'card-text'
		cardText.innerText = element.body

		const button = document.createElement('a')
		button.className = 'btn', 'btn-primary'
		button.setAttribute('href', '#')
		button.innerText = 'Read More >>'

		card.appendChild(image)
		card.appendChild(title)
		card.appendChild(cardText)
		card.appendChild(button)
		card.appendChild(cardSize)

		document.body.appendChild(card)
	}
		)
}

createCard(data)