import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef('image');

  return {
    author: {
      color: theme.colors.dark[2],
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
    },

    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      cursor: 'pointer',
      height: 280,
      position: 'relative',

      [`&:hover .${image}`]: {
        transform: 'scale(1.03)',
      },
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'flex-end',
      position: 'relative',
      zIndex: 1,
    },

    image: {
      backgroundSize: 'cover',
      bottom: 0,
      left: 0,
      position: 'absolute',
      ref: image,
      right: 0,
      top: 0,
      transition: 'transform 500ms ease',
    },

    overlay: {
      backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: '20%',
    },

    title: {
      color: theme.white,
      marginBottom: 5,
    },
  };
});
