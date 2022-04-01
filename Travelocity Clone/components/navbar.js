let navbar=()=>{
    return `    <div id="leftnav">
    <img src="./images/logo.svg" alt="logo" width="100px" id="homelogo">

    <h6 class="nav-item dropdown">
      <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown"
        aria-expanded="false" style="color: white;">
        More Travel
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" ><span class="iconify" data-icon="ri:hotel-line"></span> Stays</a></li>
        <li><a class="dropdown-item" ><span class="iconify" data-icon="ant-design:car-filled"></span> Cars</a>
        </li>
        <li><a class="dropdown-item" ><span class="iconify" data-icon="ic:twotone-flight"></span> Flights</a>
        </li>
        <li><a class="dropdown-item" h><span class="iconify" data-icon="icon-park-outline:cruise"></span>
            Cruises</a></li>
        <li><a class="dropdown-item" ><span class="iconify" data-icon="icons8:todo-list"></span> Things to
            do</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" >Trips for Me</a></li>
        <li><a class="dropdown-item" >Discover</a></li>
        <li><a class="dropdown-item" >Travel Deals</a></li>
        <li><a class="dropdown-item">Get Inspired</a></li>
        <li><a class="dropdown-item" >Groups & Meetings</a></li>
      </ul>
    </h6>
  </div>

  <div id="rightnav">
    <h6>Español</h6>
    <h6>List Your Property</h6>
    <h6>Support</h6>
    <h6>Trips</h6>
    <h6 id="signin">Sign In</h6>
    <div class="dropdown">
    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></a>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li id="logout"><a class="dropdown-item" >Log Out</a></li>
      <li><a class="dropdown-item" href="booking.html" id="booking">Booking</a></li>
    </ul>
  </div>
  </div>`;
}

export default navbar;