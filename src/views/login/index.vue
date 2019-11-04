<template>
  <form class="login">
    <div class="login-header">
      <img src="@/assets/images/logo.png" alt="logo">
    </div>
    <section class="login-message">
      <input type="tel" placeholder="手机号" maxlength="11" />
    </section>
    <section class="login-message">
      <input type="text" placeholder="验证码" />
    </section>
    <section class="login-block">
      新用户登录即自动注册, 并表示已同意
      <a href="javascript:;">《用户服务协议》</a>和
      <a href="javascript:;">《隐私权政策》</a>
    </section>
    <button class="login-submit" type="text" v-on:click="login">
      登录
    </button>
  </form>
</template>

<script>
export default {
  name: 'Login',
  methods:{
    login:function() {
      this.$router.push('/home')
    }
  }
};
</script>
<style scoped lang="scss">
$borderColor: #ddd;
.login {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  .login-header {
    text-align: center;
    &>img {
      height: 56px;
      max-width: 100%;
    }
  }
  & .login-message {
    height: 48px;
    font-size: 14px;
    margin-bottom: 16px;
    input {
      width: 100%;
      height: 100%;
      padding-left: 10px;
      border: 1px solid $borderColor;
    }
  }
  & .login-submit {
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: #4cd96f;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
    &:hover {
      background: #4cd964;
    }
  }
}
</style>
