import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieList from './containers/ConnectedMovieList';
import SeriesMovies from './containers/ConnectedSeriesMovies';
import NewMovies from './containers/ConnectedNewMovies';
import SortedMovies from './containers/ConnectedSortedMovies';
import FakeLoader from './containers/ConnectedFakeLoader';

export default function AppRoute() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item bg-dark m-2">
            <Link className="nav-link" to="/movie-list-21">First 21 Movie List</Link>
          </li>
          <li className="nav-item bg-dark m-2">
            <Link className="nav-link" to="/series-movie-list">Series Movie List</Link>
          </li>
          <li className="nav-item bg-dark m-2">
            <Link className="nav-link" to="/new-movie-list">2010 onward Movies</Link>
          </li>
          <li className="nav-item bg-dark m-2">
            <Link className="nav-link" to="/sorted-movie-list">Sorted Movies List</Link>
          </li>
          <li className="nav-item bg-dark m-2">
            <Link className="nav-link" to="/fake-loader">Fake Loader</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <div className="h1 d-flex justify-content-center">Welcome</div>
        </Route>
        <Route exact path="/movie-list-21">
          <MovieList />
        </Route>
        <Route exact path="/series-movie-list">
          <SeriesMovies />
        </Route>
        <Route exact path="/new-movie-list">
          <NewMovies />
        </Route>
        <Route exact path="/sorted-movie-list">
          <SortedMovies />
        </Route>
        <Route exact path="/fake-loader">
          <FakeLoader />
        </Route>
      </Switch>
    </Router>
  );
}