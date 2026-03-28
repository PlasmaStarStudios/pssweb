const topbarTemplate = `
<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5%; /* Use percentage for horizontal padding */
    background-color: #722a9e;
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
  }

  body {
    margin: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .logo img {
    height: clamp(50px, 8vw, 110px); /* Dynamically scales between 50px and 110px */
    width: auto;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 15px;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  nav ul li a {
    text-decoration: none;
    color: #ffffff;
    border: 2px solid #ffffff;
    padding: 6px 14px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 0.9rem;
    white-space: nowrap; /* Prevents text from breaking inside buttons */
    transition: 0.3s;
  }

  nav ul li a:hover {
    background-color: rgba(255,255,255,0.1);
  }

  /* --- Dropdown Logic --- */
  .dropdown, .side-menu {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    background-color: #722a9e;
    list-style: none;
    padding: 10px;
    z-index: 1000;
    border-radius: 5px;
    transition: 0.3s;
  }

  .dropdown { top: 100%; right: 0; flex-direction: column; }
  .side-menu { top: 0; right: 100%; width: max-content; }

  nav ul li:hover > .dropdown,
  .has-submenu:hover > .side-menu {
    visibility: visible;
    opacity: 1;
    display: flex;
  }

  /* --- MOBILE RESPONSIVENESS --- */
  @media (max-width: 768px) {
    header {
      flex-direction: column; /* Stacks logo and nav */
      gap: 15px;
      padding: 15px;
    }

    nav ul {
      gap: 8px;
      flex-wrap: wrap; /* Wraps buttons to new lines on very small phones */
      justify-content: center;
    }

    nav ul li a {
      padding: 5px 10px;
      font-size: 0.8rem;
    }

    .dropdown {
      right: auto;
      left: 50%;
      transform: translateX(-50%); /* Centers dropdowns on mobile */
    }
    
    .side-menu {
        position: static; /* Removes complex sideways nesting on mobile */
        transform: none;
        background-color: #612387;
    }
  }
</style>

<header>
  <div class="logo">
    <img src="https://raw.githubusercontent.com/PlasmaStarStudios/pssweb/refs/heads/main/Devs.PN/logo.png" alt="PSSLOGO">
  </div>
  <nav>
    <ul>
      <li><a href="https://plasmastarstudios.github.io/pssweb/index.html">Home</a></li>
      <li>
        <a href="#">Projects ▾</a>
        <ul class="dropdown">
          <li class="has-submenu">
            <a href="#">Games ❯</a>
            <ul class="side-menu">
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/games/iifpp/">IIFPP</a></li>
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/games/rrp/">RRP</a></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#">Software ❯</a>
            <ul class="side-menu">
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/software/incom">Incom</a></li>
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/software/psspocket/">psspocket</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="https://plasmastarstudios.github.io/pssweb/Account/Consumer/login/">Account</a></li> 
      <li><a href="#">🧺</a></li> 
      <li><a href="#" style="border-color: rgba(255,255,255,0.3); color: rgba(255,255,255,0.7);">v1.1.12</a></li>
    </ul>
  </nav>
</header>
`;

document.body.insertAdjacentHTML('afterbegin', topbarTemplate);