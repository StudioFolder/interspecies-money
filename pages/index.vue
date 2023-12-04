<template>
  <div class="container">
    <div class="background-image">
    </div>

    <img src="../public/img/interspecies-money-logo.png" alt="Interspecies Money" class="logo" />

    <footer class="footer">
      <p>COMING SOON</p>
    </footer>
 </div>
</template>

<style>
  html, body {
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    color: #fff;
    overflow: hidden;
  }

  .background-image {
    background: url('../public/img/interspecies-money-background.jpg') center center no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1; /* Ensure the background is behind other content */
    width: 100%;
    height: 100%;
  }

  .logo {
    max-width: 50%; 
    max-height: 50%;  
    object-fit: contain;
    mix-blend-mode: difference;
  }

  .footer {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    font-family: sans-serif;
    font-size: small;
    position: fixed;
    bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>