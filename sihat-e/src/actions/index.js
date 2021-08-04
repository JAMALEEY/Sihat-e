// in order to make requests over our newsletter API we take an instance of this API using axios to apply actions creators on it
import newsletterapi from "../Apis/newsletterapi";


// new action creator to handle newletter api:
// this is goign to be called with a list of all those different values that we entered into our form as an argument to our action creator (an asynch action creator necessite a reduxThunk)
export const createNewsletterEmail = (formValues) => {
    return async ( dispatch ) => {
        const response = await newsletterapi.post('/newsletter', formValues);

    dispatch ({
        type: 'CREATE_NEWSLETTER',
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