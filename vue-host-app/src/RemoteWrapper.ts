<script lang="ts">
export default {
  props: {
    elementName: { // Name of the web component that will be loaded
      type: String,
      required: true,
    },
    loadChild: { // Function to load remote (using dynamic import)
      type: Function,
      required: true,
    }
  },
  async mounted() {
    const element = document.createElement(this.elementName);
    await this.loadChild();

    const container = this.$refs.container as HTMLElement;
    if (element && container) {
      container.appendChild(element);
    }
  }
}
</script>

<template>
  <div ref="container"></div>
</template>