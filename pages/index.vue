<template>
  <div>
    <div class="container">
     <img src="../public/img/interspecies-money-logo.png" alt="Interspecies Money" class="logo" />
   </div>

  <footer class="footer">
      <p>Coming Soon</p>
  </footer>
</div>
</template>

<style>
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .container {
    background-color: #010609;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    color: #fff;
    overflow: hidden;
  }

  .logo {
  max-width: 50%; 
  max-height: 50%;  
  object-fit: contain;
  }

  .footer {
    background-color: #010609;
    color: #fff;
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