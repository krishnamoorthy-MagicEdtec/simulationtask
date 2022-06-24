import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import './Popup.css'

export default function PopupComponent() {
    const [popup, setPopup] = useState(true)
    return (
        <div className='modalContainer'>
           
            <Modal
                size="lg"
                show={popup}
            >
                <Modal.Header style={{ background: "#fbf1e9" }}>
                    <Modal.Title>
                        <h5>It is 3030, and a group of scientists are digging up different areas in a state park to trp and see what clues they can find about the past</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "#fbf1e9" }}>
                    <Button onClick={() => setPopup(false)}>
                        <h3>Start</h3>
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}
