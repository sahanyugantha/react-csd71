import { Component } from "react";

class Movie extends Component{

	render(){
		return(
			<div className="movie-post">
				<h3 className="movie-name">Name</h3>
				<img src="img/movies-icon.png" alt="not found"/>
			</div>
		);
	}
}

export default Movie;