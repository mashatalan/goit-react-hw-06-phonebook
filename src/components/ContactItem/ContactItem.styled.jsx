import styled from '@emotion/styled';

export const Item = styled.li`
  min-width: 280px;
  display: flex;
  gap: 10px;
  font-family: 'Segoe UI';
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const Button = styled.button`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 80px;
  border: 2px solid plum;
  border-radius: 4px;
  outline: none;
  font-size: 12px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    box-shadow: rgba(22, 100, 226, 0.24) 0 3px 8px;
    background-color: plum;
    border-color: transparent;
    color: #fff;
  }
  svg {
    width: 16px;
    height: 16px;
  }
`;
