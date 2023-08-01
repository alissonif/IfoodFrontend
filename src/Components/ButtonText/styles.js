import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`

/* ButtonText */
background: none;
border: none;
color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.GRAY_100 : theme.COLORS.RED};

/* color: var(--light-light-100, #FFF); */
text-align: center;

/* Poppins/100-medium */
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 171.429% */
`;