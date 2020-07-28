import Styled from 'styled-components';
import styled from 'styled-components';

const Button = styled.button`
   background: var(--primary);
    color: var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 8px 16px;
    font-style: normal;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .5;
    }
`;

export default Button;