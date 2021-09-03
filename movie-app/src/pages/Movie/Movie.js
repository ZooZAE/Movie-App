import React from 'react';
import { connect } from 'react-redux';
import "./Movie.css";

const Movie = ({movie}) => {
    
    const {
        Poster, 
        Title, 
        Year, 
        Actors, 
        Awards, 
        BoxOffice, 
        Country, 
        DVD, 
        Director, 
        Genre, 
        Language,
        Metascore,
        Plot,
        Production,
        Rated,
        Ratings,
        Released,
        Response,
        Runtime,
        Type,
        Website,
        Writer,
        imdbID,
        imdbRating,
        imdbVotes
    } = movie.data;

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5 text-center">
                    <h2>Movie Details</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mt-5">
                    {Poster !== "N/A" ? <img className="card-img-top poster" src={Poster} alt="Movie Poster"/> : <img className="card-img-top poster" src="https://picsum.photos/id/237/200/300" alt="Movie Poster"/>}
                </div>
                <div className="col-12 col-md-6 mt-5 information">
                    {Title ? 
                        <div>
                            <h5 className="titles">Title:</h5>
                            <p className="info">{Title}</p>
                        </div>
                        : 
                        ''
                    }
                    {Year ? 
                        <div>
                            <h5 className="titles">Year:</h5>
                            <p className="info">{Year}</p>
                        </div>
                        : 
                        ''
                    }
                    {Actors ? 
                        <div>
                            <h5 className="titles">Actors:</h5>
                            <p className="info">{Actors}</p>
                        </div>
                        : 
                        ''
                    }
                    {BoxOffice ? 
                        <div>
                            <h5 className="titles">BoxOffice:</h5>
                            <p className="info">{BoxOffice}</p>
                        </div>
                        : 
                        ''
                    }
                    {Awards ? 
                        <div>
                            <h5 className="titles">Awards:</h5>
                            <p className="info">{Awards}</p>
                        </div>
                        : 
                        ''
                    }
                    {Country ? 
                        <div>
                            <h5 className="titles">Country:</h5>
                            <p className="info">{Country}</p>
                        </div>
                        : 
                        ''
                    }
                    {DVD ? 
                        <div>
                            <h5 className="titles">DVD:</h5>
                            <p className="info">{DVD}</p>
                        </div>
                        : 
                        ''
                    }
                    {Director ? 
                        <div>
                            <h5 className="titles">Director:</h5>
                            <p className="info">{Director}</p>
                        </div>
                        : 
                        ''
                    }
                    {Genre ? 
                        <div>
                            <h5 className="titles">Genre:</h5>
                            <p className="info">{Genre}</p>
                        </div>
                        : 
                        ''
                    }
                    {Language ? 
                        <div>
                            <h5 className="titles">Language:</h5>
                            <p className="info">{Language}</p>
                        </div>
                        : 
                        ''
                    }
                    {Metascore ? 
                        <div>
                            <h5 className="titles">Metascore:</h5>
                            <p className="info">{Metascore}</p>
                        </div>
                        : 
                        ''
                    }
                    {Plot ? 
                        <div>
                            <h5 className="titles">Plot:</h5>
                            <p className="info">{Plot}</p>
                        </div>
                        : 
                        ''
                    }
                    {Production ? 
                        <div>
                            <h5 className="titles">Production:</h5>
                            <p className="info">{Production}</p>
                        </div>
                        : 
                        ''
                    }
                    {Rated ? 
                        <div>
                            <h5 className="titles">Rated:</h5>
                            <p className="info">{Rated}</p>
                        </div>
                        : 
                        ''
                    }
                    {Ratings ? 
                        <div>
                            <h5 className="titles">Ratings:</h5>
                            <p className="info">{Ratings.length}</p>
                        </div>
                        : 
                        ''
                    }
                    {Released ? 
                        <div>
                            <h5 className="titles">Released:</h5>
                            <p className="info">{Released}</p>
                        </div>
                        : 
                        ''
                    }
                    {Response ? 
                        <div>
                            <h5 className="titles">Response:</h5>
                            <p className="info">{Response}</p>
                        </div>
                        : 
                        ''
                    }
                    {Runtime ? 
                        <div>
                            <h5 className="titles">Runtime:</h5>
                            <p className="info">{Runtime}</p>
                        </div>
                        : 
                        ''
                    }
                    {Website ? 
                        <div>
                            <h5 className="titles">Website:</h5>
                            <p className="info">{Website}</p>
                        </div>
                        : 
                        ''
                    }
                    {Type ? 
                        <div>
                            <h5 className="titles">Type:</h5>
                            <p className="info">{Type}</p>
                        </div>
                        : 
                        ''
                    }
                    {Writer ? 
                        <div>
                            <h5 className="titles">Writer:</h5>
                            <p className="info">{Writer}</p>
                        </div>
                        : 
                        ''
                    }
                    {imdbID ? 
                        <div>
                            <h5 className="titles">imdbID:</h5>
                            <p className="info">{imdbID}</p>
                        </div>
                        : 
                        ''
                    }
                    {imdbRating ? 
                        <div>
                            <h5 className="titles">imdbRating:</h5>
                            <p className="info">{imdbRating}</p>
                        </div>
                        : 
                        ''
                    }
                    {imdbVotes ? 
                        <div>
                            <h5 className="titles">imdbVotes:</h5>
                            <p className="info">{imdbVotes}</p>
                        </div>
                        : 
                        ''
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps)(Movie);