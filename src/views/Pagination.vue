<template>
  <div class="pagination">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="buttons">
      <button
        v-for="(btn, index) in numberOfButtons"
        :key="index"
        :class="{'active': activeIndex === index}"
        @click="updateActiveIndex(index)"
      >{{index+1}}</button>
    </div>
    <div class="posts">
      <div class="post" v-for="post in currentPosts" :key="post.id">{{post.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  data() {
    return {
      posts: [
        {
          title: "Post One",
          index: 1
        },
        {
          title: "Post Two",
          index: 2
        },
        {
          title: "Post Three",
          index: 3
        },
        {
          title: "Post Four",
          index: 4
        },
        {
          title: "Post Five",
          index: 5
        },
        {
          title: "Post Six",
          index: 6
        },
        {
          title: "Post Seven",
          index: 7
        },
        {
          title: "Post Eight",
          index: 8
        },
        {
          title: "Post Nine",
          index: 9
        },
        {
          title: "Post Ten",
          index: 10
        },
        {
          title: "Post Eleven",
          index: 11
        },
        {
          title: "Post Twelwe",
          index: 12
        },
        {
          title: "Post Thirteen",
          index: 13
        },
        {
          title: "Post Fourteen",
          index: 14
        },
        {
          title: "Post Fifteen",
          index: 15
        },
        {
          title: "Post Sixteen",
          index: 16
        },
        {
          title: "Post Seventeen",
          index: 17
        },
        {
          title: "Post Eighteen",
          index: 18
        },
        {
          title: "Post Nineteen",
          index: 19
        },
        {
          title: "Post Twenty",
          index: 20
        },
        {
          title: "Post Twenty One",
          index: 21
        },
        {
          title: "Post Twenty Two",
          index: 22
        },
        {
          title: "Post Twenty Three",
          index: 23
        },
        {
          title: "Post Twenty Four",
          index: 24
        },
        {
          title: "Post Twenty Five",
          index: 25
        }
      ],
      activeIndex: 0
    };
  },
  computed: {
    numberOfButtons() {
      // Calculate number of buttons to display
      return Math.ceil(this.posts.length / 10);
    },
    currentPosts() {
      // I did slice() first only because I don't want to mutate the original array (posts).
      // Without slice() it will mutate original array and numberOfButtons will change (not good!)
      return this.posts.slice().splice(this.activeIndex * 10, 10);
      // Insted of slice() you can also use spread operator(...) on this.posts, like -> [...this.posts].splice(xxx);
    }
  },
  methods: {
    updateActiveIndex(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
  }
  .buttons {
    margin: 2em 0;
    button {
      margin: 0 1em;
      background-color: #35495e;
      color: #fff;
      font-weight: bold;
      border: 2px solid #41b883;
      border-radius: 5px;
      padding: 0.2em 1.2em;
      cursor: pointer;
      &.active {
        background-color: lighten(#35495e, 10%);
      }
      &:hover {
        background-color: lighten(#35495e, 10%);
      }
    }
  }
  .posts {
    .post {
      margin: 0.5em 0;
      color: #35495e;
    }
  }
}
</style>