<template>
  <div class="tag" :class="'tag-' + color">
    {{ div }}
  </div>
</template>

<script>
  export default {
    name: 'MyTag',
    props: {
      color: String,
    },
  }
</script>

<style>
.tag {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px 6px;
  width: fit-content;
  border-radius: 4px;
}

.tag.magenta {
  color: #F9062F;
  background: #fff0f6;
  border-color: #ffadd2;
}

.tag-red {
  color: #f5222d;
  background: #FFF0F3;
  border-color: #ffa39e;
}

.tag.volcano {
  color: #fa541c;
  background: #fff2e8;
  border-color: #ffbb96;
}

.tag.orange {
  color: #fa8c16;
  background: #fff7e6;
  border-color: #ffd591;
}

.tag.gold {
  color: #faad14;
  background: #fffbe6;
  border-color: #ffe58f;
}

.tag.lime {
  color: #a0d911;
  background: #fcffe6;
  border-color: #eaff8f;
}

.tag.green {
  color: #52c41a;
  background: #f6ffed;
  border-color: #b7eb8f;
}

.tag.cyan {
  color: #13c2c2;
  background: #e6fffb;
  border-color: #87e8de;
}

.tag-blue {
  color: #0A5CFF;
  background: #EDF6FF;
  border-color: #91d5ff;
}

.tag.purple {
  color: #722ed1;
  background: #f9f0ff;
  border-color: #d3adf7;
}

.tag.grey {
  color: #252525;
  background: #f3f3f3;
  border-color: #a5a5a5;
}

</style>