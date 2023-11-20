<template>
  <div class="tag" :class="[TagType, getcolor]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    type: String,
    auto: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      TagType: `tag-${this.type}`,
      // TagAuto: `tag-has-${this.auto}`,
    };
  },
  computed: {
    getcolor() {
      console.log(this.auto);
      if (this.auto.success1) {
        console.log("包含" + this.auto.success1);
        if (this.auto.success1.includes("#")) {
          console.log("包含#");
          const [r, g, b] = this.auto.success1.match(/\w\w/g).map(x => parseInt(x, 16));
          console.log(`rgba(${r},${g},${b},0.1)`);
          return {
            TagColor: "tag-has-color",
            TagStyle: {
              color: `${this.auto.success1}`,
              backgroundColor: `rgba(${r},${g},${b},0.1)`
              },
          };
        } else {
          console.log("不含#");
          return {
            TagColor: `"tag-${this.auto.success1}`,
          };
        }
      } else {
        // console.log("空值");
        return {};
      }
    },
  },
  mounted() {},
};
</script>

<style>
.tag {
  margin-bottom: 8px;
  margin-right: 8px;
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
  color: #171717;
  background: #f5f5f5;
}

.tag-success {
  color: #2ea121;
  background: #f0fbef;
}

.tag-info {
  color: #0a5cff;
  background: #edf6ff;
}

.tag-warning {
  color: #ff8900;
  background: #fffbec;
}

.tag-danger {
  color: #f5222d;
  background: #fff0f3;
}

.tag-default {
  color: #171717;
  background: #f5f5f5;
}

.tag-has-black {
  color: #525252;
  background-color: rgb(82, 82, 82, 0.1);
}

.tag-has-red {
  color: #ffffff;
  background-color: #f9062f;
}
</style>
