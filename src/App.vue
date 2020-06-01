<!-- 
@Description :
@file: App
@overview: This is main app contain all components
@author: kunal jadhav
@since: 27/05/2020- Wednesday
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Registration</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>
