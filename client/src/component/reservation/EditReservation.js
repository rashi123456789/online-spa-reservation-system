import React from 'react'
import { connect } from 'react-redux'
import ReservationForm from './ReservationForm'

import {startEditReservation} from '../../actions/reservationAction'
import { findReservation } from '../../selectors/reservationSelector'

function EditReservation(props){

    const handleEditSubmit = (reservation) => {
        const redirect = () => {
            return props.history.push(`/reservations`)
        }
        props.dispatch(startEditReservation(reservation, redirect))
    }
    return (
        <div>
            
            {props.reservation && (
                <div>
                    {props.reservation.name && <ReservationForm reservation = {props.reservation} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        reservation: findReservation(state.reservation,id)
    }
}
export default connect(mapStateToProps)(EditReservation)