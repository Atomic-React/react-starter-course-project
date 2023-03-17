import React from 'react';

function SectionTitle({ content }) {

	const h2Style =  {
		color: '#6c3483',
		textDecoration: 'underline',
	};

	return (
		<h2 style={h2Style}>{ content }</h2>
	);
}

export default SectionTitle;