const MongoLib = require('../lib/mongo');

class MovieService {
    constructor() {
        this.collection = 'movies';
        this.mongoDB = new MongoLib();
    }
    async getMovies( { tags } ) {
        const query = tags && { tags: { $in: tags } };
        const movies = await this.mongoDB.getAll(this.collection, query);
        return movies || [];
    }

    async getMovie({ movieId }) {
        const movie = await this.mongoDB.get(this.collection, movieId);
        return movie || {};
    }

    async createMovie({ movie }) {
        const createMovie = await this.mongoDB.create(this.collection, movie);
        return createMovie || {};
    }

    async updateMovie({ movieId, movie } = {}) {
        const updateMovie = await this.mongoDB.update(
            this.collection, 
            movieId, 
            movie
        );
        return updateMovie || {};
    }

    async deleteMovie({ movieId }) {
        const deleteMovie = await this.mongoDB.delete(this.collection, movieId);
        return deleteMovie || {};
    }
    async patchMovie({ movieId, movie }) {
        const patchedMovie = await this.mongoDB.update(
            this.collection,
            movieId,
            movie
        );
        return patchedMovie || {};
    }
}

module.exports = MovieService;