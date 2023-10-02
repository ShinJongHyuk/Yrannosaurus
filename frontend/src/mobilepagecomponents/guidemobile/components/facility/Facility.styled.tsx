import styled from 'styled-components';

const StyledMoblilFacilitySelectContainer = styled.div.attrs<any>((props) => ({}))`
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.name === props.select && props.theme.colors.menu};
`;

const StyledMobileFacilityImageContainer = styled.div``;
const StyledMobileFacilityImage = styled.img.attrs<any>((props) => ({
  src: `/markers/${props.marker}.png`,
}))``;

const StyledMobileFacility = styled.div.attrs<any>((props) => ({}))`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => (props.select === props.name ? props.theme.colors.main : props.theme.colors.white)};
`;
export {
  StyledMoblilFacilitySelectContainer,
  StyledMobileFacilityImageContainer,
  StyledMobileFacilityImage,
  StyledMobileFacility,
};