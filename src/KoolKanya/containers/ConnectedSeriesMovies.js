import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import getActions from "../actions/actions"
import { bindActionCreators } from 'redux'

// Map Redux state to component props
function mapStateToProps(state) {
    const {err} = state;
    if (err)
        return { err };
    const data = state.data.entries ? state.data.entries.filter(item => item.programType === 'series') : [];
    return { data };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return bindActionCreators(getActions(dispatch), dispatch);
}

// The HOC
var connectedSeriesMovieList = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);

export default connectedSeriesMovieList;
