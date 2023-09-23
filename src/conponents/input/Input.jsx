import styled from "styled-components";
import { IconEyeClose, IconEyeOpen } from "../../icon";
import { useState } from "react";

const InputBox = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-eye {
    margin-left: -30px;
    cursor: pointer;
  }
`;

const InputStyle = styled.input`
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 36px 8px 16px;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.grayLight};
  border: 1px solid ${(props) => props.theme.grayf1};

  &:focus {
    outline: none;
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.secondary};
  }
`;

const Input = ({ hasIcon, type, name, placeholder, register, ...props }) => {
  const [showEye, setShowEye] = useState(true);
  const [typeStyle, setTypeStyle] = useState(type);

  return (
    <InputBox>
      <InputStyle
        type={typeStyle}
        name={name}
        id={name}
        placeholder={placeholder}
        {...register(name, { required: true })}
        {...props}
      />
      {hasIcon && (
        <div
          className="icon-eye"
          onClick={() => {
            setTypeStyle(showEye ? "text" : type);
            setShowEye(!showEye);
          }}
        >
          {showEye ? <IconEyeClose /> : <IconEyeOpen />}
        </div>
      )}
    </InputBox>
  );
};

export default Input;
