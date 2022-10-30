import sLOGO from '../images/sLOGO.jpg'
import Users from './Users';
function AdminDashbaord(){

    return(
        <div>
            {/* <nav class="navbar navbar-inverse">
            <div class="container-fluid">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>                        
            </button>
            <a class="navbar-brand" href=""><img src={sLOGO} height="80px" width="120px" ></img></a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
            </div>
        </div>
        </nav> */}


<div className="container-fluid fluid-padding">
    <nav className="navbar navbar-expand-lg bg">
    <div className="container-fluid div-width shawdow">
      <a className="navbar-brand" href="#"><img src={sLOGO} height="80px" width="120px" ></img></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse div-padding " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
          <li className="nav-item">
            <a className="nav-link active text-light item-font" aria-current="page" href="/">Home</a>
          </li>
          
          
          <li className="nav-item">
            <a className="nav-link active text-light item-font " aria-current="page" href="/Logout">Logout</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light item-font " aria-current="page" href="/AdminDashboard">Admin</a>
          </li>
          
          
          
</ul>
        
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2 item-font" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success text-light item-font" onClick={handleSubmit} type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
      </div>
  
        <div class="container-fluid text-center">    
        <div class="row content">
            <div class="col-sm-2 sidenav">
            <p><a href="#"><Users/></a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            </div>
            <div class="col-sm-8 text-left"> 
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <hr/>
            <h3>Test</h3>
            <p>Lorem ipsum...</p>
            </div>
            
        </div>
        </div>
        </div>
    )
}
export default AdminDashbaord;