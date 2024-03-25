import style from 'styled-components';  
import { ButtonSize, ButtonTheme } from './Button';

export const BaseButtonStyle = style.button`
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: ${props => {
        if (props.buttonTheme === ButtonTheme.BLUE) {
            return 'royalblue';
        } else if (props.buttonTheme === ButtonTheme.WHITE) {
            return 'white';
        } else if (props.buttonTheme === ButtonTheme.GRAY) {
            return 'gray';
        } else if (props.buttonTheme === ButtonTheme.RED) {
            return 'red';
        }
    }};
    &:hover {
        opacity: 0.7;
    }
`;

export const ModalButton = style(BaseButtonStyle)`
    width: 200px;
    height: 60px;
    font-size: 20px;
`;