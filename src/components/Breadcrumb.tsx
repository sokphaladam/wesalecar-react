import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

export function Breadcrumb() {
	const history = useHistory();
	const [pathname, setPathname] = useState(history.location.pathname);

	history.listen(listen => {
		setPathname(listen.pathname)
	})

	return (
		<div className="full-row breadcrumb-bar bg-gray py-3">
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<h5 className="text-secondary" style={{ textTransform: 'capitalize' }}>{pathname === '/' ? 'Shop' : pathname.split('/')[1]}</h5>
					</div>
					<div className="col-sm-6">
						<nav aria-label="breadcrumb" className="float-right">
							<ol className="breadcrumb mb-0 bg-transparent p-0 mt-2 mt-lg-1">
								<li className="breadcrumb-item"><Link to="/" style={{ color: '#83b735' }}>Page</Link></li>
								<li className="breadcrumb-item active" style={{ textTransform: 'capitalize' }} aria-current="page">{pathname === '/' ? 'Shop' : pathname.split('/')[1]}</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}