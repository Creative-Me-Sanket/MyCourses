import React from "react";
import bg from "./Assets/maintenance_bg.png"

const SiteUnderMaintenace = () => {
    const myStyle={
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'bottom right',
        backgroundSize: 'cover',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
    };
    return(
        <React.Fragment>
        <div style={myStyle}>
        <section class="h-p100 bg-transparent">
		<div class="container h-p100">
		  <div class="row h-p100 align-items-center justify-content-center text-center">
			  <div class="col-lg-7 col-md-10 col-12">
				  <div class="p-50">
					  <h1 class="text-primary p-3" style={{fontSize: "16rem", marginTop: "40px"}}> <i class="fa fa-gear fa-spin"></i></h1>
					  <h1 class="fw-bolder mt-1" style={{fontSize: "30px"}}>UNDER MAINTENANCE!</h1>
					  <h3 style={{fontSize: "25px", fontWeight: "normal"}}>We're sorry for the inconvenience.</h3>
					  <h4 style={{fontSize: "25px"}}>Please check back later.</h4>	
				  </div>
			  </div>				
		  </div>
		</div>
	</section>
        </div>
        </React.Fragment>
    )
}

export default SiteUnderMaintenace;