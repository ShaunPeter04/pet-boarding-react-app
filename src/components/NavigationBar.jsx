import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark sticky-top py-3"
            style={{
                backgroundColor: '#1a242f',
                border: 'none',
                boxShadow: 'none'
            }}
        >
            <div className="container-fluid px-100">

                <Link
                    className="navbar-brand fw-bold fs-4 text-white d-flex align-items-center gap-2"
                    to="/"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#ffc107"
                        viewBox="0 0 16 16"
                    >
                        <path d="M1 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3.5 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M4 14c.415 0 .829-.062 1.222-.186L6.5 13H9.5l1.278.814c.393.124.807.186 1.222.186a2 2 0 0 0 2-2c0-.51-.157-.956-.455-1.304l-1.464-1.708A3.7 3.7 0 0 0 9.3 8H6.7a3.7 3.7 0 0 0-2.781 1.182L2.455 10.89C2.157 11.238 2 11.684 2 12a2 2 0 0 0 2 2" />
                    </svg>

                    <span>
                        Pet<span style={{ color: '#ffc107' }}>Boarding</span>
                    </span>
                </Link>

                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center gap-3 mt-3 mt-lg-0">

                        <Link
                            className="btn rounded-pill px-4 py-2 fw-semibold text-dark"
                            to="/"
                            style={{
                                backgroundColor: '#ffc107',
                                border: 'none'
                            }}
                        >
                            Add Pet
                        </Link>

                        <li className="nav-item">
                            <Link
                                className="btn rounded-pill px-4 py-2 fw-semibold text-dark"
                                to="/view"
                                style={{
                                    backgroundColor: '#ffc107',
                                    border: 'none'
                                }}
                            >
                                View Pet
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavigationBar