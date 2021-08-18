import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        // Make API request to sign up with that email and password

        //if we signup, then modify my state and say that we are authenticated

        //if signup fails I need to reflect an error message somewhere
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // Try to signin

        //Handle success by updating state

        //Handle failure by showing error message
    };
};

const signout = (dispatch) => {
    return () => {
        // Somehow signout
    };
};

export const { Provider, Context } = createDataContext(
    authReducer, 
    { signin, signout, signup }, 
    { isSignedIn: false }
);