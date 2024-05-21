<script lang="ts">
  let darkTheme = $state(false);

  $effect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
</script>

<button class="font-semibold underline" onclick={() => (darkTheme = !darkTheme)}
  >Toggle dark Theme</button
>

<div class="foo">
  <p>
    This guy gets warned about unused tailwind dark styles (and they are
    stripped from the component.)
  </p>
</div>

<style lang="postcss">
  .foo {
    font-size: 2em;
  }

  .foo :global(p) {
    @apply text-purple-800 dark:text-red-500;
  }
</style>
