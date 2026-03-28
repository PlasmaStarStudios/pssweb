const topbarTemplate = `
<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #722a9e;
    height: 70px; /* Fixed height keeps it consistent */
    width: 100%;
    box-sizing: border-box;
    overflow-x: auto; /* Allows horizontal swipe if it's TOO wide for a tiny phone */
    white-space: nowrap;
  }

  /* Hide scrollbar for a cleaner look */
  header::-webkit-scrollbar { display: none; }

  .logo img {
    height: 45px; /* Smaller, consistent logo size */
    width: auto;
    margin-right: 15px;
    flex-shrink: 0;
  }

  nav {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 8px; /* Tighter gaps for mobile fitting */
    margin: 0;
    padding: 0;
    align-items: center;
  }

  nav ul li a {
    text-decoration: none;
    color: #ffffff;
    border: 1.5px solid #ffffff;
    padding: 5px 10px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 13px; /* Slightly smaller font to fit PC layout on mobile */
    transition: 0.3s;
  }

  /* Ensure dropdowns still work but don't break the bar */
  .dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #722a9e;
    visibility: hidden;
    opacity: 0;
    flex-direction: column;
    padding: 10px;
    z-index: 1000;
  }

  nav ul li:hover > .dropdown {
    visibility: visible;
    opacity: 1;
    display: flex;
  }

  /* REMOVED the Mobile Media Query that was stacking things */
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
             <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/games/iifpp/">Games</a></li>
             <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/software/psspocket/">Software</a></li>
        </ul>
      </li>
      <li><a href="https://plasmastarstudios.github.io/pssweb/Account/Consumer/login/">Account</a></li> 
      <li><a href="#">🧺</a></li> 
      <li><a href="#" style="border:none; opacity:0.6; font-size:10px;">v1.1.12</a></li>
    </ul>
  </nav>
</header>
`;