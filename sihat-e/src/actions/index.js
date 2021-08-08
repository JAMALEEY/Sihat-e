// in order to make requests over our newsletter API we take an instance of this API using axios to apply actions creators on it
// import api from "../Apis/api";
import { SIGN_IN, SIGN_OUT, CREATE_NEWSLETTER, CREATE_PATIENT, CREATE_MEDECIN, FETCH_PATIENT, FETCH_MEDECIN, DELETE_PATIENT, DELETE_MEDECIN, TOKEN_KEY } from './types';
import history from "../helpers/history";
import api from '../Apis/api'


// new action creator to handle newletter api:
// this is goign to be called with a list of all those different values that we entered into our form as an argument to our action creator (an asynch action creator necessite a reduxThunk)




// export const signIn = token => {
//   return {
//     type: SIGN_IN,
//     payload: token
//   };
// };



// export const login = () => {
//     localStorage.setItem(TOKEN_KEY, 'TestLogin');
// }



export const createNewsletterEmail = (formValues) => {
    return async ( dispatch ) => {
        const response = await api.post('/newsletter', formValues);

    dispatch ({
        type: CREATE_NEWSLETTER,
        payload: response.data
    })
    if (response.status == 422) {
        dispatch ({
        type: 'DUPLICATED_NEWSLETTER',
        payload: response.data.errors.email

    })
    };   
}
}
        export const signUpPatient = (formValues, getState) => {

            return async (  dispatch  ) => {
                const response = await api.post('/register', formValues)
                localStorage.setItem(TOKEN_KEY, response.data.token);
                    dispatch ({
                        type: CREATE_PATIENT,
                        payload: response.data
                    });
                    history.push('/dashboardPatient');
            }
        }


        export const createLogin = (formValues) => {
            // async function dispatch = redux thunk en rgos
            return async ( dispatch ) => {
                const response = await api.post('/login', formValues);
            dispatch ({
                type: SIGN_IN,
                payload: response.data
            });
            
                if (response.data) {
                    if(response.status == 200 && response.data.token) {
                        localStorage.setItem(TOKEN_KEY, response.data.token);
                        console.log(localStorage)
                        history.push('/dashboardPatient')
                    } else if (response.status == 200 && response.data.status === "401") {
                            console.log(response.data.status)
                            return
                    }

                }
            }
        }
                
            export const isLogin = () => {
                if (localStorage.getItem(TOKEN_KEY)) {
                    return true;
                }

                return false;
            }



export const logout = () => {



    return async ( dispatch ) => {
            // const config = {
            //     headers:{
            //         Authorization: 'Bearer ' + localStorage.getItem(TOKEN_KEY)
            //     }
            // }
            // localStorage.setItem(TOKEN_KEY, response.data.token);

            const response = await api.get('/logout');
            localStorage.clear();
            history.push('/');
            dispatch ({
                type: SIGN_OUT,
            });
            
    
}
}






export const fetchLoginMsg = () => {
    return async ( dispatch ) => {
        const response = await api.get('/');

    dispatch ({
        type: 'CREATE_LOGIN',
        payload: response.data
    })
}
}


// Adding all the action creators that we might work with