import axios from '../config/axios'
import swal from 'sweetalert'

export const AddReservations =(reservation)=>{
    return {type:'ADD_RESERVATIONS',payload:reservation}
}
export const startAddReservations =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/reservations',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    swal({
                        icon:'info',
                        title:'Validation faled',
                        text: `${response.data.message}`,
                      });
                }
                else{
                    swal({
                        title: "Good job!",
                        text: "added successfully",
                        icon: "success",
                      });
                    const reservation =response.data
                    redirect()
                    dispatch(AddReservations(reservation))
                }
            })
    }
}

export const setReservations = (reservation) => {
    return { type: 'SET_RESERVATIONS', payload: reservation }
}

export const startSetReservations = () => {
        return (dispatch) => {
            axios.get('/reservations', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const reservation = response.data
                dispatch(setReservations(reservation))
            })
        }
}

export const removeReservation = (reservation) => {
    return { type: 'REMOVE_RESERVATION', payload: reservation }
}

export const startRemoveReservation = (id) => {
    return (dispatch) => {
        axios.delete(`/reservations/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const reservation = response.data
            dispatch(removeReservation(reservation))
        })
    }
}

export const editReservation = (reservation) => {
    return { type: 'EDIT_RESERVATION', payload: reservation }
}

export const startEditReservation = (reservation, redirect) => {
    return (dispatch) => {
        axios.put(`/reservations/${reservation.id}`, reservation, {headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                swal({
                    icon:'info',
                    title:'Validation faled',
                    text: `${response.data.message}`,
                  });
            }
            else{
                swal({
                    title: "Good job!",
                    text: "added successfully",
                    icon: "success",
                  });
                const reservation = response.data 
                dispatch(editReservation(reservation))
                redirect()
            }
        })
    }
}