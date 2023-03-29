import styled from 'styled-components';
import {Menu as AntdMenu} from 'antd'

const Menu = styled(AntdMenu)`
  background-color: #000;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #FFFFFF;

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