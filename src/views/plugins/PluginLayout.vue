<template>
  <div id="plugin-wrapper">
    <header>
      <h1>Migration Plugins</h1>
    </header>
    <div>
      <nav>
        <router-link to="/plugins">Index</router-link>
        <router-link to="/plugins/v-viewer">V-Viewer</router-link>
        <router-link to="/plugins/clickaway">Clickaway</router-link>
        <router-link to="/plugins/toggle-btn">Toogle Button</router-link>
        <router-link to="/plugins/modal">Modal</router-link>
        <router-link to="/plugins/mq">Media Query</router-link>
        <router-link to="/plugins/scroll-to">Scroll To</router-link>
        <router-link to="/plugins/popper">Popper</router-link>
        <router-link to="/plugins/touch">Touch Events</router-link>
        <router-link to="/plugins/draggable">Drag'n Drop</router-link>
      </nav>
      <section>
        <router-view />
      </section>
    </div>
  </div>
</template>

<style lang="scss">
@import "normalize.css/normalize.css";
@import "@/styles.scss";

#plugin-wrapper {
  margin: 1rem;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    gap: 0 1rem;
    margin-top: 2rem;
  }

  nav {
    flex-basis: 200px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem 0;
  }

  section {
    flex-grow: 1;
  }
}
</style>
