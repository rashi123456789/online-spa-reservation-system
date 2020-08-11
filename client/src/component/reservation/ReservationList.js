import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { startRemoveReservation } from '../../actions/reservationAction'
import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 

function ReservationList(props){
    const handleRemove = (id) => {
        swal({
            title: "Are you sure ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Successfully Deleted", {	
                    icon: "success",
                });
                props.dispatch(startRemoveReservation(id)) 
            } 
        })
        
    }
    return(
        <div className="fluid-container" style={{height:"800px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9 )"}}>
            <Container>
                <h1 className='pt-5 pb-2'>Reservation - {props.reservation.length} </h1>
                <Table striped bordered hover responsive>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Show</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.reservation.map((ele,i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td> {ele.name} </td>
                                        <td> {ele.mobile} </td>
                                        <td> {ele.email} </td>
                                        <td> {moment(ele.date).format('L')} </td>
                                        <td> {ele.time} </td>
                                        <td><Link to={`/reservations/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                        <td><Link to={`/reservations/editreservation/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                        <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Link to="/reservations/add">Add Reservation</Link>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        reservation:state.reservation
    }
}
export default connect(mapStateToProps)(ReservationList)