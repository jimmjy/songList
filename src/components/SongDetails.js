import React from 'react';

import { connect } from 'react-redux';

import './SongDetails.scss';

const SongDetails = ({ song }) => {
	if (!song) {
		return <div>Select a song</div>;
	}

	return (
		<div className="ui card">
			<div class="content">
				<div class="header">Details for:</div>
			</div>
			<div className="content">
				<div class="summary">
					<a>Title:</a> {song.title}
				</div>
				<div class="summary">
					<a>Duration:</a> {song.duration}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		song: state.selected,
	};
};

export default connect(mapStateToProps)(SongDetails);
