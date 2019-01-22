import React from 'react';
import { withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

import ExpansionPanel from './ExpansionPanel';
import ExpansionPanelSummary from './ExpansionPanelSummary';
import Nav from './Nav';

const styles = theme => ({
    nav: {
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '1rem',
        },
    },
    icon: {
        fontSize: '36px'
    }
});

const home = {
    name: 'Home',
    slug: '/'
};

const categories = [
    home,
    {
        name: 'Herbivores',
        slug: '/tag/herbivores'
    },
    {
        name: 'Carnivores',
        slug: '/tag/carnivores'
    },
    {
        name: 'Sugar Rush',
        slug: '/tag/desserts'
    },
    {
        name: 'Giggle Juice',
        slug: '/tag/giggle-juice'
    },
    {
        name: 'Eating Out',
        slug: '/tag/eating-out'
    }
];

const Menu = ({ activeCategory = home.slug, classes }) => (
    <nav className={classes.nav}>
        <Hidden mdUp implementation="css">
            <ExpansionPanel defaultExpanded={false}>
                <ExpansionPanelSummary expandIcon={<MenuIcon className={classes.icon} />} />
                <Nav categories={categories} activeCategory={activeCategory} />
            </ExpansionPanel>
        </Hidden>
        <Hidden smDown implementation="css">
            <Nav categories={categories} activeCategory={activeCategory} />
        </Hidden>
    </nav>
);

export default withStyles(styles, { withTheme: true })(Menu);