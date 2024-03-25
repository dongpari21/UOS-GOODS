import styled from 'styled-components';
import { BaseButtonStyle } from "./style";


export const ButtonSize = {
    NORMAL: 0,
    LARGE: 1,
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
    handler,
    children,
  }) => {
    if (!buttonSize) {
      buttonSize = ButtonSize.NORMAL;
    }
    if (!buttonTheme) {
      buttonTheme = ButtonTheme.BLUE;
    }
  
    return (    
      <BaseButtonStyle
        buttonSize={buttonSize}
        buttonTheme={buttonTheme}
        onClick={handler}
      >
        {children}
      </BaseButtonStyle>
    )
  };
  
  export default Button;
  