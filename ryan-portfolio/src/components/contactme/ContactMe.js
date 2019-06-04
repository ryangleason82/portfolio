import React from "react";

const ContactMe = () => {
	return (
		<div id="contactme" className="container mt-3">
			<h3 className="ui horizontal header divider mt-5">
				<p>Contact Me</p>
			</h3>
			<div className="text-center mb-5">
				<a
					href="mailto:ryangleason82@gmail.com"
					className="text-center btn btn-lg btn-dark mb-5"
				>
					Email Me!
				</a>
			</div>
		</div>
	);
};

export default ContactMe;
