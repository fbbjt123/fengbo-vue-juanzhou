<template>
	<div id="app">
		<form action="">
			<van-cell-group>
				<van-field
					v-model="username"
					label="用户名"
					placeholder="请输入用户名"
				/>
				<van-field
					v-model="phone"
					label="手机号"
					placeholder="请输入手机号"
				/>
				<van-field
					v-model="sms"
					center
					label="短信验证码"
					placeholder="请输入短信验证码"
				>
					<van-button slot="button" size="small" type="primary">发送验证码</van-button>
				</van-field>
				<van-field
					v-model="password"
					type="password"
					label="密码"
					placeholder="请输入密码"
				/>
			</van-cell-group>
			<div class="v-check">
				<van-checkbox v-model="checked">我已阅读注册须知并同意条款</van-checkbox>
			</div>
			<div class="v-button">
				<van-button color="#ff5a61">注册</van-button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
    	return {
      		checked: true
    	}
  	}
}
</script>

<style lang="stylus">
#app
  width 100%
#app form
  width 100%
.van-cell
  font-size .14rem
  padding .16rem .22rem
.van-button--primary
  background-color #ff5a61 !important
  border 1px solid #ff5a61 !important
.v-check
  width 100%
  display flex
  justify-content center
  align-items center
  padding-top .22rem
.van-checkbox__icon--checked .van-icon
  background-color #ff5a61 !important
  border-color #ff5a61 !important
.v-button
  width 100%
  display flex
  justify-content center
  align-items center
  padding 0 .22rem 0 .22rem
  margin-top .2rem
.van-button--normal
  padding 0 .9rem !important
</style>