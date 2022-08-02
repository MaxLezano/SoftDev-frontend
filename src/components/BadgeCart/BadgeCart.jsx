import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function BadgeCart({ badgeCount, styleIcon, colorCircle }) {
  return (
    <Badge badgeContent={badgeCount} color={colorCircle}>
      <ShoppingCartIcon sx={styleIcon} />
    </Badge>
  );
}

export default BadgeCart;