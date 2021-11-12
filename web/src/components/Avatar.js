import react from 'react';
import Avatar from '@mui/material/Avatar';

function AvatarComponent({ imageUrl, width, height, variant, alt, fallbacks }) {
  return (
    <div>
      <Avatar alt={alt} src={imageUrl} sx={{ width, height }} variant={variant}>
        {fallbacks}
      </Avatar>
    </div>
  );
}

export default AvatarComponent;
