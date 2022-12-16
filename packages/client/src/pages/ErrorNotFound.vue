<template>
  <div
    class="bg-blue flex flex-center fullscreen q-pa-md text-center text-white"
  >
    <div>
      <div class="error-code">404</div>

      <div class="error-message text-h2">Oops. Nothing here...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<style lang="scss">
.error-code {
  font-size: 30vh;
}

.error-message {
  opacity: 0.4;
}
</style>
