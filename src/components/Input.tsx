import styled from "styled-components";
import KdB from "../consts/KdB";
import React, {useRef} from "react";

const Wrapper = styled.input`
    border-radius: 12px;
  border: #1A5F7A solid 1px;
  color: white;
  background-color: transparent;
  height: 48px;
  font-size: 1.2em;
  padding: 0 8px;
  
  &:hover {
    outline: none;
    border: #159895 solid 1px;
  }
`;

type InputType = "text" | "subjectName" | "subjectId";

interface InputProps {
    placeHolder: string
    kdb: KdB,
    type: InputType
    onEnterClick: (text: string) => void
}

const Input = ({ placeHolder, kdb, type, onEnterClick }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') onEnterClick(inputRef == null ? "" : inputRef!!.current!!.value);
    }

    return (
        <Wrapper ref={inputRef} type={"text"} placeholder={placeHolder} onKeyDown={(e) => onKeyDown(e)}></Wrapper>
    )
}

export default Input