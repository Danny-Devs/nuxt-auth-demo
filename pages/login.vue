<script lang="ts" setup>
const { signIn } = useAuth();

const signInWithCredentials = async () => {
  await signIn('credentials', {
    username: 'demo',
    password: 'password',
    callbackUrl: '/'
  });
};
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50">
    <div class="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div class="space-y-4">
        <button
          @click="signIn('github')"
          class="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in with GitHub
        </button>

        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="bg-white px-2 text-gray-500"
              >Or sign in with credentials</span
            >
          </div>
        </div>

        <button
          @click="signInWithCredentials"
          class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in with Demo Account
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
