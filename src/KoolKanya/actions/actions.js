// Action
var resetAction = { type: "reset" };
var addAction = { type: "add" };
var errorAction = { type: "error" };

const getActions = dispatch => (
    {
        reset() {
            return dispatch(resetAction);
        },
        add() {
            return async (dispatch) => {
                fetch("./Mock.json")
                    .then(res => res.json())
                    .then(data => dispatch({ ...addAction, data }))
                    .catch(err => dispatch({ ...errorAction, err }))
            }
        }
    }
);

export const fakeLoaderAction = dispatch => (
    {
        add() {
            return async (dispatch) => {
                    dispatch(resetAction);
                    fetch("./Mock.json")
                    .then(res => new Promise(resolve => setTimeout(() => resolve(res.json()), 1000)))
                    .then(data => dispatch({ ...addAction, data }))
                    .catch(err => dispatch({ ...errorAction, err }))
                
            }
        }
    }
)

export default getActions;