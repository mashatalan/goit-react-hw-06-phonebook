import styled from '@emotion/styled';

export const Button = styled.button`
  /* margin-left: auto; */
  padding: 5px;
  height: 30px;
  border: 1px solid plum;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: rgba(142, 0, 0, 0.24) 0 3px 8px;
    background-color: plum;
    border-color: transparent;
    color: #fff;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ControlWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;
