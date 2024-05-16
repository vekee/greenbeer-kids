<template>
  <v-app-bar app color="#6A76AB" dark prominent src="https://picsum.photos/1920/1080?random" fade-img-on-scroll>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title>Hello Kids</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <template v-slot:extension>
      <v-tabs>
        <v-tab to="/hello" exact>GBクラス</v-tab>
        <v-tab to="/jimi" exact>吉米個人</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<style>
.v-tab-link {
  text-decoration: none;
  color: inherit;
}
</style>
