import React from 'react'
import Tour from './Tour.js'
import { tourData } from "./TourData.js";
import './TourList.scss'

export default class TourList extends React.Component {
    state = {
        tours: tourData
    }
    removeTour = id =>{
        const { tours } = this.state
        const sortedTours = tours.filter(tour => tour.id !== id)
        this.setState({
            tours: sortedTours
        })
    }
    render(){
        const {tours} = this.state
        return (
            <section className = "tourlist">
                {tours.map(tour => (
                    <Tour key = {tour.id} tour = {tour} removeTour = {this.removeTour}/>
                )
                )}
            </section>

        )
    }
}