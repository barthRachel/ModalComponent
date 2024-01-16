import styled from 'styled-components';
import './Modal.css';
import propTypes from 'prop-types';

export default function Modal({isOpen, onClose, text, button, cross, mainBackgroundColor, shadowModalColor, buttonColor, buttonText}) {
    
    const ModalWrapper = styled.section`
        position: fixed;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: #${mainBackgroundColor ? mainBackgroundColor : "000000"}BF;
        transition: all 0.25s ease-in-out;
    `

    const Modal = styled.div`
        position: relative;
        z-index: 20;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 30px 45px;
        border-radius: 20px;
        background-color: white;
        box-shadow: 0 0 10px #${shadowModalColor ? shadowModalColor : "000000"};
    `
    
    const ButtonCross = styled.button`
        background-color: #${buttonColor ? buttonColor : "000000"};
        color: white;
        padding: 7px 10px;
        border-radius: 100%;
        border: 2px solid transparent;
        transition: all 0.25s ease-in-out;
        position: absolute;
        top: -14px;
        right: -17px;

        &:hover {
            background-color: white;
            color: #${buttonColor ? buttonColor : "000000"};
            border: 2px solid #${buttonColor ? buttonColor : "000000"};
            cursor: pointer;
        }
    `

    const ButtonConfirmation = styled.button`
        margin-top: 25px;
        background-color: #${buttonColor ? buttonColor : "000000"};
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        border: 2px solid transparent;
        transition: all 0.25s ease-in-out;

        &:hover {
            background-color: white;
            color: #${buttonColor ? buttonColor : "000000"};
            border: 2px solid #${buttonColor ? buttonColor : "000000"};
            cursor: pointer;
        }
    `

    return (
        <ModalWrapper className={isOpen ? "modal-open" : "modal-close"}>
            <Modal>
                {
                    cross && (
                        <ButtonCross onClick={onClose}>X</ButtonCross>
                    )
                }
                <h2 className='modal-text'>{text}</h2>
                {
                    (button || cross === undefined) && (
                        <ButtonConfirmation onClick={onClose}>{buttonText === undefined ? "Ok" : buttonText}</ButtonConfirmation>
                    )
                }
            </Modal>
        </ModalWrapper>
    )
}

Modal.propTypes = {
    text: propTypes.string.isRequired,

}