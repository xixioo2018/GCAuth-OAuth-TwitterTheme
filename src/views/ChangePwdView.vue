<template>
  <div class="bg">
    <div class="card">
      <div>
        <!-- header icon? -->
        <button class="simplebtn" @click="gohome">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
          >
            <g>
              <path
                d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      <div class="form">
        <div>
          <fieldset class="sign-in">
            <span class="title">密码修改</span>
            <div class="row1 user">
              <input v-model="username" type="text" placeholder="账号" value="" />
            </div>
            <div class="row1 password">
              <input v-model="password" type="password" placeholder="新密码" value="" />
            </div>
            <div class="row1 password">
              <input
                v-model="pwdverify"
                type="password"
                placeholder="再次确认新密码"
                value=""
              />
            </div>
            <div class="row1 password">
              <input v-model="oldpwd" type="password" placeholder="旧密码" value="" />
            </div>
          </fieldset>

          <fieldset class="buttons">
            <p>
              <label for="remember">Based on </label>

              <a
                href="https://github.com/exzork/GCAuth"
                class="alternate-context"
                target="_blank"
                >GCAuth</a
              >
            </p>
            <button class="actionbtn" @click="submit">密码更改</button>

            <!-- <input class="submit button" id="cancel" name="cancel" type="submit" value="Cancel"> -->
            <!-- <input class="submit button" id="cancel" name="cancel" type="submit" onclick="history.back()" value="Cancel"> -->
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      username: "",
      password: "",
      pwdverify: "",
      oldpwd: "",
    };
  },
  methods: {
    submit() {
      this.$axios({
        method: "post",
        url: "/authentication/change_password",
        data: {
          username: this.username,
          new_password: this.password,
          old_password: this.oldpwd,
          new_password_confirmation: this.pwdverify,
        },
      })
        .then((res) => {
          console.log(res.data);
          if (!res.data.success) {
            alert(res.data.message);
          } else {
            router.push("/");
          }
        })
        .catch(() => {
          alert("更改失败");
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
  /* height: 800px; */
  border-radius: 15px;
}
body {
  margin: 0;
  height: 100%;
  width: 100%;
}
html {
  height: 100vh;
  width: 100vw;
}
.form {
  padding: 30px 40px;
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
  margin: 30px 0 0px 0;
  font-size: 20px;
}

input::-webkit-input-placeholder {
  padding: 20px;
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
}
.title {
  font-size: 30px;
  font-weight: bold;
}
fieldset {
  border: none;
}
</style>
