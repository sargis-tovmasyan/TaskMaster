import { Menu, type MenuProps } from 'antd';

const options: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

const NavigationBar: React.FC = () => {
    return (
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={options}
        style={{ flex: 1, minWidth: 0 }}
      /> 
    );
};

export default NavigationBar;