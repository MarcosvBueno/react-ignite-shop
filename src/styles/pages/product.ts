import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: "1fr 1fr" ,
  alignItems: "stretch",
  gap: '4rem',


  maxWidth: 1180,
  margin: '0 auto',

  "@media(max-width: 768px)": {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '0rem 1.5rem',
    overflowX: 'hidden',
  }
});

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 656,

    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    padding: '0.25rem',
    cursor: 'pointer',
    display : 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img : {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },

    "@media(max-width: 768px)": {

      width: "100%",

      height: 'auto',
    }

});


export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',


  h1: {
    fontSize: '$2xl',
    color: '$gray300',
 
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },
  
  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: '1.6rem',
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    borderRadius: 8,
    border: 0,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    color: '$white',

    "&:disabled": {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&: not(:disabled)hover': {
      backgroundColor: '$green300',
    },
  },
  
  "@media(max-width: 768px)": {

    h1: {
      fontSize: '$xl',
    },

    button: {
      marginTop: '2rem',
      marginBottom: '2rem',
    }
  }
  

});
