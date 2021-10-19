import React, { useState } from 'react';
import TinderCard from 'react-tinder-card'
import "./JobCards.css";


function JobCards() {
    const [people, setPeople] = useState([
        {
            name: "william",
            url: "https://cearasc.com/deploy/media/img/noticias/tadeu_novidade.jpg"
        },
        {
            name: "Pumba",
            url: "https://i1.sndcdn.com/artworks-k8hlyIWzgwtBWjhP-PLuglw-t500x500.jpg"
        }
    ]);

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
                            <div style={{ backgroundImage: "url(" + person.url + ")" }}
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
