import { styled } from "..";

export const HomeContainer = styled('main', {
  maxWidth: "calc(100vw - ((100vw - 1180px) /2 ) )",
  display: 'flex',
  width: '100%',
  // gap: '3rem',
  marginLeft: 'auto',
  minHeight: 656,


});


export const Product = styled('a', {

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  // padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',

  img:{
    objectFit: 'cover',
  },
  
  footer :{
    position: 'absolute',
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    borderRadius: 6,
    padding: '2rem',
    

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    

    backgroundColor: "rgba(0,0,0,0.6)",
    
    transform: 'translateY(110%)',
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    "strong": {
      fontSize: '$lg',
    },

    span: {
      fontSize: '$xl',
      color: '$green300',
      fontWeight: 'bold',
    }
  },

  "&:hover": {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    }
  }
});