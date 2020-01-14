import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedCard from './MainFeaturedCard';
import FeaturedCard from './FeaturedCard';
import Paper from '@material-ui/core/Paper';
// import ImgMediaCard from './ImgMediaCard';

const useStyles = makeStyles(theme => ({
	mainGrid: {
		marginLeft: theme.spacing(3)
	}
}));

const mainFeaturedCard = {
	title: 'Computational and Informatics Resources for Glycoscience',
	description:
		'GlyGen is a data integration and dissemination project for carbohydrate and glycoconjugate related data. GlyGen retrieves information from multiple international data sources and integrates and harmonizes this data. This web portal allows exploring this data and performing unique searches that cannot be executed in any of the integrated databases alone.',
	image: 'https://source.unsplash.com/random',
	imgText: 'main image description',
	linkText: 'Continue reading…'
};

const featuredCards = [
	{
		title: 'Glycan',
		description:
			'Search for glycan structures based on their chemical and structural properties.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Glycan'
	},
	{
		title: 'Protein',
		description:
			'Search for proteins based on their sequences, accessions, and annotations.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Protein'
	},
	{
		title: 'Enzyme',
		description:
			'Search for enzymes based on protein accession, gene name, and glycan.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text'
	},
	{
		title: 'Quick Search',
		description:
			'Search for glycans, proteins, species or disease using queries prepared to provide answers to complex biological questions with minimal user input.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Quick Search'
	},
	{
		title: 'Composition Search',
		description: 'Composition search based on their ...',
		image: 'https://source.unsplash.com/random',
		imageText: 'Composition Search'
	},
	{
		title: 'Statistics',
		description:
			'GlyGen data visualization via charts, diagrams, and chart bars.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text'
	}
];

export default function Home() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<MainFeaturedCard post={mainFeaturedCard} />
			<Container maxWidth='xl'>
				<main>
					<Grid item xs={9}>
						<Grid container spacing={4}>
							{featuredCards.map(card => (
								<FeaturedCard key={card.title} post={card} />
							))}
						</Grid>
					</Grid>
					<Grid item xs={3}>
						<Grid container spacing={3} className={classes.mainGrid}>
							<Grid item xs={12}>
								<Paper className={classes.paper}> </Paper>
							</Grid>
						</Grid>
					</Grid>
				</main>
			</Container>
		</React.Fragment>
	);
}
