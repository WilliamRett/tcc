import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'
import "./JobCards.css";
import axios from './axios';


function JobCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/slide/card');

            setPeople(req.data);
        } 

        fetchData();
    }, []);

    console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        // setLastDirection(direction);
    }
    const out0fFrame = (name) => {
        console.log(name + 'left the screen!');
    }

    return (
        <div className="jobCards">

            <div className="jobCards_img">
                <div className="job_card_container">
                    {people.map((person) => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => out0fFrame(person.name)}
                        >
                            <div className="bg" style={{ backgroundImage: "url(" + person.imgUrl + ")"} }
                                className="card"
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))}
                </div>
            </div>

        </div >
    )
}

export default JobCards
