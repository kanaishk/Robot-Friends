import React from 'react';

class Scroll extends React.Component {
	render() {
		return (
			<div style={{overflowY: 'scroll hidden', border: '1px solid black', height: 'auto'}}>
				{this.props.children}
			</div>
		);
	}
};

export default Scroll;