# React Modal Component

[![npm version](https://badge.fury.io/js/@barthrachel%2Fmodal_component.svg)](https://badge.fury.io/js/@barthrachel%2Fmodal_component)

A reusable Modal Component for React.

![Modal Component Screen](./assets/1.png)

# Installation

You can install the [package](https://www.npmjs.com/package/@barthrachel/modal_component) via npm by typing the following command : 
`npm install @barthrachel/modal_component`

This example shows how to include this default component in your page :
```
import React, { useState } from "react";
import Modal from '@barthrachel/modal_component/dist/Modal';

const YourPage = () => {
    const [openModal, setOpenModal] = useState(false);

    // Add a change-of-state condition with setOpenModal

    const closeModal = () => {
        setOpenModal(false)
    }

    return(
        <div>
            /* The body of your page  */

            {
                openModal && (
                    <Modal 
                        text={"Your text here"}
                        isOpen={openModal}
                        onClose={closeModal}
                    />
                )
            }
        </div>
    )
}
```

# Configuration

The default component is described by :

`<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} />`

![Modal Component Screen](./assets/2.png)

#

By default, the confirmation button is an "Ok" button, but you can change this text with the "buttonText" prop :

`<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} buttonText={"Your button text"} />`

![Modal Component Screen](./assets/3.png)

#

If, instead of an "Ok" button, you want a close button, you can use the "cross" prop :

`<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} cross />`

![Modal Component Screen](./assets/4.png)

#

It's also possible to have both types of button by adding the "button" prop :

`<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} cross button />`

![Modal Component Screen](./assets/5.png)

#

If you want to change the color of the buttons, you can use the "buttonColor" prop with a string value representing the color in hexadecimal without the # :

`<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} buttonColor={"5a6f08"} />`

![Modal Component Screen](./assets/6.png)

#

You can change the background color using the "mainBackgroundColor" prop in the same way as the "buttonColor" prop :

`<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} mainBackgroundColor={"5a6f08"} />`

![Modal Component Screen](./assets/7.png)

#

You can change the color of the modal's shadow using the "shadowModalColor" prop in the same way as the "buttonColor" prop :

`<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} shadowModalColor={"FF0000"} />`

![Modal Component Screen](./assets/8.png)

#

This React plugin was created for Project 14 of the "Application Developer - JavaScript React" training course for OpenClassrooms. [You can find the repo linked to this project right here.](https://github.com/barthRachel/hrnet)