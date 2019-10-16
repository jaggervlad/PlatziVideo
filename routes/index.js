const express = require('express')
const MovieService = require('../services/movies');
const {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const { 
    FIVE_MINUTES_IN_SECONDS, 
    SIXTY_MINUTES_IN_SECONDS 
} = require('../utils/time');

function moviesApi(app) {
    const router = express.Router();
    app.use("/api/movies", router);

    const movieService = new MovieService();

    // Obtener todas las peliculas por tag
    router.get("/", async function (req, res, next) {
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
        const { tags } = req.query;
        try {
            const movies = await movieService.getMovies({ tags });
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });
        } catch (err) {
            next(err);
        }
    });

    // Obtener una pelicula por id
    router.get("/:movieId", 
    validationHandler({ movieId: movieIdSchema }, 'params'), 
    async function (req, res, next) {
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
        const { movieId } = req.params;
        try {
            const movies = await movieService.getMovie({ movieId });

            res.status(200).json({
                data: movies,
                message: 'movie retrieved'
            });
        } catch (err) {
            next(err);
        }
    });

    // Crear una pelicula
    router.post("/", validationHandler(createMovieSchema), 
    async function (req, res, next) {
        const { body: movie } = req;
        try {
            const createMoviesId = await movieService.createMovie({ movie });

            res.status(200).json({
                data: createMoviesId,
                message: 'movie created'
            });
        } catch (err) {
            next(err);
        }
    });

    // Editar una pelicula
    router.put("/:movieId", 
    validationHandler({ movieId: movieIdSchema }, 'params'), 
    validationHandler(updateMovieSchema), 
    async function (req, res, next) {
        const { body: movie } = req;
        const { movieId } = req.params;
        try {
            const updateMovieId = await movieService.updateMovie({ movieId, movie });

            res.status(200).json({
                data: updateMovieId,
                message: 'movie update'
            });
        } catch (err) {
            next(err);
        }
    });

    // Eliminar una pelicula por id
    router.delete("/:movieId", 
    validationHandler({ movieId: movieIdSchema }, 'params'), 
    async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const deleteMovieId = await movieService.deleteMovie({ movieId });

            res.status(200).json({
                data: deleteMovieId,
                message: 'movie deleted'
            });
        } catch (err) {
            next(err);
        }
    });

    // Editar una pelicula en especifico
    router.patch("/:movieId", 
    validationHandler({ movieId: movieIdSchema }, 'params'), 
    validationHandler(updateMovieSchema), 
    async function (req, res, next) {
        const { body: movie } = req;
        const { movieId } = req.params;
        try {
            const patchMovieId = await movieService.patchMovie({ movieId, movie });

            res.status(200).json({
                data: patchMovieId,
                message: 'movie deleted'
            });
        } catch (err) {
            next(err);
        }
    });
}

module.exports = moviesApi;