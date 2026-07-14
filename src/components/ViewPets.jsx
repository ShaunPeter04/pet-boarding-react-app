import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar';

const ViewPets = () => {


    const [petdata, changeDate] = useState([]);

    const fetchData = () => {
        axios.post("http://localhost:3000/view-pets", petdata).then(
            (response) => {
                changeDate(response.data)
            }).catch(
                (err) => {
                    console.error("Error fetching entries: ", err)
                }
            )
    }

    useEffect(
        () => {
            fetchData();
        }, []
    )

    return (
        <div>

            <NavigationBar />
            <div className="container-fluid mt-5 px-4">
                <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                    {/* p-0 allows the table to stretch edge-to-edge inside the card */}
                    <div className="card-body p-0">
                        {/* Removed the table-responsive wrapper so the table lays out fully on the screen */}
                        <table className="table table-hover align-middle text-center mb-0 w-100">
                            <thead className="table-warning">
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Pet Name</th>
                                    <th>Pet Type</th>
                                    <th>Breed</th>
                                    <th>Age</th>
                                    <th>Weight</th>
                                    <th>Vaccination Status</th>
                                    <th>Owner Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Check-in Date</th>
                                    <th>Check-out Date</th>
                                    <th>Kennel Number</th>
                                </tr>
                            </thead>

                            <tbody>
                                {petdata.map((value, index) => (
                                    <tr key={index}>
                                        <td className="fw-semibold">{value.bookingId}</td>
                                        <td>{value.petName}</td>
                                        <td>{value.petType}</td>
                                        <td>{value.breed}</td>
                                        <td>{value.age}</td>
                                        <td>{value.weightKg}</td>
                                        <td>{value.vaccinationStatus}</td>
                                        <td>{value.ownerName}</td>
                                        <td>{value.ownerPhone}</td>
                                        <td>{value.ownerEmail}</td>
                                        <td>{value.checkInDate}</td>
                                        <td>{value.checkOutDate}</td>
                                        <td>{value.kennelNumber}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ViewPets