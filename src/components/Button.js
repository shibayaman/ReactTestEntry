import styled from 'styled-components';

export default styled.button`
background-color: ${({ bgColor }) => bgColor };
font-size: 1rem;
color: white;
width: 5rem;
padding: 0.2rem;
border-radius: 0.5rem;
border: 0;
margin: 0 0.5rem 0 0.5rem;
`;