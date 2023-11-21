<template>
  <div class="tag" :class="TagType" :style="getcolor.TagStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    type: String,
    auto: String,
    isBlock: Boolean,
  },
  data() {
    return {
      TagType: `tag-${this.type}`,
    };
  },
  computed: {
    getcolor() {
      if (this.auto) {
        if (this.auto.includes("#")) {
          const [r, g, b] = this.auto
            .match(/\w\w/g)
            .map((x) => parseInt(x, 16));

          if (this.isBlock == true) {
            return {
              TagStyle: {
                color: "#fff",
                backgroundColor: `${this.auto}`,
              },
            };
          }
          return {
            TagStyle: {
              color: `${this.auto}`,
              backgroundColor: `rgba(${r},${g},${b},.08)`,
            },
          };
        } else {
          return `tag-${this.auto}`;
        }
      } else {
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

.tag-success-block {
  color: #fff;
  background: #2ea121;
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
