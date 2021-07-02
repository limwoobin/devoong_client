import React from 'react';
import '../main.scss';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './MobileRecentPosts.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: 'bold',
      color: '#c6c6c6',
      width: '100%',
      padding: '0 15px',
    },
  }),
);

export default function MobileRecentPosts() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Accordion style={{backgroundColor: '#3d3d3d'}}>
                <AccordionSummary style={{backgroundColor: '#3d3d3d'}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>최근 게시물 보기</Typography>
                </AccordionSummary>
                    <AccordionDetails className="accordionDetails">
                    <Typography className="typography">
                        <span>123123</span>
                    </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                    <Typography className="typography">
                        <span>123123</span>
                    </Typography>
                    </AccordionDetails>
            </Accordion>
        </div>
    )
}