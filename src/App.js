import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import TypingText from './components/TypingText';
import MineSweeperEscape from './components/MineSweeperEscape';
import MomsBookClub from './components/MomsBookClub.js';

const useStyles = makeStyles((theme) => ({
  app: {
    '& #about-me': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 60px)', // subtracting the height of the header
      backgroundColor: '#f4f4f4',
      paddingTop: '60px', // adding padding top equal to the height of the header
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
      },
    },
    '& #projects': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 60px)', // subtracting the height of the header
      backgroundColor: '#f4f4f4',
      paddingTop: '60px', // adding padding top equal to the height of the header
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
      },
    },
    '& #contact': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 60px)', // subtracting the height of the header
      backgroundColor: '#f4f4f4',
      paddingTop: '60px', // adding padding top equal to the height of the header
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
      },
    },
    '& .about-me-content': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '80%',
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    '& .portrait': {
      width: '30%',
      borderRadius: '50%',
      objectFit: 'cover',
      [theme.breakpoints.down('sm')]: {
        width: '10%',
      },
    },
    '& .typing-text': {
      width: '70%',
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0,
        marginTop: theme.spacing(2),
      },
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.app}>
      <Header />
      <main>
        <Box id="about-me">
          <h2>About Me</h2>
          <Grid container className={classes['about-me-content']}>
            <Grid item xs={12} md={6}>
              <Box className={classes.portrait}>
                <img src="https://drive.google.com/uc?export=download&id=1U4Inr_HO-0hBzfYjjxtD-bXeZRYi7P2_" alt="Your portrait" style={{ width: '100%', height: 'auto' }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className={classes['typing-text']}>
              <TypingText />
              <Resume />
            </Grid>
          </Grid>
        </Box>
        <Box id="contact">
          <h2>Contact Me</h2>
          <Box className="contact-content">
            <ContactForm />
            <Box className="contact-links">
              <a href="mailto:arsena0202@gmail.com" className="contact-link">Email</a>
              <a href="https://github.com/aaldea02" className="contact-link">GitHub</a>
              <a href="https://www.linkedin.com/in/your_username/" className="contact-link">LinkedIn</a>
            </Box>
          </Box>
        </Box>
        <Box id="projects">
          <h2>Personal Projects</h2>
          <Box className="project">
            <h3>Diamond Pathfinder</h3>
            <p>
              The Diamond Pathfinder project is a pathfinding optimization study for the popular game Minecraft, specifically focusing on its Baritone mod. I built and compared two classic pathfinding algorithms, Bellman-Ford and Dijkstra's, implemented in Java to analyze their efficiency in the game environment. By logging the results using Java and MySQL, I was able to identify the optimal choice for pathfinding in Minecraft's Baritone mod, improving in-game navigation and resource gathering. Through this project, I developed skills in Java programming, algorithm design, and data analysis using MySQL.
            </p>
            <Box className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lS4vblYZpMA"
                title="Diamond Pathfinder"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Box>
          </Box>
          <MineSweeperEscape />
          <MomsBookClub />
        </Box>
      </main>
      <Box className="space"></Box>
    </Box>
  );
}

export default App;
