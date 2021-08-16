
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
  EDIT_TAILLE_METRIX,
  CREATE_TAILLE_METRIX,
  FETCH_TAILLE_METRIX,
  DELETE_TAILLE_METRIX,CREATE_POIDS_METRIX,EDIT_POIDS_METRIX,DELETE_POIDS_METRIX

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





// THE TAILLE METRIX ACTION CREATORS :



// FETCH


export const fetchTailleInfos = () => {


  return (dispatch) => {
    dispatch(fetchTailleInfosRequest());
    api
      .get("/height/fetch")
      .then((response) => {
        // response.data is the Patients
        const fetchedDataTaille = response.data;
        dispatch(fetchTailleInfosSuccess(fetchedDataTaille));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchPatientsFailure(error.message));
      });
  };
};


//  HERE WE FETCH THE REQUEST 
export const fetchTailleInfosRequest = () => {
  return {
    type: "FETCH_TAILLE_REQUEST",
  };
};

// HERE WE FETCH THE RESPONSE OF THE REQUEST
export const fetchTailleInfosSuccess = (fetchedDataTaille) => {
  return {
    type: "FETCH_TAILLE_METRIX",
    payload: fetchedDataTaille,
  };
};

// HERE WE FETCH THE ERROR OF THE REQUEST
export const fetchTailleInfosFailure = (error) => {
  return {
    type: "FETCH_TAILLE_FAILURE",
    payload: error,
  };
};


// CREATION

export const createTaille = (formValues) => {
  return async (dispatch) => {
    const response = await api.post("/height/create", formValues);
    // window.location.reload()    
    
    dispatch({
      type: CREATE_TAILLE_METRIX,
      payload: response.data,
    });

  };
};

// UPDATE


export const editTaille = (id, formValues) => async dispatch => {
  const response = await api.put(`/height/update/${id}`, formValues);

  dispatch({ type: EDIT_TAILLE_METRIX, payload: response.data });
  window.location.reload()    
};


// DELETE

export const deleteTaille = id => async dispatch => {
  await api.delete(`/height/delete/${id}`);

  dispatch({ type: DELETE_TAILLE_METRIX, payload: id });
  window.location.reload()    
};


// POIDS METRIX :


// FETCH


export const fetchPoidsInfos = () => {


  return (dispatch) => {
    dispatch(fetchPoidsInfosRequest());
    api
      .get("/weight/fetch")
      .then((response) => {
        // response.data is the Patients
        const fetchedDataPoids = response.data;
        dispatch(fetchPoidsInfosSuccess(fetchedDataPoids));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchPoidsInfosFailure(error.message));
      });
  };
};


//  HERE WE FETCH THE REQUEST :
export const fetchPoidsInfosRequest = () => {
  return {
    type: "FETCH_POIDS_REQUEST",
  };
};

// HERE WE FETCH THE RESPONSE OF THE REQUEST:
export const fetchPoidsInfosSuccess = (fetchedDataPoids) => {
  return {
    type: "FETCH_POIDS_METRIX",
    payload: fetchedDataPoids,
  };
};

// HERE WE FETCH THE ERROR OF THE REQUEST:
export const fetchPoidsInfosFailure = (error) => {
  return {
    type: "FETCH_POIDS_FAILURE",
    payload: error,
  };
};


// CREATION:

export const createPoids = (formValues) => {
  return async (dispatch) => {
    const response = await api.post("/weight/create", formValues);
    window.location.reload()    
    
    dispatch({
      type: CREATE_POIDS_METRIX,
      payload: response.data,
    });

  };
};

// UPDATE:


export const editPoids = (id, formValues) => async dispatch => {
  const response = await api.put(`/weight/update/${id}`, formValues);

  dispatch({ type: EDIT_POIDS_METRIX, payload: response.data });
  window.location.reload()    
};


// DELETE:

export const deletePoids = id => async dispatch => {
  await api.delete(`/weight/delete/${id}`);

  dispatch({ type: DELETE_POIDS_METRIX, payload: id });
  window.location.reload()    
};



// BMI METRIX :


// FETCH


export const fetchBmiInfos = () => {


  return (dispatch) => {
    dispatch(fetchBmiInfosRequest());
    api
      .get("/BMI/fetch")
      .then((response) => {
        const fetchedDataBmi = response.data;
        dispatch(fetchBmiInfosSuccess(fetchedDataBmi));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchBmiInfosFailure(error.message));
      });
  };
};


//  HERE WE FETCH THE REQUEST :
export const fetchBmiInfosRequest = () => {
  return {
    type: "FETCH_BMI_REQUEST",
  };
};

// HERE WE FETCH THE RESPONSE OF THE REQUEST:
export const fetchBmiInfosSuccess = (fetchedDataBmi) => {
  return {
    type: "FETCH_BMI_METRIX",
    payload: fetchedDataBmi,
  };
};

// HERE WE FETCH THE ERROR OF THE REQUEST:
export const fetchBmiInfosFailure = (error) => {
  return {
    type: "FETCH_BMI_FAILURE",
    payload: error,
  };
};


// CREATION:

export const createBmi = (formValues) => {
  return async (dispatch) => {
    const response = await api.post("/BMI/create", formValues);
    window.location.reload()    
    
    dispatch({
      type: "CREATE_BMI_METRIX",
      payload: response.data,
    });

  };
};

// UPDATE:


export const editBmi = (id, formValues) => async dispatch => {
  const response = await api.put(`/BMI/update/${id}`, formValues);

  dispatch({ type: "EDIT_BMI_METRIX", payload: response.data });
  window.location.reload()    
};


// DELETE:

export const deleteBmi = id => async dispatch => {
  await api.delete(`/BMI/delete/${id}`);

  dispatch({ type: "DELETE_Bmi_METRIX", payload: id });
  window.location.reload()    
};








// TENSION METRIX :


// FETCH


export const fetchTensionInfos = () => {


  return (dispatch) => {
    dispatch(fetchTensionInfosRequest());
    api
      .get("/blood_presure/fetch")
      .then((response) => {
        const fetchedDataTension = response.data;
        dispatch(fetchTensionInfosSuccess(fetchedDataTension));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchTensionInfosFailure(error.message));
      });
  };
};


//  HERE WE FETCH THE REQUEST :
export const fetchTensionInfosRequest = () => {
  return {
    type: "FETCH_TENSION_REQUEST",
  };
};

// HERE WE FETCH THE RESPONSE OF THE REQUEST:
export const fetchTensionInfosSuccess = (fetchedDataTension) => {
  return {
    type: "FETCH_TENSION_METRIX",
    payload: fetchedDataTension,
  };
};

// HERE WE FETCH THE ERROR OF THE REQUEST:
export const fetchTensionInfosFailure = (error) => {
  return {
    type: "FETCH_TENSION_FAILURE",
    payload: error,
  };
};


// CREATION:

export const createTension = (formValues) => {
  return async (dispatch) => {
    const response = await api.post("/blood_presure/create", formValues);
    window.location.reload()    
    
    dispatch({
      type: "CREATE_TENSION_METRIX",
      payload: response.data,
    });

  };
};

// UPDATE:


export const editTension = (id, formValues) => async dispatch => {
  const response = await api.put(`/blood_presure/update/${id}`, formValues);

  dispatch({ type: "EDIT_TENSION_METRIX", payload: response.data });
  window.location.reload()    
};


// DELETE:

export const deleteTension = id => async dispatch => {
  await api.delete(`/blood_presure/delete/${id}`);

  dispatch({ type: "DELETE_TENSION_METRIX", payload: id });
  window.location.reload()    
};




// GLUCOSE METRIX :


// FETCH


export const fetchGlucoseInfos = () => {


  return (dispatch) => {
    dispatch(fetchGlucoseInfosRequest());
    api
      .get("/glucose/fetch")
      .then((response) => {
        // response.data is the Patients
        const fetchedDataGlucose = response.data;
        dispatch(fetchGlucoseInfosSuccess(fetchedDataGlucose));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchGlucoseInfosFailure(error.message));
      });
  };
};


//  HERE WE FETCH THE REQUEST :
export const fetchGlucoseInfosRequest = () => {
  return {
    type: "FETCH_GLUCOSE_REQUEST",
  };
};

// HERE WE FETCH THE RESPONSE OF THE REQUEST:
export const fetchGlucoseInfosSuccess = (fetchedDataGlucose) => {
  return {
    type: "FETCH_GLUCOSE_METRIX",
    payload: fetchedDataGlucose,
  };
};

// HERE WE FETCH THE ERROR OF THE REQUEST:
export const fetchGlucoseInfosFailure = (error) => {
  return {
    type: "FETCH_GLUCOSE_FAILURE",
    payload: error,
  };
};


// CREATION:

export const createGlucose = (formValues) => {
  return async (dispatch) => {
    const response = await api.post("/glucose/create", formValues);
    // window.location.reload()    
    
    dispatch({
      type: 'CREATE_GLUCOSE_METRIX',
      payload: response.data,
    });

  };
};

// UPDATE:


export const editGlucose = (id, formValues) => async dispatch => {
  const response = await api.put(`/glucose/update/${id}`, formValues);

  dispatch({ type: 'EDIT_GLUCOSE_METRIX', payload: response.data });
  window.location.reload()    
};


// DELETE:

export const deleteGlucose = id => async dispatch => {
  await api.delete(`/glucose/delete/${id}`);

  dispatch({ type: 'DELETE_GLUCOSE_METRIX', payload: id });
  window.location.reload()    
};




// Température METRIX :


// FETCH


export const fetchTemperatureInfos = () => {


  return (dispatch) => {
    dispatch(fetchTemperatureInfosRequest());
    api
      .get("/temperature/fetch")
      .then((response) => {
        // response.data is the Patients
        const fetchedDataTemperature = response.data;
        dispatch(fetchTemperatureInfosSuccess(fetchedDataTemperature));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchTemperatureInfosFailure(error.message));
      });
  };
};


//  HERE WE FETCH THE REQUEST :
export const fetchTemperatureInfosRequest = () => {
  return {
    type: "FETCH_TEMPERATURE_REQUEST",
  };
};

// HERE WE FETCH THE RESPONSE OF THE REQUEST:
export const fetchTemperatureInfosSuccess = (fetchedDataTemperature) => {
  return {
    type: "FETCH_TEMPERATURE_METRIX",
    payload: fetchedDataTemperature,
  };
};

// HERE WE FETCH THE ERROR OF THE REQUEST:
export const fetchTemperatureInfosFailure = (error) => {
  return {
    type: "FETCH_TEMPERATURE_FAILURE",
    payload: error,
  };
};


// CREATION:

export const createTemperature = (formValues) => {
  return async (dispatch) => {
    const response = await api.post("/temperature/create", formValues);
    // window.location.reload()    
    
    dispatch({
      type: 'CREATE_TEMPERATURE_METRIX',
      payload: response.data,
    });

  };
};

// UPDATE:


export const editTemperature = (id, formValues) => async dispatch => {
  const response = await api.put(`/temperature/update/${id}`, formValues);

  dispatch({ type: 'EDIT_TEMPERATURE_METRIX', payload: response.data });
  // window.location.reload()    
};


// DELETE:

export const deleteTemperature = id => async dispatch => {
  await api.delete(`/temperature/delete/${id}`);

  dispatch({ type: 'DELETE_TEMPERATURE_METRIX', payload: id });
  // window.location.reload()    
};
