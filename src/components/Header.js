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
  .ant-btn-link, .ant-typography{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #fff;
  }
  .ant-btn-link:hover, .ant-typography:hover{
    color: #fff;
  }
  
`;
export default Header;