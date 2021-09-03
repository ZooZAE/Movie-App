import React, { useState } from 'react';
import "./Listing.css";
import { connect } from "react-redux";
import { getMovieTitle, getMovieYear } from '../../actions';
import { GIVE_ACCESS } from '../../constants';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';

const Listing = ({movie, access, dispatch}) => {
    
    //history is a constant to have access to the location on which client is on
    const history = useHistory();

    // This year gets the year we are in
    const thisYear = (new Date()).getFullYear();
    
    //Search state that saves the title and the year chosen by the user
    const [search, setSearch] = useState({
        title: "",
        year: ""
    });

    //use effect works when the page mounts and checks if there is access to another page
    useEffect(() => {
        if(access ===  true) {
            dispatch({type: GIVE_ACCESS})
        }
    })

    //handle change changes values of the state when user changes title and year value
    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    //handle submit prevents page from refreshing and sends a dispatch to retrieve data
    const handleSubmit = (e) => {
        e.preventDefault();
        if(search.year !== "") {
            dispatch(getMovieYear(search.title, search.year));
        }else {
            dispatch(getMovieTitle(search.title));
        }
    }

    const options = [];
    
    //prints options in dropdown with 220 years
    for (let i = 0; i <= 220; i++) {
        const year = thisYear - i;
        options.push(<option key={i} value={year}>{year}</option>);
    }
    
    //The method changes the route to another page on button pressed
    const routeChange = () =>{
        dispatch({type: GIVE_ACCESS});
        let path = '/details'; 
        history.push(path);
    }

    if(movie.data !== undefined) {
        const { Title, Year, Poster } = movie.data;
        return (<>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 text-center">
                        <h2>Search Movie</h2>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="container text-center mt-5">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mt-3 mb-3">
                                    <input 
                                        type="text" 
                                        name="title" 
                                        className="form-control title" 
                                        placeholder="Title"
                                        value={search.title}
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 col-md-4 mt-3 mb-3">
                                    <select value={search.year} onChange={handleChange} className="year form-control" name="year">
                                        <option defaultValue="">Choose a Year</option>
                                        {options}
                                    </select>
                                </div>
                                <div className="col-xl-4 col-md-4 mt-3 mb-3">
                                    <button className="btn btn-link bg-dark submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-12 mt-5 text-center">
                        <h2>Movie Details</h2>
                    </div>
                </div>
                {movie.data.Error ? 
                    <h5 className="text-center mt-5">{movie.data.Error}</h5>
                    :
                    <div className="row">
                        <div className="col mt-5 mb-5 d-flex text-center justify-content-center">
                            <div className="card">
                                {Poster !== "N/A" ? <img className="card-img-top" src={Poster} alt="Movie Poster"/> : <img className="card-img-top" src="https://picsum.photos/id/237/200/300" alt="Movie Poster"/>}
                                <div className="card-body">
                                    {Title ? <h5 className="card-title">Title: {Title}</h5> : <h5 className="card-title">Title</h5>}
                                    {Year ? <p className="card-text">Year: {Year}</p> : <p className="card-text">Year</p>}
                                    <button onClick={() => routeChange()} className="btn btn-dark">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>)
    }else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 text-center">
                        <h2>Search Movie</h2>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="container text-center mt-5">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mt-3 mb-3">
                                    <input 
                                        type="text" 
                                        name="title" 
                                        className="form-control title" 
                                        placeholder="Title"
                                        value={search.title} 
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 col-md-4 mt-3 mb-3">
                                    <select value={search.year} onChange={handleChange} className="year form-control" name="year">
                                        <option defaultValue="">Choose a Year</option>
                                        {options}
                                    </select>
                                </div>
                                <div className="col-xl-4 col-md-4 mt-3 mb-3">
                                    <button className="btn btn-link bg-dark submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

//This method maps the state to the props of this component
const mapStateToProps = state => {
    return { 
        movie: state.movie,
        access: state.access
    };
};

export default connect(
    mapStateToProps
)(Listing);