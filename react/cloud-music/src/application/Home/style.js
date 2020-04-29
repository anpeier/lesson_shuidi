import styled from 'styled-components';
import style from '../../assets/global-style.js';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  &>span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`;