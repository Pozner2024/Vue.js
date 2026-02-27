<script setup>

</script>

<template>
  <section>
    <header>
      <slot name="header">
      </slot>
    </header>

    <main>
      <slot name="main">
        <slot>Содержимое по умолчанию</slot>
      </slot>
    </main>

    <footer>
      <slot name="footer">
      </slot>
    </footer>
  </section>
</template>