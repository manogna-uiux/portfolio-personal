import styled from 'styled-components';
import vanGrid from '../assets/Van Grid2.png';
import noise from '../assets/noise.png';
import star from '../assets/Star 22.png';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow: hidden;
  display: flex;
`;

const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${vanGrid});
  background-position: 50% 0;
  opacity: 0;
`;

const Noise = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${noise});
  background-size: cover;
  background-position: center;
  mix-blend-mode: overlay;
  opacity: 0.4;
  pointer-events: none;
`;

const StarImage = styled.img`
  position: absolute;
  right: -2rem;
  top: -2rem;
  opacity: 0.7;
  z-index: 1000;
`;

const Background = () => {
  return (
    <BackgroundContainer>
      <Grid />
      <Noise />
      <StarImage src={star} alt="Star" />
    </BackgroundContainer>
  );
};

export default Background; 