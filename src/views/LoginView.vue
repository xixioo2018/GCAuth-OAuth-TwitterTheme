<template>
  <div class="oauth tfw en logged-out noloki" style="padding-top: 20px">
    <link
      rel="stylesheet"
      type="text/css"
      media="screen"
      href="Twitter_Authorize_Res/tfw-base.3baf723b92aa68729f921c77ca3e3c1315116392.css"
    />
    <div id="header" role="banner">
      <div class="bar">
        <h1 class="logo">
          <a class="alternate-context" href="/">Twitter</a>
        </h1>

        <div id="not-logged-in">
          <!-- <a href="register" class="register alternate-context">Sign up for GrassCutter</a> -->
          <router-link to="regeister">Sign up for GrassCutter</router-link>
        </div>
      </div>
    </div>

    <div id="bd" role="main">
      <div class="auth">
        <h2>Authorize HoYoverse to access your account?</h2>

        <div class="app-info" role="content-info" tabindex="0">
          <h3>
            <img alt="" class="app-icon" src="imgs/logo.png" title="GrassCutter" />
            GrassCutter
          </h3>
          <dl>
            <dt class="url">Application URL</dt>
            <dd class="url">https://github.com/Grasscutters/Grasscutter</dd>
            <dt class="notes">About this app</dt>
            <dd class="notes">
              <p>A server software reimplementation for a certain anime game.</p>
            </dd>
          </dl>
        </div>

        <div>
          <fieldset class="sign-in">
            <legend>Log in to Twitter</legend>
            <div class="row user">
              <input
                aria-required="true"
                autocapitalize="off"
                autocorrect="off"
                autofocus="autofocus"
                class="text"
                id="username_or_email"
                name="username"
                type="text"
                placeholder="Username"
                v-model="username"
              />
            </div>
            <div class="row password">
              <input
                aria-required="true"
                class="password text"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <p>
              <!-- <input type="checkbox" name="remember_me" id="remember" value="1" />
              <label for="remember">Remember me</label> -->

              <router-link to="/changepwd" class="alternate-context" target="_blank"
                >Change password?</router-link
              >
            </p>
          </fieldset>

          <fieldset class="buttons">
            <legend>Authorize HoYoverse access to use your account?</legend>
            <button
              class="submit button selected"
              id="allow"
              @click="submit"
            >
              Authorize app
            </button>

            <!-- <input class="submit button" id="cancel" name="cancel" type="submit" value="Cancel"> -->
            <!-- <input class="submit button" id="cancel" name="cancel" type="submit" onclick="history.back()" value="Cancel"> -->
          </fieldset>
        </div>

        <div class="permissions allow">
          <p><strong>This application will be able to:</strong></p>
          <ul class="permissions allow">
            <li>
              See Tweets from your timeline (including protected Tweets) as well as your
              Lists and collections.
            </li>
            <li>See your Twitter profile information and account settings.</li>
            <li>See accounts you follow, mute, and block.</li>
          </ul>
        </div>

        <div>
          <p>
            <small
              >Learn more about third-party app permissions in the
              <a href="/" target="_blank">Help Center</a>.</small
            >
          </p>
        </div>
      </div>
    </div>

    <div class="footer" role="navigation">
      <div id="ft">
        <p class="tip">
          We recommend reviewing the app’s terms and privacy policy to understand how it
          will use data from your Twitter account. You can revoke access to any app at any
          time from the <a href="/" target="_blank">Apps and sessions</a> section of your
          Twitter account settings.
        </p>
        <p>
          <small
            >By authorizing an app you continue to operate under Twitter’s
            <a href="/" target="_blank">Terms of Service</a>. In particular, some usage
            information will be shared back with Twitter. For more, see our
            <a href="/" target="_blank">Privacy Policy</a>.</small
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      alertmsg: "",
    };
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
            alert(res.data.message);
          }else{
            window.location.replace("uniwebview://sdkThirdLogin?accessToken="+res.data.jwt)
          }
          // router.push("/")
        })
        .catch(() => {
          alert("注册失败");
        });
    },
  },
};
</script>
