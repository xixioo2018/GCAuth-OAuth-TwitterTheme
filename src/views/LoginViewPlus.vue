<template>
  <div class="bg">
    <div class="card">
      
      <!-- <div id="header" role="banner">
        <div class="bar">
          <h1 class="logo">
            <a class="alternate-context" href="/">Twitter</a>
          </h1>

          <div id="not-logged-in">
            <router-link to="regeister">Sign up for GrassCutter</router-link>
          </div>
        </div>
      </div> -->

      <!-- <div style="position:fixed;">
        <button class="simplebtn" @click="gohome">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
            <g>
              <path
                d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"
              ></path>
            </g>
          </svg>
        </button>
      </div> -->

      <div class="form">
        <div>
          <fieldset class="sign-in">
            <span class="title">登录</span>
            <div class="row1 user">
              <input v-model="username" type="text" placeholder="账号" value="" />
            </div>
            <div class="row1 password">
              <input v-model="password" type="password" placeholder="密码" value="" />
            </div>
          </fieldset>
          
          <fieldset class="buttons">
            <p>
              <label for="" style="color:red;">{{msg}}</label>
            </p>
            <button class="actionbtn" @click="submit">登录</button>
          </fieldset>
          <fieldset style="display: flex; justify-content: space-between;">
            <p>
              <router-link to="/changepwd" class="alternate-context">修改密码</router-link>
            </p>
            <p>
              <router-link to="/register" class="alternate-context" >注册</router-link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import Message from "@/i18n";
export default {
  data() {
    return {
      username: "",
      password: "",
      pwdverify: "",
      msg:" ",
    };
  },
  mounted() {
    this.msg="";
  },
  methods: {
    submit() {
      this.$axios({
        method: "post",
        url: "/authentication/login",
        data: {
          username: this.username,
          password: this.password,
        },
      })
        .then((res) => {
          console.log(res.data);
          if (!res.data.success) {
            this.msg = Message[res.data.message]
            // alert(res.data.message);
          }else{
            window.location.replace("uniwebview://sdkThirdLogin?accessToken="+res.data.jwt)
          }
          // router.push("/")
        })
        .catch(() => {
          this.msg = "登录失败"
        });
    },
    gohome() {
      router.push("/");
    },
  },
};
</script>
<style>
.bg {
  background: rgb(153, 153, 153);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background: white;
  width: 600px;
  max-height: 100vh;
  overflow-y: auto;
  /* height: 800px; */
  border-radius: 15px;
}
body {
  margin: 0;
  height: 100vh;
  width: 100vw;

}
html {
  height: 100vh;
  width: 100vw;
  background: transparent !important;
}
.form {
  padding: 30px 40px 30px !important;
}
.simplebtn {
  margin: 10px;
  padding: 0px;
  height: 32px;
  width: 32px;
  background: transparent;
  border: none;
}

input {
  margin: 15px 0 0 0;
  font-size: 20px;
  padding: 0 0 0 10px;
}
p{
  margin-top: 0px;
}
.row1 > input::-webkit-input-placeholder {
  padding: 0px;
}
.row1 > input[type="text"] {
  height: 50px;
  width: 100%;
  border: solid 1px;
  border-color: lightgray;
  border-radius: 4px;
}
.row1 > input[type="password"] {
  height: 50px;
  width: 100%;
  border: solid 1px;
  border-color: lightgray;
  border-radius: 4px;
}
input:focus {
  outline-color: rgb(29, 155, 240);
}

.actionbtn {
  background: black;
  color: white;
  height: 50px;
  width: 100%;
  font-size: 20px;
  border-radius: 30px;
  border: none;
}
.actionbtn:active{
  background: gray;
}
.title {
  font-size: 30px;
  font-weight: bold;
}
fieldset {
  border: none;
}
</style>
