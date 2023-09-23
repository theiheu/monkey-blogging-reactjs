import styled from "styled-components";
import LoadingSpin from "../loading/LoadingSpin";

const ButtonStyle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  text-align: left;
  width: 100%;
  border-radius: 4px;
  margin-top: 8px;
  padding: 8px 16px;
  border: none;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({ isLoading, children, ...props }) => {
  const child = isLoading ? <LoadingSpin /> : children;
  return <ButtonStyle {...props}>{child}</ButtonStyle>;
};

export default Button;
