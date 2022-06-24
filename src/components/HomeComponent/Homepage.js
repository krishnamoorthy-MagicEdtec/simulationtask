import React, { useEffect, useState } from 'react'
import picture from "./main_bg.png"
import './Home.css'
import { Button, Modal, Card } from 'react-bootstrap'
import spider from './spider.png'
import rock from './rock_layers.png'
import stingray from './stingray_fossils.png'
import coyete from './coyete_tracks.png'
import pottery from './pottery.png'

const list = [
    { name: "btn", identified: "Tarantula", depth: 35, src: spider },
    { name: "btn", identified: "Different rock layers", depth: 100, src: rock },
    { name: "btn", identified: "Stingray", depth: 64, src: stingray },
    { name: "btn", identified: "Coyote", depth: 23, src: coyete },
    { name: "btn", identified: "Pottery", depth: 47, src: pottery }
]

export default function Homepage() {
    const [show, setShow] = useState(false)
    const [btnList, updateBtnList] = useState(list);
    const [selected, setSelected] = useState()
    const close = () => {
        setShow(true);
    }

    const handleButton = (item) => {
        setSelected(item)
    }
    return (
        <div className='container-fluid color'>
            {show && <div className="popup-container popup-show "><div>
                <div tabindex="0" className="popups-first-element"></div>
                <div class="dialogbox-container bg-with-opacity">
                    <div  class="dialog-container attention" >
                        <div><span></span></div><div>
                            <div id="dialog-description-info1"><p className='infos'>It is 3030, and a group of scientists are digging up different areas in a state park to try and see what clues they can find about the past.</p></div><div class="dialogbox-buttons"><button type="button" class="btn popup-button attention right-arrow " title="Start" aria-label="Start"><span class="text" aria-hidden="true">Start</span><span class="icon" aria-hidden="true"></span></button></div></div></div></div><div tabindex="0" class="popups-last-element"></div></div></div>}
            <div className='row wrapper' >
                <div className='col-sm-8 '>
                    <div className='dot'>
                        {btnList && btnList.map((btn, idx) => (
                            <div className={`dots-link link${idx + 1}`} onClick={() => handleButton(btn)}></div>
                        ))}
                    </div>
                    <img className='picture' src={picture} alt='pic'></img>
                </div>
                <div className='col-sm-4 col2'>
                    <Button className='btn1'>
                        Reset
                    </Button>

                    <Button className='bttn2 info' onClick={() => setShow(true)} >i</Button>
                    <div className='col col4'>
                        <h5>Each dot on the map indicates a dig location. Select the dots to discover specifics about what was found.</h5>
                    </div>
                    {selected && <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={selected.src} />
                        <Card.Body>
                            <Card.Title>
                                <p className='content-para'>Fossil Identifiel:<strong> {selected.identified} </strong>
                                </p >
                                <p className='content-para'>Depth of Fossil:<strong> {selected.depth} meters</strong></p></Card.Title>
                            <Card.Text>
                                  <h6>Known tarantula facts</h6><br />
                                <ul className='items-list' role="list">
                                    <li role="items-list">spider</li>
                                    <li role="listitem">Hunts at night and eats small insects</li>
                                    <li role="listitem">Lives largely in arid habitats</li>
                                </ul>

                            </Card.Text>
                            <button type="button" className='btn hospot-btn close' aria-describedby="fossil-info-section" title="Close" aria-Lebal="Close">
                                <span className='text' aria-hidden="true" onClick={() => setSelected(false)}>Close</span>
                                <span className='icon' aria-hidden="true"></span></button>
                        </Card.Body>
                    </Card>}

                </div>
                 {show && <Modal
                    size="lg"
                    show={show}
                >
                    <Modal.Header style={{ background: "#fbf1e9" }}>
                        <Modal.Title>
                            <h5>Each dot on the map indicates a dig location and gives specifics
                                about what was found. Select the dots to know more.</h5>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ background: "#fbf1e9" }}>
                        <Button onClick={() => setShow(false)}>Close

                        </Button>
                    </Modal.Body>
                </Modal>} 

            </div>
        </div>
    )
}
