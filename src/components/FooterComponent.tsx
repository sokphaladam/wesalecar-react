import React from 'react';

export function FooterComponent(){
  return(
    <footer 
      className="full-row p-0 overlay-secondary text-white footer-two" 
      style={{
        backgroundImage: `url(${require('../assets/images/background/14.png')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'        
      }}
    >
			<div className="full-row">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-sm-12">
							<div className="footer-widget mb-5">
								<h3 className="widget-title mb-4">Over 10000 Customers Already Connected</h3>
								<p>Libero consectetuer fames montes habitasse lorem hendrerit dictumst sit blandit. Commodo justo. Blandit lobortis metus et. Dignissim netus netus convallis hendrerit. Molestie penatibus litora cubilia etiam.</p>
								<div className="footer-widget media-widget mt-5">
									<a href="#"><i className="fab fa-facebook-f"></i></a>
									<a href="#"><i className="fab fa-twitter"></i></a>
									<a href="#"><i className="fab fa-linkedin-in"></i></a>
									<a href="#"><i className="fab fa-google-plus-g"></i></a>
									<a href="#"><i className="fab fa-pinterest-p"></i></a>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="row row-cols-1 row-cols-sm-3">
								<div className="col">
									<div className="footer-widget footer-nav mb-5">
										<h4 className="widget-title mb-4">Learn More</h4>
										<ul>
											<li><a href="#">Privacy statement</a></li>
											<li><a href="#">Modern slavery statement</a></li>
											<li><a href="#">Perrys past & present</a></li>
										</ul>
									</div>
									<div className="footer-widget footer-nav mb-5">
										<h4 className="widget-title mb-4">About Special Service</h4>
										<ul>
											<li><a href="#">Power Steering</a></li>
											<li><a href="#">Engine Overhaul</a></li>
											<li><a href="#">Tyre Balancing</a></li>
										</ul>
									</div>
								</div>
								<div className="col">
									<div className="footer-widget footer-nav mb-5">
										<h4 className="widget-title mb-4">Quick Links</h4>
										<ul>
											<li><a href="#">Dashboard login</a></li>
											<li><a href="#">Download app</a></li>
											<li><a href="#">Careers</a></li>
										</ul>
									</div>
									<div className="footer-widget footer-nav mb-5">
										<h4 className="widget-title mb-4">Legal Process</h4>
										<ul>
											<li><a href="#">Cookie policy</a></li>
											<li><a href="#">Terms of services</a></li>
											<li><a href="#">Tax strategy</a></li>
										</ul>
									</div>
								</div>
								<div className="col">
									<div className="footer-widget footer-nav mb-5">
										<h4 className="widget-title mb-4">Locations</h4>
										<ul>
											<li><a href="#">United State</a></li>
											<li><a href="#">Australia</a></li>
											<li><a href="#">United Arab Amirat</a></li>
											<li><a href="#">United Kingdom</a></li>
											<li><a href="#">Canada</a></li>
											<li><a href="#">Romania</a></li>
											<li><a href="#">South Africa</a></li>
											<li><a href="#">Spain</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="copyright text-white pt-5">
				<div className="container py-4">
					<div className="row">
						<div className="col-lg-6">
							<span>Copyright © 2020 Carhut All right reserved</span>
						</div>
						<div className="col-lg-6">
							<ul className="line-menu float-right list-color-gray">
								<li><a href="#">Advertise</a></li>
								<li>|</li>
								<li><a href="#">Questions</a></li>
								<li>|</li>
								<li><a href="#">Disclaimer</a></li>
								<li>|</li>
								<li><a href="#">Privacy Policy</a></li>
								<li>|</li>
								<li><a href="#">Site Map</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}