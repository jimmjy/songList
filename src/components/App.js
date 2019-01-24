import React from 'react';

import SongsList from './SongsList';
import SongDetails from './SongDetails';

import { connect } from 'react-redux';

import './App.scss';

const App = props => {
	return (
		<div className="ui piled segment">
			<div class="ui huge center aligned header">Song Details</div>
			<div className="ui container grid">
				<div className="ui row">
					<div className="column eight wide">
						<SongsList />
					</div>
					<div className="column eight wide">
						<SongDetails />
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		selected: state.selected,
	};
};

export default connect(mapStateToProps)(App);
