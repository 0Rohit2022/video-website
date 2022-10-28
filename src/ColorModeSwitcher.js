import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      zIndex={"overlay"}
      pos={'fixed'}
      top={'4'} 
      // 4 means 16px so basically 1 means 4px chakra ui has its own units like 1,2,4 which is probably equal to some pixels
      right={'4'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};


export default ColorModeSwitcher