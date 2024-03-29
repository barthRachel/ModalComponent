# React Modal Component

[![npm version](https://badge.fury.io/js/@barthrachel%2Fmodal_component.svg)](https://badge.fury.io/js/@barthrachel%2Fmodal_component)

A reusable Modal Component for React.

![Modal Component Screen](https://zupimages.net/up/24/03/h59e.png)

#

This React plugin was created for Project 14 of the "Application Developer - JavaScript React" training course for OpenClassrooms. [You can find the repo linked to this project right here.](https://github.com/barthRachel/hrnet)

#

# Table of contents

- [Installation](https://github.com/barthRachel/ModalComponent?tab=readme-ov-file#installation)
- [Configuration](https://github.com/barthRachel/ModalComponent?tab=readme-ov-file#configuration)
    - [Default modal](https://github.com/barthRachel/ModalComponent?tab=readme-ov-file#default-modal)
    - [Change button text](https://github.com/barthRachel/ModalComponent?tab=readme-ov-file#change-button-text)
    - [Close (cross) button](https://github.com/barthRachel/ModalComponent?tab=readme-ov-file#close-cross-button)
    - [Ok and close (cross) button](https://github.com/barthRachel/ModalComponent?tab=readme-ov-file#ok-and-close-cross-button)
    - [Change button color](https://github.com/barthRachel/ModalComponent?tab=readme-ov-file#change-button-color)
    - [Change background color](https://github.com/barthRachel/ModalComponent?tab=readme-ov-file#change-background-color)
    - [Change shadow color](https://github.com/barthRachel/ModalComponent?tab=readme-ov-file#change-shadow-color)

# Installation

You can install the [package](https://www.npmjs.com/package/@barthrachel/modal_component) via npm by typing the following command : 

```bash
npm install @barthrachel/modal_component
```

This example shows how to include this default component in your page :
```jsx
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

## Default Modal

The default component is described by :

```jsx
<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} />
```

![Modal Component Screen](https://zupimages.net/up/24/03/plva.png)

## Change button text

By default, the confirmation button is an "Ok" button, but you can change this text with the "buttonText" prop :

```jsx
<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} buttonText={"Your button text"} />
```

![Modal Component Screen](https://zupimages.net/up/24/03/l4tv.png)

## Close (cross) button

If, instead of an "Ok" button, you want a close button, you can use the "cross" prop :

```jsx
<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} cross />
```

![Modal Component Screen](https://zupimages.net/up/24/03/ak11.png)

## Ok and close (cross) button

It's also possible to have both types of button by adding the "button" prop :

```jsx
<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} cross button />
```

![Modal Component Screen](https://zupimages.net/up/24/03/9s8x.png)

## Change button color

If you want to change the color of the buttons, you can use the "buttonColor" prop with a string value representing the color in hexadecimal without the # :

```jsx
<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} buttonColor={"5a6f08"} />
```

![Modal Component Screen](https://zupimages.net/up/24/03/e8hh.png)

## Change background color

You can change the background color using the "mainBackgroundColor" prop in the same way as the "buttonColor" prop :

```jsx
<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} mainBackgroundColor={"5a6f08"} />
```

![Modal Component Screen](https://zupimages.net/up/24/03/umsc.png)

## Change shadow color

You can change the color of the modal's shadow using the "shadowModalColor" prop in the same way as the "buttonColor" prop :

```jsx
<Modal text={"Your text here"} isOpen={openModal} onClose={closeModal} shadowModalColor={"FF0000"} />
```

![Modal Component Screen](https://zupimages.net/up/24/03/j67v.png)