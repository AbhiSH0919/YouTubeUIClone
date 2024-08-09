import React from "react";

export default function FooterTab() {
	return (
		<ul
			className="fw-semibold text-body-secondary d-flex flex-column align-items-start gap-3 px-3 py-2 mb-1 list-unstyled"
			style={{ fontSize: ".9rem" }}
		>
			<li className="ms-2">
				About Press Copyright Contact us Creators Advertise Developers.
			</li>
			<li className="ms-2">
				Terms Privacy Policy & Safety How YouTube works Test new features
			</li>
			<li className="fw-normal ms-2">© 2024 Google LLC</li>
		</ul>
	);
}
