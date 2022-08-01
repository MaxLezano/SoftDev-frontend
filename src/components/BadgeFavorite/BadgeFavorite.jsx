import React from 'react';
import Badge from '@mui/material/Badge';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

function BadgeFavorite({ badgeCount, styleIcon, colorCircle }) {
  return (
    <Badge badgeContent={badgeCount} color={colorCircle}>
      <FavoriteRoundedIcon sx={styleIcon}/>
    </Badge>
  );
}

export default BadgeFavorite;