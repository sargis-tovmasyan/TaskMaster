import { Menu, type MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();

  const options: MenuProps['items'] = [
    { key: '/', label: 'Home' },
    { key: '/about', label: 'About' },
    { key: '/contacts', label: 'Contact' },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={options}
      onClick={onClick}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
};

export default NavigationBar;

