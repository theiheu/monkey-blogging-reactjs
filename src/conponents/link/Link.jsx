import styled from "styled-components";

const LinkStyle = styled.a`
  display: inline-block;
  font-size: 16px;
  color: ${(props) => props.theme.primary};
  text-decoration: underline;
`;

const Link = ({ href, children, ...props }) => {
  return (
    <LinkStyle href={href} {...props}>
      {children}
    </LinkStyle>
  );
};

export default Link;
