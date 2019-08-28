<template>
  <div>
    <header class="header-container">
      <ul>
        <router-link class="li1" to="/home/shopping" tag="li">
          <svg
            class="icon"
            width="25px"
            height="25.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#333"
              d="M257.2 567.1h584.5c29 0 52.5-23.4 52.5-52.2V512c0-28.8-23.5-52.2-52.5-52.2H255.9L431 284.1c20.2-20.3 20.2-53 0-73.3l-0.4-0.4c-20.2-20.3-53.1-20.5-73.6-0.5l-0.5 0.5L71.8 496.1a26.013 26.013 0 0 0 0 36.7l55.7 55.9L352 813.8c20.4 20.5 53.7 20.6 74.3 0.4l0.4-0.4 1.7-1.7c20.3-20.3 20.3-53.1 0-73.4L257.2 567.1z"
            ></path>
          </svg>
        </router-link>
        <li class="li2">最后疯抢</li>
        <li class="li3">&nbsp;</li>
      </ul>
    </header>
    <main>20011208</main>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.header-container {
  width: 100%;
  height: 0.5rem;
  display: flex;
}

ul {
  width: 100%;
  height: 100%;
  display: flex;
}

li {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size:0.12rem;
  color: #333
}

.li1, .li3 {
  flex: 0.5;
}

.li2 {
  flex: 2;
  font-size: 0.2rem;
}

.li3 {
  font-size: 0.16rem;
}
</style>
