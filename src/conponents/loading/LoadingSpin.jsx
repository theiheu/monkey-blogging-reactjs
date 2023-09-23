import styled from "styled-components";

const LoadingStyle = styled.div`
  width: ${(props) => props.size || "30px"};
  height: ${(props) => props.size || "30px"};
  border-radius: 50%;
  border: ${(props) => props.borderSize || "5px"} solid
    ${(props) => props.theme.grayLight};
  border-top: ${(props) => props.borderSize || "5px"} solid transparent;
  border-bottom: ${(props) => props.borderSize || "5px"} solid transparent;
  /* border-top: 2px solid ${(props) => props.theme.primarys}; */
  animation: spin 1s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
const LoadingSpin = ({ size, borderSize }) => {
  return <LoadingStyle size={size} borderSize={borderSize}></LoadingStyle>;
};

export default LoadingSpin;
