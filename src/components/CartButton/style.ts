import { styled } from '@stitches/react';

export const ContainerButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,

  position: 'relative',

  width: '3rem',
  height: '3rem',

  '&:hover': {
    backgroundColor: '$gray700'
  },

  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  variants: {
    color: {
      gray: {
        backgroundColor: '$gray800',
        color: '$gray500'
      },
      green: {
        backgroundColor: '$green500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$green300'
        }
      }
    },
  },

  defaultVariants: {
    color: 'gray',
  }
});
