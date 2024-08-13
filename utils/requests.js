const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchDramaMovies: {
        title: "Drama",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchSciFiMovies: {
        title: "Science Fiction",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchDocumentaries: {
        title: "Documentaries",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
    fetchFamilyMovies: {
        title: "Family",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    },
    fetchMysteryMovies: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchAnimationMovies: {
        title: "Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchWesternMovies: {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
};
