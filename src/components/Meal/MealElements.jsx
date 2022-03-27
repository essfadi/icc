import styled from "styled-components";

export const MealsBanner = styled.section`
  background: #3f72af;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 800px;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MealImage = styled.img`
  height: 30rem;
  width: 50%;
  @media only screen and (max-width: 768px) {
    margin-top: 20rem;
  }
`;
export const MealTypography = styled.div`
  color: #fff;
  font-size: 200%;
`;
export const SpecialWords = styled.span`
  color: #243d25;
  font-weight: bold;
`;
export const Chef = styled.img`
  position: absolute;
  height: 8rem;
  width: 8rem;
  z-index: 20;
  transform: rotate(20deg);
  top: 25%;
  left: 78%;
  @media only screen and (max-width: 1270px) {
    display: none;
  }
`;
export const Dishes = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #dbe2ef;
  padding: 5rem;
`;
export const DishesTitle = styled.h1`
  color: #d5384c;
  font-size: 250%;
  text-align: center;
  margin-bottom: 1rem;
`;
export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  gap: 1.5rem;
`;
export const Box = styled.div`
  padding: 2.5rem;
  background: #fff;
  border-radius: 0.5rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;
  text-align: center;
`;
export const ImageHolder = styled.div`
  height: 25rem;
  width: 100%;
  padding: 1.5rem;
  overflow: hidden;
  position: relative;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`;
export const Calory = styled.span`
  color: #3F72AF;
  font-weight: bolder;
  margin-right: 1rem;
  font-size: 2.5rem;
`;
export const DishContent = styled.div`
  padding: 2rem;
  padding-top: 0;
`;
export const H3 = styled.h3`
  color: #DA741C;
  font-size: 2.5rem;
  text-transform: capitalize;
`;
export const Para = styled.p`
  color: var(--light-color);
  font-size: 1.6rem;
  padding: 0.5rem 0;
  line-height: 1.5;
`;