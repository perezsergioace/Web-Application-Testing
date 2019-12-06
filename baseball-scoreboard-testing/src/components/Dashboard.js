import React from 'react'
import '../styles/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Dashboard = (props) => {
    return (
        <div className="buttons">
            <button type="button" className="btn btn-success" onClick={props.hit}>Hit</button>
            <button type="button" className="btn btn-danger" onClick={props.strike}>Strike</button>
            <button type="button" className="btn btn-warning" onClick={props.ball}>Ball</button>
            <button type="button" className="btn btn-secondary" onClick={props.foul}>Foul</button>
        </div>
    )
}

export default Dashboard;