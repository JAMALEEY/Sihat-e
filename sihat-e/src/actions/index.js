
import {
  CREATE_NEWSLETTER,
  TOKEN_KEY,
  CREATE_PATIENT,
  SIGN_IN,
  SIGN_OUT,
  CREATE_ABOUT,
  EDIT_PATIENT_ABOUT,
  FETCH_ABOUT,
  CREATE_CONTACTINFO,
} from "./types";
import history from "../helpers/history";
import api from "../Apis/api";


export const createNewsletterEmail = (formValues) => {
  return async (dispatch) => {
    const response = await api.post("/newsletter", formValues);
    dispatch({
      type: CREATE_NEWSLETTER,
      payload: response.data,
    });
    if (response.status == 422) {
      dispatch({
        type: "DUPLICATED_NEWSLETTER",
        payload: response.data.errors.email,
      });
    }
  };
};

export const signUpPatient = (formValues, getState) => {
  return async (dispatch) => {
    const response = await api.post("/register", formValues);
    localStorage.setItem(TOKEN_KEY, response.data.token);
    history.push("/dashboardPatient");
    dispatch({
      type: CREATE_PATIENT,
      payload: response.data,
    });
  };
};

export const createLogin = (formValues) => {
  return async (dispatch) => {
    const response = await api.post("/login", formValues);
    dispatch({
      type: SIGN_IN,
      payload: response.data,
    });

    if (response.data) {
      if (response.status == 200 && response.data.token) {
        localStorage.setItem(TOKEN_KEY, response.data.token);
        history.push("/dashboardPatient");
      } else if (response.status == 200 && response.data.status === "401") {
        console.log(response.data.status);
        return;
      }
    }
  };
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};

export const logout = () => {
  return async (dispatch) => {
    const response = await api.get("/logout");
    localStorage.clear();
    history.push("/");
    dispatch({
      type: SIGN_OUT,
    });
  };
};

export const fetchLoginMsg = () => {
  return async (dispatch) => {
    const response = await api.get("/");
    dispatch({
      type: "CREATE_LOGIN",
      payload: response.data,
    });
  };
};

export const createAbout = (formValues) => {
  return async (dispatch) => {
    const response = await api.post("patient/create", formValues);
    window.location.reload()    
    
    dispatch({
      type: CREATE_ABOUT,
      payload: response.data,
    });

  };
};


export const editAboutInfos = (formValues) => async (dispatch) => {
  const response = await api.put("patient/update", formValues);
  window.location.reload()    

  dispatch({ type: EDIT_PATIENT_ABOUT, payload: response.data });
  // history.push('/dashboardPatient');
};


export const createContactInformation = (formValues) => {
  return async (dispatch) => {
    const response = await api.put("patient/update", formValues);
    dispatch({
      type: CREATE_CONTACTINFO,
      payload: response.data,
    });

  };
};

export const fetchAboutInfos = () => {


  return (dispatch) => {
    dispatch(fetchPatientsRequest());
    api
      .get("/patient/fetch")
      .then((response) => {
        // response.data is the Patients
        const fetchedData = response.data.data;
        dispatch(fetchPatientsSuccess(fetchedData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchPatientsFailure(error.message));
      });
  };
};


//  HERE WE FETCH THE REQUEST 
export const fetchPatientsRequest = () => {
  return {
    type: "FETCH_PATIENTS_REQUEST",
  };
};

// HERE WE FETCH THE RESPONSE OF THE REQUEST
export const fetchPatientsSuccess = (fetchedData) => {
  return {
    type: "FETCH_ABOUT",
    payload: fetchedData,
  };
};

// HERE WE FETCH THE ERROR OF THE REQUEST
export const fetchPatientsFailure = (error) => {
  return {
    type: "FETCH_PATIENTS_FAILURE",
    payload: error,
  };
};
