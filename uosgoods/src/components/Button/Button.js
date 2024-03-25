import styled from 'styled-components';
import { BaseButtonStyle, ModalButton } from "./style";


export const ButtonSize = {
    NORMAL: 0,
    LARGE: 1,
    MODAL: 2,
}

export const ButtonTheme = {
    BLUE: 0,
    WHITE: 1,
    GRAY: 2, 
    RED: 3,
}

const Button = ({
    buttonSize,
    buttonTheme,
    disabled,
    handler,
    children,
  }) => {
    if (!buttonSize) {
      buttonSize = ButtonSize.NORMAL;
    }
    if (!buttonTheme) {
      buttonTheme = ButtonTheme.BLUE;
    }
  
    return buttonSize === ButtonSize.MODAL ? (
      <ModalButton
        buttonSize={buttonSize}
        buttonTheme={buttonTheme}
        onClick={handler}
      >
        {children}
      </ModalButton>
    ) : (
      <BaseButtonStyle
        buttonSize={buttonSize}
        buttonTheme={buttonTheme}
        disabled={disabled}
        onClick={handler}
      >
        {children}
      </BaseButtonStyle>
    );
  };
  
  export default Button;
  