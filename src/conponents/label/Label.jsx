import styled from "styled-components";

const LabelStyles = styled.label`
  display: block;
  font-size: 20px;
  /* font-weight: 600; */
  color: ${(props) => props.theme.gray4b};
  cursor: pointer;
`;

const Label = ({ htmlFor, children, ...props }) => {
  return (
    <LabelStyles htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyles>
  );
};

export default Label;
