<svelte:options tag="read-more" />

<script>
  export let content;

  export let isExpanded = false;

  const showAll = () => {
    isExpanded = true;
  }

  const close = () => {
    isExpanded = false;
  }
</script>

<div class="overview">
  <div class="{
    !isExpanded
      ? 'overview__description__body expanded-text-multiline'
      : 'overview__description__body'
    }"
  >
    {content}
  </div>
  <div style="display: flex; justify-content: flex-end;">
    {#if !isExpanded}
      <button class="btn-read-more" on:click|once={showAll}>
        全文を表示
      </button>
    {/if}
    {#if isExpanded}
      <button class="btn-read-close" on:click|once={close}>
        閉じる
      </button>
    {/if}
  </div>
</div>

<style>
  .expanded-text-multiline {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
