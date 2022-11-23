import { BaseButton, GoogleSigninButton, InvertedButton } from './btn.styles';

export const BUTTON_TYPES_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSigninButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CutonButton = getButton(buttonType);
  return <CutonButton {...otherProps}>{children}</CutonButton>;
};

export default Button;
