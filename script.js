// script.js

document.addEventListener('DOMContentLoaded', (event) => {
  const loadingScreen = document.createElement('div');
  const loader = document.createElement('div');

  // Style the loading screen to match Facebook's background color
  loadingScreen.setAttribute('id', 'fbLoadingScreen');
  loadingScreen.style.position = 'fixed';
  loadingScreen.style.top = '0';
  loadingScreen.style.left = '0';
  loadingScreen.style.width = '100%';
  loadingScreen.style.height = '100%';
  loadingScreen.style.backgroundColor = '#3b5998'; // Facebook blue
  loadingScreen.style.display = 'flex';
  loadingScreen.style.justifyContent = 'center';
  loadingScreen.style.alignItems = 'center';
  loadingScreen.style.zIndex = '1000';

  // Style the loader to match Facebook's color scheme
  loader.setAttribute('id', 'fbLoader');
  loader.style.border = '16px solid #e9ebee'; // Facebook light grey
  loader.style.borderTop = '16px solid #9cb4d8'; // Facebook lighter blue
  loader.style.borderRadius = '50%';
  loader.style.width = '120px';
  loader.style.height = '120px';
  loader.style.animation = 'spin 2s linear infinite';

  loadingScreen.appendChild(loader);
  document.body.appendChild(loadingScreen);

  // Add keyframes for rotation
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;
  document.head.appendChild(styleSheet);

  // Simulate loading time, then hide the loading screen and redirect
  setTimeout(() => {
    loadingScreen.style.display = 'none';

    // Redirect to another website after the loading screen is hidden
    window.location.href = 'help.html';
  }, 2000); // 2 seconds loading time
});
