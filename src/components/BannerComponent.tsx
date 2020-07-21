import React from 'react';

export function BannerComponent(){
  return(
    <div
      className="full-row page-banner-image" 
      // style="background-image: url(_assets/images/background/1.html); background-repeat: no-repeat;"
      style={{
        backgroundImage: `url(${require('../assets/images/background/1.png')})`,
        backgroundRepeat: 'no-repeat'
      }}
    >
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-9 mx-auto pt-5 sm-pt-0">
						<div className="product-search">
							<h3 className="text-white text-center mb-4">
                <span className="mr-3 h3 text-white">20,32,345</span>Offered Cars Available
              </h3>
							<form className="form-inline" action="#" method="post">
								<select className="form-control m-0">
									<option>Categories</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
								<input type="text" className="form-control m-0" name="search" placeholder="Search product..."/>
								<button type="submit" name="submit"><i className="fas fa-search text-white"></i></button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}