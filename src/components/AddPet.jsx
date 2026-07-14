import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddPet = () => {

    const [input, changeInput] = useState(
        {
            "bookingId": "",
            "petName": "",
            "petType": "",
            "breed": "",
            "age": "",
            "weightKg": "",
            "vaccinationStatus": "",
            "ownerName": "",
            "ownerPhone": "",
            "ownerEmail": "",
            "checkInDate": "",
            "checkOutDate": "",
            "kennelNumber": ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:4000/add-pet", input).then(

            (response) => {
                console.log(response.data)
                alert("Pet added successfully!")
            }

        ).catch(
            (err) => (
                console.error("Error Adding Pet", err)
            )
        )
    }

    return (
        <div>

            <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Booking ID</label>
                                <input type="text" className="form-control" name='bookingId' onChange={inputHandler} value={input.bookingId} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Pet Name</label>
                                <input type="text" className="form-control" name='petName' onChange={inputHandler} value={input.petName} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Pet Type</label>
                                <select name="petType" onChange={inputHandler} value={input.petType} id="" className="form-control">
                                    <option value="Cat">Cat</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Bird">Bird</option>
                                    <option value="Fish">Fish</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Breed</label>
                                <input type="text" className="form-control" name='breed' onChange={inputHandler} value={input.breed} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="number" className="form-control" name='age' onChange={inputHandler} value={input.age} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Weight (in Kg)</label>
                                <input type="number" step="0.01" className="form-control" name='weightKg' onChange={inputHandler} value={input.weightKg} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Vaccination Status</label>
                                <input type="text" className="form-control" name='vaccinationStatus' onChange={inputHandler} value={input.vaccinationStatus} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Owner Name</label>
                                <input type="text" className="form-control" name='ownerName' onChange={inputHandler} value={input.ownerName} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="tel" className="form-control" name='ownerPhone' onChange={inputHandler} value={input.ownerPhone} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name='ownerEmail' onChange={inputHandler} value={input.ownerEmail} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">CheckIn Date</label>
                                <input type="date" className="form-control" name='checkInDate' onChange={inputHandler} value={input.checkInDate} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Checkout Date</label>
                                <input type="date" step="0.01" className="form-control" name='checkOutDate' onChange={inputHandler} value={input.checkOutDate} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Kennel Number</label>
                                <input type="text" className="form-control" name='kennelNumber' onChange={inputHandler} value={input.kennelNumber} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPet