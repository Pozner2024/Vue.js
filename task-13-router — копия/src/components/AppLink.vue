<template>
  <a
    v-if="isExternal"
    target="_blank"
    rell="noopepr"
    class="external-link"
    :href="to"
    ><slot></slot
  ></a>
  <router-link v-else v-bind="$props" class="internal-link"
    ><slot></slot
  ></router-link>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    ...RouterLink.props,
  },
  computed: {
    isExternal() {
      return typeof this.to === "string" && this.to.startsWith("http");
    },
  },
};
</script>
