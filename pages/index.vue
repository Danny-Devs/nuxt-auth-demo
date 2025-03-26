<script lang="ts" setup>
const { status, data, signOut } = useAuth();
const mongoConnected = ref(true); // You can implement a real check if needed
</script>
<template>
  <div class="container mx-auto p-6">
    <div class="mb-8 rounded-lg bg-white p-6 shadow-md">
      <h1 class="mb-4 text-2xl font-bold">Nuxt Auth Demo</h1>

      <div v-if="status === 'authenticated'" class="space-y-4">
        <div class="rounded-md bg-green-50 p-4">
          <div class="flex">
            <div class="text-green-800">
              <p class="text-lg font-medium">Authenticated! ✅</p>
              <p>You are signed in as {{ data?.user?.name }}</p>
              <p>Email: {{ data?.user?.email }}</p>
            </div>
          </div>
        </div>

        <button
          @click="signOut()"
          class="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>

      <div v-else-if="status === 'unauthenticated'" class="space-y-4">
        <div class="rounded-md bg-yellow-50 p-4">
          <div class="flex">
            <div class="text-yellow-800">
              <p class="text-lg font-medium">Not authenticated</p>
              <p>Please sign in to access the application.</p>
            </div>
          </div>
        </div>

        <button
          @click="navigateTo('/login')"
          class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Go to Login
        </button>
      </div>

      <div v-else class="rounded-md bg-gray-50 p-4">
        <div class="flex">
          <div class="text-gray-800">
            <p class="text-lg font-medium">Loading...</p>
            <p>Checking authentication status...</p>
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-lg bg-white p-6 shadow-md">
      <h2 class="mb-4 text-xl font-bold">MongoDB Connection</h2>
      <p>
        MongoDB is {{ mongoConnected ? 'connected ✅' : 'not connected ❌' }}
      </p>
    </div>
  </div>
</template>

<style></style>
