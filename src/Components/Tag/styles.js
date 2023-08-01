import styled from 'styled-components';

export const Container = styled.span`
/* Tags */
/* display: flex; */
padding: 4px 8px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 5px;
background: var(--dark-dark-1000, #192227);

margin-right: 12px;

/* Text */

color: var(--light-light-100, #FFF);
text-align: center;

/* Poppins/100-medium */
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 171.429% */
.icon {
  width: 20px;
  height: 20px;
}
`