const topbarTemplate = `
<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #722a9e;
    min-height: 100px;
    position: relative;
    z-index: 1000;
  }

  body { margin: 0; font-family: "Segoe UI", sans-serif; }

  .logo img { height: 90px; width: auto; }

  nav ul {
    display: flex;
    list-style: none;
    gap: 15px;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  /* RESTORED: Original Button Styling with Borders */
  nav ul li a {
    text-decoration: none;
    color: #ffffff;
    background-color: transparent;
    border: 2px solid #ffffff; /* The classic border */
    padding: 8px 18px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    white-space: nowrap;
    display: inline-block;
    transition: 0.3s;
  }

  nav ul li a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  nav ul li { position: relative; }

  /* --- DROPDOWNS (Level 1) --- */
  .dropdown {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #722a9e;
    padding: 10px;
    list-index: 100;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 5px 5px;
    border-top: 15px solid transparent; /* Buffer for easier hovering */
    transition: 0.3s ease;
  }

  /* --- SIDE MENUS (Level 2) --- */
  .side-menu {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 100%;
    background-color: #8732bb;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5px 0 0 5px;
    border-right: 10px solid transparent; /* Buffer */
    transition: 0.3s ease;
  }

  /* HOVER TRIGGERS */
  nav ul li:hover > .dropdown,
  .has-submenu:hover > .side-menu {
    visibility: visible;
    opacity: 1;
  }

  /* Dropdown buttons shouldn't have double borders */
  .dropdown li a, .side-menu li a {
    border: 1px solid rgba(255,255,255,0.3);
    width: 170px;
    text-align: center;
    margin: 4px 0;
  }

  /* --- RESPONSIVE FIXES --- */
  @media (max-width: 900px) {
    header { padding: 10px; min-height: 80px; }
    .logo img { height: 60px; }
    
    nav {
      overflow-x: auto;
      max-width: 75%;
      -webkit-overflow-scrolling: touch;
    }
    
    nav ul { gap: 8px; padding-bottom: 5px; }
    nav ul li a { padding: 6px 12px; font-size: 12px; }
    
    .dropdown { right: auto; left: -50px; }
  }
</style>

<header>
  <div class="logo">
    <img src="https://raw.githubusercontent.com/PlasmaStarStudios/pssweb/refs/heads/main/Devs.PN/logo.png" alt="PSS">
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
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/games/iifpp/">IIFPP (BETA)</a></li>
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
          <li class="has-submenu">
            <a href="#">Other ❯</a>
            <ul class="side-menu">
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/Bots/adp/">ADP</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="https://plasmastarstudios.github.io/pssweb/Account/Consumer/login/">Account</a></li> 
      <li><a href="#">🧺</a></li> 
      <li><a href="#" style="border: 1px solid rgba(255,255,255,0.4); color: rgba(255,255,255,0.7); font-size: 11px;">v1.1.12</a></li>
    </ul>
  </nav>
</header>
`;

document.body.insertAdjacentHTML('afterbegin', topbarTemplate);