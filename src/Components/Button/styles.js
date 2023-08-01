import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
/* Figma */
/* Button */
display: flex;
width: 216px;
/* width: 100%; */
padding: 12px 32px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;

border-radius: 5px;
background-color: ${({ theme }) => theme.COLORS.RED};

/* height: 56px; */
/* ButtonText */
color: ${({ theme }) => theme.COLORS.WHITE};
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px;
border: none;

&:disabled {
        /* cursor: auto; */
        opacity: 0.5;
    }

`