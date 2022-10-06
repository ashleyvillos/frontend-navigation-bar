import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const styles = {
        container: {
            backgroundColor: '#070E29'
        },
        listItem: {
            height: '50px',
            color: '#FFFFFF'
        }
    }

    return (
        <div style={styles.container} className="w-48 pt-6">
            <nav>
                <div>
                    <ul>
                        <li style={styles.listItem} className="flex items-center pl-4 hover:bg-sky-700">
                            <Link to="/name"> Name </Link>
                        </li>
                        <li style={styles.listItem} className="flex items-center pl-4 hover:bg-sky-700">
                            <Link to="/education"> Education </Link>
                        </li>
                        <li style={styles.listItem} className="flex items-center pl-4 hover:bg-sky-700">
                            <Link to="/exp"> Work Experience </Link>
                        </li>
                        <li style={styles.listItem} className="flex items-center pl-4 hover:bg-sky-700">
                            <Link to="/tech-stack"> Tech Stack </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;