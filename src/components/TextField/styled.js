import styled from "styled-components";

export const Input = styled.input.attrs(({ type }) => ({
    type: type || "text",
}))`
 border: none;
 border-bottom: 1px solid #b5b5b5;
 outline: none;
 font-size: 18px;
 font-weight: 400;
 padding: 10px 0;
 width: 470px;
 color: #282828;
 margin-bottom: 30px;
 
&::placeholder {
     color: ${({ error }) => (error ? "E6110C" : "#282828")};
}


&:disabled {
    opacity: 0.3;
}
`;