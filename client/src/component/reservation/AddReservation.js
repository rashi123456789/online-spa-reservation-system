import React from 'react'
import {connect} from 'react-redux'

import ReservationForm from './ReservationForm'
import { startAddReservations } from '../../actions/reservationAction'

function AddReservation(props){  

    const  handleEditSubmit = (reservation) => {    
        const redirect = () => props.history.push('/reservations')
        props.dispatch(startAddReservations(reservation,redirect))
    }
        return (
            <div>
                <ReservationForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddReservation)