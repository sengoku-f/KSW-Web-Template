<template>
  <div class="tag" :class="getcolor.TagColor" :style="getcolor.TagStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    color: String,
  },
  data() {
    return {
      TagColor: `"tag-${this.color}`,
    };
  },
  computed: {
    getcolor() {
      // return 'black'
      if (this.color) {
        console.log("包含" + this.color);
        if (this.color.includes("#")) {
          console.log("包含#");
          const [r, g, b] = this.color.match(/\w\w/g).map(x => parseInt(x, 16));
          console.log(`rgba(${r},${g},${b},0.1)`);
          return {
            TagColor: "tag-has-color",
            TagStyle: {
              color: `${this.color}`,
              backgroundColor: `rgba(${r},${g},${b},0.1)`
              },
          };
        } else {
          console.log("不含#");
          return {
            TagColor: `"tag-${this.color}`,
          };
        }
      } else {
        console.log("空值");
        return {};
      }
    },
  },
};
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
  background: #f5f5f5;
  color: #171717;
}

.tag.magenta {
  color: #f9062f;
  background: #fff0f6;
  border-color: #ffadd2;
}

.tag-danger {
  color: #f5222d;
  background: #fff0f3;
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
  color: #0a5cff;
  background: #edf6ff;
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
