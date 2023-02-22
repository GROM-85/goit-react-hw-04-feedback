import { Button } from "./Button.styled";
import PropTypes from 'prop-types';

export const ButtonComponent = ({url,name,callback}) =>{
    return (
    <Button
    url={url}
    onClick={callback}
    data-name={name}
    />
    )
}

ButtonComponent.propTypes = {
    url:PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    name:PropTypes.string.isRequired,
}