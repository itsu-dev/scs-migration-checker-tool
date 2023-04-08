import styled from "styled-components";

const Wrapper = styled.button`
    background-color: #159895;
  border-radius: 12px;
  border: none;
  color: white;
  min-width: 100px;
  height: 48px;
  font-size: 1.2em;
`;

interface ButtonProps {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    return (
        <Wrapper>{ text }</Wrapper>
    );
}

export default Button;