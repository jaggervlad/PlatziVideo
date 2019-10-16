const moviesMock = [
    {
        "id": "9a1c799b-fcc4-460a-b5a1-61382c058b22",
        "title": "Wrong Cops",
        "year": "CT",
        "cover ": "http://dummyimage.com/174x240.bmp/ff4444/ffffff",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "duration": 49,
        "contentRating": null,
        "source": "https://123-reg.co.uk/rhoncus/sed/vestibulum/sit/amet.json",
        "tags": ["Horror|Sci-Fi|Thriller", "Documentary", "Adventure|Fantasy", "Children|Drama|Mystery"]
    },
    {
        "id": "3ffd8029-98f8-4d62-a57c-8fcb306e5528",
        "title": "Serial (Bad) Weddings (Qu'est-ce Qu'on An Fit Au Bon Dieu?)",
        "year": "Avalon",
        "cover ": "http://dummyimage.com/205x128.png/ff4444/ffffff",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "duration": 11,
        "contentRating": null,
        "source": "http://last.fm/nulla.json",
        "tags": ["Children|Drama", "Documentary", "Drama|War", "Children|Drama", "Comedy"]
    },
    {
        "id": "2b1e98cf-9141-45ad-b318-2a178bb8806c",
        "title": "8 Women",
        "year": "Uplander",
        "cover ": "http://dummyimage.com/168x112.png/5fa2dd/ffffff",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "duration": 6,
        "contentRating": null,
        "source": "http://techcrunch.com/in.jpg",
        "tags": ["Drama"]
    },
    {
        "id": "cfc5788f-5df0-4973-9db5-7fc483f95d8f",
        "title": "Amazon Jack 2: The Movie Star (a.k.a. Hugo the Movie Star) (Jungledyret 2 - den store filmhelt)",
        "year": "Aurora", "cover ": "http://dummyimage.com/227x179.jpg/dddddd/000000",
        "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "duration": 95,
        "contentRating": null,
        "source": "http://phoca.cz/porttitor/pede/justo/eu.png",
        "tags": ["Drama|Romance", "Comedy|Drama", "Comedy|Sci-Fi"]
    },
    {
        "id": "f8e3c569-84a7-4756-9622-43800a50ec83",
        "title": "Sexual Life", "year": "Xterra", "cover ": "http://dummyimage.com/248x210.png/cc0000/ffffff",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, ch.",
        "duration": 60,
        "contentRating": null,
        "source": "http://netvibes.com/venenatis.jpg",
        "tags": ["Romance", "Comedy", "Action|Adventure|Fantasy"]
    },
    {
        "id": "378849b1-2c1a-4e24-9a27-7da64e0474fa",
        "title": "Wild Animals (Yasaeng dongmul bohoguyeog)",
        "year": "Express 2500",
        "cover ": "http://dummyimage.com/112x110.png/cc0000/ffffff",
        "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. ",
        "duration": 83,
        "contentRating": null,
        "source": "http://amazon.co.uk/enim/leo.png",
        "tags": ["Mystery", "Action|Thriller", "Adventure|Comedy", "Comedy|Crime|Drama"]
    },
    {
        "id": "d66ead74-76e3-41ef-961d-e4218ff108ac",
        "title": "The Reverse",
        "year": "88",
        "cover ": "http://dummyimage.com/246x187.jpg/ff4444/ffffff",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc pur",
        "duration": 95,
        "contentRating": null,
        "source": "http://paypal.com/mi/pede/malesuada.jpg",
        "tags": ["Crime|Drama|Thriller"]
    },
    {
        "id": "6afce854-b016-4fa3-b634-3a2304d2a2e5",
        "title": "Play Motel",
        "year": "Corolla",
        "cover ": "http://dummyimage.com/180x238.jpg/dddddd/000000",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "duration": 75,
        "contentRating": null,
        "source": "http://jiathis.com/ante/ipsum.html",
        "tags": ["Comedy", "Drama|Romance|War", "Action|Adventure|Sci-Fi|Thriller"]
    },
    {
        "id": "c1760447-cd29-483f-862e-e7be50a3c35c",
        "title": "Copycat",
        "year": "Chariot",
        "cover ": "http://dummyimage.com/141x111.jpg/ff4444/ffffff",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adae, nisl.",
        "duration": 61,
        "contentRating": null,
        "source": "http://rediff.com/quam/nec/dui.xml",
        "tags": ["Romance|Thriller", "Crime|Drama"]
    },
    {
        "id": "a350d5f9-de0f-44ec-9c64-70a527733416",
        "title": "Mirrors 2",
        "year": "CL-Class",
        "cover ": "http://dummyimage.com/135x205.jpg/5fa2dd/ffffff",
        "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit ametg elit.",
        "duration": 45,
        "contentRating": null,
        "source": "https://craigslist.org/pede/lobortis/ligula/sit.html",
        "tags": ["Adventure|Drama", "Comedy|Drama", "Comedy|Drama", "Comedy"]
    }
];

function filteredMoviesMock(tag) {
    return moviesMock.filter(movie =>  movie.tags.includes(tag));
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }

    async creteMovie() {
        return Promise.resolve(moviesMock[0]);
    }
}



module.exports =
    {
        moviesMock,
        filteredMoviesMock,
        MoviesServiceMock
    }