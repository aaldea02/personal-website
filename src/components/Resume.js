import React from 'react';
import { Button, makeStyles, Box, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1),
    width: '100%',
    marginTop: theme.spacing(10),
  },
  button: {
    fontSize: '1.2rem',
    fontFamily: 'Roboto, sans-serif',
    color: '#1d1f2f',
    backgroundColor: '#b1a5ca',
    padding: theme.spacing(1.5, 2.5),
    '&:hover': {
      backgroundColor: '#3a3d58',
      color: '#847a99',
    },
    marginRight: theme.spacing(0.5),
  },
  previewContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  preview: {
    position: 'absolute',
    width: '20vw',
    height: '25vh',
    marginTop: theme.spacing(1),
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
  },
}));

function Resume() {
  const classes = useStyles();

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1a7Ej2kGbIfddAJ9WO23X368WJgfeXBsT';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box className={classes.container}>
      <Button onClick={handleClick} className={classes.button}>
        Download Resume
      </Button>
      <Box className={classes.previewContainer}>
        <Paper className={classes.preview}>
          <iframe
            src="https://drive.google.com/file/d/1a7Ej2kGbIfddAJ9WO23X368WJgfeXBsT/preview"
            allow="autoplay"
          ></iframe>
        </Paper>
      </Box>
    </Box>
  );
}

export default Resume;
