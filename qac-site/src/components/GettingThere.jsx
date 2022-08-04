import React from "react";

const GettingThere = () => {
	return (<>
		<header>
			<h1>Getting There</h1>
			<p>Here you can find directions to the venue, information on local public transport and parking.</p>
		</header>
		<iframe width="399" height="397"
		        id="gmap_canvas"
		        src="https://maps.google.com/maps?width=399&amp;height=397&amp;hl=en&amp;q=St%20Katherine's%20Way%20London+(International%20House)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
		<a href='https://embedmap.org/'></a>
		<script type='text/javascript'
		        src='https://embedmaps.com/google-maps-authorization/script.js?id=27f0e6ffc7729411a13680bda27282c29f99658d'></script>
	</>);
}

export default GettingThere;