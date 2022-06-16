<template>
  <div class="bg">
    <div class="card">
      <div style="position: fixed">
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
              <label for="" style="color: red">{{ msg }}</label>
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
import Message from "@/i18n";
export default {
  data() {
    return {
      username: "",
      password: "",
      pwdverify: "",
      oldpwd: "",
      msg: "",
    };
  },
  mounted() {
    this.msg = "";
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
            this.msg = Message[res.data.message]
            // alert(res.data.message);
          } else {
            this.msg = "更改密码成功，正在重定向到登录页面！";
            setTimeout(router.push("/"), "1000");
          }
        })
        .catch(() => {
          this.msg = "更改失败"
          // alert("更改失败");
        });
    },
    gohome() {
      router.push("/");
    },
  },
};
</script>
