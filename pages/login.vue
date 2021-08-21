<template>
<section>
  <div
    class="min-h-screen flex justify-center items-center text-center"
  >
    <div class="is-6">
      <img src="~assets/undraw_secure_login_pdn4.svg" />
    </div>
    <div class="is-6">
      <h2 class="m-5 font-black text-3xl">Login with provider</h2>
      <div class="shadow-xl bg-white p-10">
        <a
          href="http://natas:1337/connect/auth0"
          class="cursor-pointer button shadow-xl"
        >
          <b-icon icon="shield-star"></b-icon>
          <span>Auth0</span>
        </a>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
    layout: 'public'
}
</script>