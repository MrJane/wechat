<template>
  <div class="web-chat">
    <wx-header></wx-header>
    <wx-search></wx-search>
    <ul>
      <msg-list></msg-list>
    </ul>
  </div>
</template>

<script>
  import wxHeader from './wx-header';
  import wxSearch from './wx-search';
  import msgList from './msg-list'

  export default {
    name: "webchat",
    components: {
      'wxHeader': wxHeader,
      'wxSearch': wxSearch,
      'msgList': msgList
    }
  }
</script>

<style scoped>

</style>
