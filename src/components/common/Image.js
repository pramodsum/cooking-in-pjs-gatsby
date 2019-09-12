import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: ${props => props.showBorder && '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'};
  position: relative;
  height: ${props => props.size ? `${props.size}px` : '100%'};
  width: ${props => props.size ? `${props.size}px` : '100%'};
`;

const Image = styled.div`
  display: block;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  object-fit: cover;
  height: 0;
  padding-top: 100%;
  margin: 1rem 0;
  max-height: 500px;
  transition: opacity .4s;
  position: relative

  &:hover {
    opacity: 0.75;
  }
`;

const Img = ({ wrapperSize, showBorder = true, ...rest }) => (
  <Wrapper size={wrapperSize} showBorder={showBorder}>
    <Image {...rest} />
  </Wrapper>
);

export const BackgroundImage = styled(Img)({
  backgroundSize: 'contain',
});

export default Img;