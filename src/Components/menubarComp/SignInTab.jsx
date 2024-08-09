import React from "react";

// ==============================COMPONENTS==================================
import { SignInBtn } from "../../utility/Utility";

export default function SignInTab() {
	return (
		<div className="d-flex flex-column align-items-start border-bottom border-secondary px-3 py-2">
			<p className="fw-medium ms-3">
				Sign in to like videos, comment, and subscribe.
			</p>

			<SignInBtn />
		</div>
	);
}
