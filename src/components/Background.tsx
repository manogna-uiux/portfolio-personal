import styled from 'styled-components';
import vanGrid from '../assets/Van Grid2.png';
import star from '../assets/Star 22.png';
import spotlight from '../assets/Spotlight.png';

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

const SpotlightImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300%;
  opacity: 0.6;
  mix-blend-mode: screen;
  z-index: 0;
`;

const StarImage = styled.img`
  position: absolute;
  right: -2rem;
  top: -2rem;
  opacity: 1;
  z-index: 1000;
`;

const Background = () => {
  return (
    <BackgroundContainer>
      <Grid />
      <StarImage src={star} alt="Star" />
      <SpotlightImage src={spotlight} alt="Spotlight" />
    </BackgroundContainer>
  );
};

export default Background; 