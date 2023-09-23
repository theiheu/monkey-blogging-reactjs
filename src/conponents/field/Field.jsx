import styled from "styled-components";
import Input from "../input/Input";
import Label from "../label/Label";

const FieldStyle = styled.div`
  margin-bottom: 16px;
  text-align: left;
`;

const ErrNofi = styled.p`
  color: ${(props) => props.theme.danger};
`;

const Field = ({ label, name, error, ...props }) => {
  return (
    <FieldStyle>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} {...props} />
      <ErrNofi>{error}</ErrNofi>
    </FieldStyle>
  );
};

export default Field;
