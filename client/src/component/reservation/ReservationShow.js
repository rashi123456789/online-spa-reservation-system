import React from 'react'
import { connect } from 'react-redux'
import { findReservation } from '../../selectors/reservationSelector'
import {Link} from 'react-router-dom'
import moment from 'moment'
import { Container } from 'react-bootstrap'
function ReservationShow(props){
    console.log(props)
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Reservation Show</h1>
            <h2 className='mt-3'><b>Customer Name:-</b>{props.reservation.name}</h2>
            <h2 className='mt-3'><b>No.of Customer:-</b>{props.reservation.noOfCustomer}</h2>
            <h2 className='mt-3'><b>Mobile:-</b>{props.reservation.mobile} </h2>
            <h2 className='mt-3'><b>Email:-</b>{props.reservation.email} </h2>
            <h2 className='mt-3'><b>Address:-</b>{props.reservation.address}</h2>
            <h2 className='mt-3'><b>Gender:-</b>{props.reservation.gender} </h2>
            <h2 className='mt-3'><b>Date - Time:-</b>{moment(props.reservation.date).format('L')} - {props.reservation.time}</h2>
            <Link to='/Reservations'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        reservation:findReservation(state.reservation,id)
    }
}
export default connect(mapStateToProps)(ReservationShow)