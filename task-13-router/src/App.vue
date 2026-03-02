<template>
  <div>
    <nav id="nav">
      <router-link id="logo" to="/">Travel</router-link>
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/panama">Panama</router-link>
      <router-link to="/hawaii">Hawaii</router-link>
      <router-link to="/jamaica">Jamaica</router-link>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
