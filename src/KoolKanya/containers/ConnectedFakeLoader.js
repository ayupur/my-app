import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import getActions, { fakeLoaderAction } from "../actions/actions"
import { bindActionCreators } from 'redux'

// Map Redux state to component props
function mapStateToProps(state) {
    const { err } = state;
    if (err)
        return { err };
    const data = state.data.entries ? state.data.entries.slice(0, 10) : [];
    return { data };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ reset: getActions(dispatch).reset, ...fakeLoaderAction(dispatch) }, dispatch);
}

// The HOC
var connectedFakeLoader = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);

export default connectedFakeLoader;
