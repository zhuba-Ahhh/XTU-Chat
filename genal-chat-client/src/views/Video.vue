<template>
  <div>
    <video id="local" autoplay playsinline muted></video>
    <video id="remote" autoplay playsinline></video>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'webrtc-adapter';

@Component({
  components: {},
})
export default class GenalInput extends Vue {
  mounted() {}
}
</script>
<style lang="scss" scoped></style>
