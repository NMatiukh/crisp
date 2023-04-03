import styled from 'styled-components';
import {Header as AntdHeader} from 'antd/es/layout/layout'

const Header = styled(AntdHeader)`
  background-color: #000;
  color: #fff;
  min-height: 115px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  img{
    cursor: pointer;
  }
  
`;
export default Header;