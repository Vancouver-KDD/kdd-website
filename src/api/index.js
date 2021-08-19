/**
 * @param  {String=} {startHash} use this one to query more photos
 * @param  {Number} [limit=30] number of photos to fetch
 * @returns {Promise} a promise that resolves to array of photos
 */
export async function getPhotos({startHash, limit = 30} = {}) {
    // Artifitial 1 second delay
    await new Promise((r) => setTimeout(r, 1000))
    return mockPhotos
}

const mockPhotos = [
    {
        id: 1,
        image_url: 'temp_photo1.png',
        description:
            'If you spend a lot of time doing front-end development, you know how big the the world of HTML, CSS and JavaScript are.',
        uploader_name: 'John Doe',
        create_at: '2021-08-31',
        page: 0,
    },
    {
        id: 2,
        image_url: 'temp_photo2.png',
        description:
            'I came up with this list of topics after chatting with several different front-end developers over the past nine months.',
        uploader_name: 'John Doe',
        create_at: '2021-08-31',
        page: 0,
    },
    {
        id: 3,
        image_url:
            'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA1NzE5MQ&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'Some of the topics also came from my own experiences working as a full-time front-end engineer for the past three years.',
        uploader_name: 'John Doe',
        create_at: '2021-08-31',
        page: 0,
    },
    {
        id: 4,
        image_url:
            'https://images.unsplash.com/photo-1627821001591-0d30fae72172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5MDYwNw&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'Some of the topics also came from my own experiences working as a full-time front-end engineer for the past three years.',
        uploader_name: 'John Doe',
        create_at: '2021-08-31',
        page: 0,
    },
    {
        id: 5,
        image_url:
            'https://images.unsplash.com/photo-1628226881737-2f1ea4f1afca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5MDYzNQ&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'The list (written in no particular order) may feel a bit intimidating now, but I am remaining optimistic about being able to continually grow my knowledge about each of these topics and hopefully commit them to memory as I use them in the wild.',
        uploader_name: 'John Doe',
        create_at: '2021-08-31',
        page: 0,
    },
    {
        id: 6,
        image_url:
            'https://images.unsplash.com/photo-1627799650028-1c5d4f4d1231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5MDYzNw&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'A component to make all your infinite scrolling woes go away with just 4.15 kB! ',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-07-13',
        page: 0,
    },
    {
        id: 7,
        image_url:
            'https://images.unsplash.com/photo-1628927471094-d724f0479b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA1NzE5MQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'Pull Down to Refresh feature added. An infinite-scroll that actually works and super-simple to integrate!',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-07-13',
        page: 0,
    },
    {
        id: 8,
        image_url:
            'https://images.unsplash.com/photo-1628128525340-762c2a476121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5MDYzMw&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'Specify a value for the height prop if you want your scrollable content to have a specific height, providing scrollbars for scrolling your content and fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-07-13',
        page: 0,
    },
    {
        id: 9,
        image_url:
            'https://images.unsplash.com/photo-1627544466641-7ae53ab1855f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5MDYzOA&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'If your scrollable content is being rendered within a parent element that is already providing overflow scrollbars, you can set the scrollableTarget prop to reference the DOM element and use its scrollbars for fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-07-13',
        page: 0,
    },
    {
        id: 10,
        image_url:
            'https://images.unsplash.com/photo-1628008630683-fb2a5c6d94fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODA1OQ&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'Without setting either the height or scrollableTarget props, the scroll will happen at document.body like Facebooks timeline scroll.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-07-13',
        page: 0,
    },
    {
        id: 11,
        image_url:
            'https://images.unsplash.com/photo-1628776373500-23fb2f877dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyMQ&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'If your scrollable content is being rendered within a parent element that is already providing overflow scrollbars, you can set the scrollableTarget prop to reference the DOM element and use its scrollbars for fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-07-13',
        page: 1,
    },
    {
        id: 12,
        image_url:
            'https://images.unsplash.com/photo-1626535953345-aa430e121ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyMw&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'If your scrollable content is being rendered within a parent element that is already providing overflow scrollbars, you can set the scrollableTarget prop to reference the DOM element and use its scrollbars for fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-07-13',
        page: 1,
    },
    {
        id: 13,
        image_url:
            'https://images.unsplash.com/photo-1627680342897-f43bfc0b6572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyMw&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'If your scrollable content is being rendered within a parent element that is already providing overflow scrollbars, you can set the scrollableTarget prop to reference the DOM element and use its scrollbars for fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-07-13',
        page: 1,
    },
    {
        id: 14,
        image_url:
            'https://images.unsplash.com/photo-1627940180241-0f6d1ab48a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyNQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'A component to make all your infinite scrolling woes go away with just 4.15 kB! ',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-07-13',
        page: 1,
    },
    {
        id: 15,
        image_url:
            'https://images.unsplash.com/photo-1626736483835-cbd9a4d5a293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyNQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'Pull Down to Refresh feature added. An infinite-scroll that actually works and super-simple to integrate!',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-07-13',
        page: 1,
    },
    {
        id: 16,
        image_url:
            'https://images.unsplash.com/photo-1627120893491-81b8a4fa4f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyNw&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'Specify a value for the height prop if you want your scrollable content to have a specific height, providing scrollbars for scrolling your content and fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-07-13',
        page: 1,
    },
    {
        id: 17,
        image_url:
            'https://images.unsplash.com/photo-1628927471094-d724f0479b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA1NzE5MQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'Pull Down to Refresh feature added. An infinite-scroll that actually works and super-simple to integrate!',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-06-13',
        page: 1,
    },
    {
        id: 18,
        image_url:
            'https://images.unsplash.com/photo-1628128525340-762c2a476121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5MDYzMw&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'Specify a value for the height prop if you want your scrollable content to have a specific height, providing scrollbars for scrolling your content and fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-06-13',
        page: 1,
    },
    {
        id: 19,
        image_url:
            'https://images.unsplash.com/photo-1627544466641-7ae53ab1855f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5MDYzOA&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'If your scrollable content is being rendered within a parent element that is already providing overflow scrollbars, you can set the scrollableTarget prop to reference the DOM element and use its scrollbars for fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-06-13',
        page: 1,
    },
    {
        id: 20,
        image_url:
            'https://images.unsplash.com/photo-1628008630683-fb2a5c6d94fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODA1OQ&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'Without setting either the height or scrollableTarget props, the scroll will happen at document.body like Facebooks timeline scroll.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-06-13',
        page: 1,
    },
    {
        id: 21,
        image_url:
            'https://images.unsplash.com/photo-1628776373500-23fb2f877dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyMQ&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'If your scrollable content is being rendered within a parent element that is already providing overflow scrollbars, you can set the scrollableTarget prop to reference the DOM element and use its scrollbars for fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-05-13',
        page: 2,
    },
    {
        id: 22,
        image_url:
            'https://images.unsplash.com/photo-1626535953345-aa430e121ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyMw&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'If your scrollable content is being rendered within a parent element that is already providing overflow scrollbars, you can set the scrollableTarget prop to reference the DOM element and use its scrollbars for fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-05-13',
        page: 2,
    },
    {
        id: 23,
        image_url:
            'https://images.unsplash.com/photo-1627680342897-f43bfc0b6572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyMw&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'If your scrollable content is being rendered within a parent element that is already providing overflow scrollbars, you can set the scrollableTarget prop to reference the DOM element and use its scrollbars for fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-05-13',
        page: 2,
    },
    {
        id: 24,
        image_url:
            'https://images.unsplash.com/photo-1627940180241-0f6d1ab48a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyNQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'A component to make all your infinite scrolling woes go away with just 4.15 kB! ',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-05-13',
        page: 2,
    },
    {
        id: 25,
        image_url:
            'https://images.unsplash.com/photo-1626736483835-cbd9a4d5a293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyNQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'Pull Down to Refresh feature added. An infinite-scroll that actually works and super-simple to integrate!',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-05-13',
        page: 2,
    },
    {
        id: 26,
        image_url:
            'https://images.unsplash.com/photo-1627120893491-81b8a4fa4f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5ODEyNw&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'Specify a value for the height prop if you want your scrollable content to have a specific height, providing scrollbars for scrolling your content and fetching more data.',
        uploader_name: 'Ankeet Maini',
        create_at: '2021-05-13',
        page: 2,
    },
    {
        id: 27,
        image_url: 'temp_photo1.png',
        description:
            'If you spend a lot of time doing front-end development, you know how big the the world of HTML, CSS and JavaScript are.',
        uploader_name: 'John Doe',
        create_at: '2021-05-13',
        page: 2,
    },
    {
        id: 28,
        image_url: 'temp_photo2.png',
        description:
            'I came up with this list of topics after chatting with several different front-end developers over the past nine months.',
        uploader_name: 'John Doe',
        create_at: '2021-05-13',
        page: 2,
    },
    {
        id: 29,
        image_url:
            'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA1NzE5MQ&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'Some of the topics also came from my own experiences working as a full-time front-end engineer for the past three years.',
        uploader_name: 'John Doe',
        create_at: '2021-05-13',
        page: 2,
    },
    {
        id: 30,
        image_url:
            'https://images.unsplash.com/photo-1627821001591-0d30fae72172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDMyM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTA5MDYwNw&ixlib=rb-1.2.1&q=80&w=1080',
        description:
            'Some of the topics also came from my own experiences working as a full-time front-end engineer for the past three years.',
        uploader_name: 'John Doe',
        create_at: '2021-05-13',
        page: 2,
    },
]
