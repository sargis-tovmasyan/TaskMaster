import React from 'react';
import { Menu, type MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const options: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
  
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
  
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    },
  );

const SideBar: React.FC = () => {
  return (
      <Menu
      theme="dark"
      mode="vertical"
      // defaultSelectedKeys={['2']}
      items={options}
      style={{ flex: 1, minWidth: 0 }}
    /> 
  );
};

export default SideBar;