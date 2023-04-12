import styled from 'styled-components';
import {Menu as AntdMenu} from 'antd'


const Menu = styled(AntdMenu)`
  background-color: #000;
  text-transform: uppercase;
  min-width: 400px;
  color: #FFFFFF !important;
  .ant-menu-item-active::after {
    background-color: #EB5757 !important;
    border-bottom-color: #EB5757 !important;
  }

  .ant-menu-item-selected::after {
    background-color: #EB5757 !important;
    border-bottom-color: #EB5757 !important;

  }
`;
export default Menu;