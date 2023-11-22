import { styled } from "@stitches/react";
import * as Dialog from '@radix-ui/react-dialog';

export const CartContent = styled(Dialog.Content, {
  
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,

  width: "30rem",
  backgroundColor: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0,0,0,0.8)',

  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontSize: '$lg',
    fontWeight: '700',
    marginBottom: '2rem',
    color: '$gray100',
  },
  
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    flex: 1,
  },
  
  "@media(max-width: 768px)": {
    width: '100%',
    padding: '2rem',
    paddingTop: '1.75rem',
    boxShadow: 'none',
    overflowY: 'scroll',
  }

});

export const CartClose = styled(Dialog.Close, {

  background: 'transparent',
  border: 'none',
  color: '$gray500',
  position: 'absolute',

  top: '1.75rem',
  right: '1.75rem',
  cursor: 'pointer',
});


export const CartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  height: '5.8125rem',

});

export const CartProductImage = styled("div", {

  height: '5.8125rem',
  width: '6.3125rem',
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,

  image: {
    objectFit: 'cover',
  }
});

export const CartProductDetails = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  height: '100%',

  p: {
    fontSize: '$md',
    color: '$gray300',
  },
  
  strong:{
    marginTop: 4,
    fontSize: '$md',
    fontWeight: '700',
  },

  button:{
    marginTop: 'auto',
    border: 'none',
    color: '$green500',
    width: "max-content",
    fontSize: '1rem',
    fontWeight: '700',
    background: 'transparent',
    

  }
});

export const CartFinalization = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button :{
    width: '100%',
    background: '$green500',
    color: '$white',
    fontSize: '$md',
    height: '4.3125rem',
    borderRadius: 8,
    border: 'none',
    fontWeight: '700',

    "&:disabled": {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&: not(:disabled)hover': {
      backgroundColor: '$green300',
    },
  },
  "@media(max-width: 768px)": {
    marginTop: "1rem",
  }




});


export const FinalizationDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 55,
  

  div:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',


    p:{
      fontSize: '$md',
      color: '$gray300',
    },


    "&:last-child": {
      fontWeight: 'bold',

      span: {
        fontSize: '$md',
        
      },

      p: {
        color: '$gray100',
        fontSize: '$xl',
      }
    }
  },

  "@media(max-width: 768px)": {
    marginBottom: 20,
    paddingTop: 20,
  }

});

