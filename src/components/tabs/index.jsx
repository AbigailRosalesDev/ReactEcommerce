import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const TabsMenu = ({ current, items }) => {
  /*A donde va a navegar */
  const navigate = useNavigate();

  const handleChange = (_, newValue) => {
    navigate('/products/' + newValue);
  };
  
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={current}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {
          items.map((item, index) => <Tab key={item.id + index} label={item.title} value={item.id} />)

        }

      </Tabs>

    </Box>
  );

}
export default TabsMenu;