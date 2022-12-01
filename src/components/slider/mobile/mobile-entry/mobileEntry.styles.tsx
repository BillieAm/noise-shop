import styled from "styled-components/macro";

export const EntryItemWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  img {
    height: 12em;
    object-fit: cover;
  }
`;

export const DetailsBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
