<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col>
            <v-card class="login-card">
              <v-card-title class="text-center">ログイン</v-card-title>
              <v-card-text>
                <v-form ref="form" @submit.prevent="login">
                  <v-text-field v-model="username" label="ユーザー名" outlined></v-text-field>
                  <v-text-field v-model="password" label="パスワード" type="password" outlined></v-text-field>
                  <v-btn type="submit" color="primary" block>ログイン</v-btn>
                </v-form>
                <div v-if="message" class="text-center mt-2">{{ message }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import users from './config/users.json'
import { decryptString } from '@/utils/encryption'

interface User {
  _id: string
  _password: string
  _name: string
}

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const message = ref<string | null>(null)

    // ログイン情報をsessionStorageから取得する
    const storedUserJSON = sessionStorage.getItem('user')
    const storedUser: User | null = storedUserJSON ? JSON.parse(storedUserJSON) : null

    // sessionStorageに保存されたユーザーが有効であれば自動ログインする
    if (storedUser) {
      router.push({ name: 'hello' })
    }

    const login = () => {
      const user: User | undefined = users.find(
        (user: User) => decryptString(user._id) === username.value && decryptString(user._password) === password.value
      )

      if (user) {
        message.value = 'ログインに成功しました。'
        sessionStorage.setItem('user', JSON.stringify(user))
        router.push({ name: 'hello' })
      } else {
        message.value = 'ユーザー名またはパスワードが間違っています。'
      }
    }

    return {
      username,
      password,
      message,
      login
    }
  }
})
</script>

<style>
.login-card {
  width: 400px;
  margin: 0 auto;
  padding: 40px;
}
</style>
