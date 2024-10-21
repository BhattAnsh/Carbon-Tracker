import { forwardRef } from 'react';
import { Icon, disableCache } from '@iconify/react';
import Box from '@mui/material/Box';
import { iconifyClasses } from './classes';
import type { IconifyProps } from './types';

// ----------------------------------------------------------------------

export const Iconify = forwardRef<SVGElement, IconifyProps>(
  ({ className = '', width = 20, sx = {}, ...other }, ref) => {
    return (
      <Box
        ref={ref}
        component={Icon}
        className={`${iconifyClasses.root} ${className}`}
        sx={{
          width,
          height: width,
          flexShrink: 0,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      />
    );
  }
);

// Disable Iconify's cache for local icons
disableCache('local');

Iconify.displayName = 'Iconify'; // Ensure forwardRef works properly

export default Iconify;
