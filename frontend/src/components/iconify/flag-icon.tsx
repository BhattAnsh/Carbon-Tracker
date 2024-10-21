import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { iconifyClasses } from './classes';

// ----------------------------------------------------------------------

export type FlagIconProps = BoxProps & {
  code?: string; // ISO country code
};

export const FlagIcon = forwardRef<HTMLSpanElement, FlagIconProps>(
  ({ code, className = '', sx = {}, ...other }, ref) => {
    const baseStyles: SxProps<Theme> = {
      width: 26,
      height: 20,
      flexShrink: 0,
      overflow: 'hidden',
      borderRadius: '5px',
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      bgcolor: 'background.neutral',
    };

    // If no code is provided, return null to avoid rendering
    if (!code) return null;

    return (
      <Box
        ref={ref}
        component="span"
        className={`${iconifyClasses.flag} ${className}`}
        sx={{ ...baseStyles, ...sx }}
        {...other}
      >
        <Box
          component="img"
          loading="lazy"
          alt={`Flag of ${code.toUpperCase()}`}
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${code.toUpperCase()}.svg`}
          sx={{
            width: 1,
            height: 1,
            maxWidth: 'unset',
            objectFit: 'cover',
          }}
        />
      </Box>
    );
  }
);

// Ensure the display name is set for better debugging
FlagIcon.displayName = 'FlagIcon';

export default FlagIcon;
