import React from 'react';
import classnames from 'classnames';
import './Button.scss';

const iconToFontClass = (icon) => {
    const iconMapping = {
        'back': 'fa-angle-left',
        'print': 'fa-print'
    };
    const defaultIcon = 'fa-question';

    return iconMapping[icon] || defaultIcon;
};

const Button = ({ icon, theme }) => {
    const iconClass = iconToFontClass(icon);

    return (
        <div className={classnames({
            'button-component': true,
            'button-theme-dark': theme === 'dark'
        })}>
            <i className={classnames([
                'fa',
                'fa-2x',
                iconClass
            ])}></i>
        </div>
    );
};

Button.propTypes = {
    icon: React.PropTypes.string.isRequired,
    theme: React.PropTypes.string
};

export default Button;