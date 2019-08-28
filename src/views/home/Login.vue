<template>
  <div>
    <div class="header-container">
      <ul>
        <router-link class="li1" to="/home/proflie" tag="li">
          <svg
            class="icon"
            width="25px"
            height="25.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFF"
              d="M257.2 567.1h584.5c29 0 52.5-23.4 52.5-52.2V512c0-28.8-23.5-52.2-52.5-52.2H255.9L431 284.1c20.2-20.3 20.2-53 0-73.3l-0.4-0.4c-20.2-20.3-53.1-20.5-73.6-0.5l-0.5 0.5L71.8 496.1a26.013 26.013 0 0 0 0 36.7l55.7 55.9L352 813.8c20.4 20.5 53.7 20.6 74.3 0.4l0.4-0.4 1.7-1.7c20.3-20.3 20.3-53.1 0-73.4L257.2 567.1z"
            ></path>
          </svg>
        </router-link>
        <li class="li2">登录</li>
        <router-link class="li3" to="/home/register" tag="li">注册</router-link>
      </ul>
    </div>
    <main class="main">
      <div class="app2">
        <div class="app2-child">
          <div class="app2-1">
            <input type="text" placeholder="请输入用户名" v-model="userIn.user">
            <p class="tiShi">{{ usertishi }}</p>
          </div>
          <div class="app2-1">
            <input type="text" placeholder="请输入密码" v-model="userIn.pass" @keyup.enter="login()">
            <p class="tiShi">{{ passtishi }}</p>
          </div>
          <div class="app2-1">
            <button type="button" @click="login()" id="btn">立即登录</button>
            <h3 v-show="isShow">{{Info}}</h3>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      Info: localStorage.getItem("userArr"),
      usertishi: "",
      passtishi: "",
      tishi: "",
      userIn: {
        user: "",
        pass: ""
      }
    };
  },
  methods: {
    login() {
      this.usertishi = "";
      this.passtishi = "";
      //用户名随意
      var obj = JSON.parse(this.Info);
      /*console.log(obj[0])//去数组里的第一组数据*/
      if (!this.userIn.user) {
        this.usertishi = "用户名不能为空";
      }
      //判断注册的数组中是否能找到输入的用户名
      var testList = obj.find(item => {
        return this.userIn.user === item.username;
      });
      if (!testList) this.usertishi = "用户名不存在";
      //密码
      if (!this.userIn.pass) {
        this.passtishi = "密码不能为空";
      }
      //判断输入的密码是否为输入的用户名的密码
      var testpass = obj.find(item => {
        return (
          this.userIn.pass === item.password &&
          this.userIn.user === item.username
        );
      });
      /*console.log(testpass)*/
      if (!testpass) this.passtishi = "密码不正确";
      if (this.usertishi || this.passtishi) return;

      userInfo = JSON.stringify(testpass); //把内容转换成字符串形式

      localStorage.setItem("userInfo", userInfo);
    }
  }
};
</script>

<style lang="stylus" scoped>
.header-container {
  width: 100%;
  height: 0.5rem;
  background: linear-gradient(150deg, #ff5a61 50%, #fd631c);
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
  color: white;
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

// 登录
.main {
  width: 100%;
  height: 100%;
  display: flex;
}

.app2 {
  width: 100%;
  display: flex;
}

.app2-child {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.app2-1 {
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.app2-1 input {
  border: none;
  width: 90%;
  padding: 0.08rem 0;
  border-radius: 0.05rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-indent: 0.2rem;
}

.tiShi {
  width: 80%;
  height: 0.2rem;
  padding-top: 0.1rem;
  color: #FF464F;
}

.app2-1 #btn {
  color: white;
  background: #FF464F;
  border: none;
  padding: 0.1rem;
}
</style>
