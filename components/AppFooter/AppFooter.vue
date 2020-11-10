<template>
  <footer class="has-background-white px-3 py-2">
    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <p>Obradovic Nikola &copy; {{ year }}</p>
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">
          <a
            href="https://github.com/obradovicnikola"
            target="_blank"
            class="navbar-item"
            rel="noopener noreferrer"
            ><GithubSvg
          /></a>
        </div>
        <div class="level-item">
          <a
            href="https://www.linkedin.com/in/nikola-obradovic-1b4702180/"
            target="_blank"
            class="navbar-item"
            rel="noopener noreferrer"
            ><LinkedinSvg
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import GithubSvg from '~/assets/images/icons/github.svg?inline'
import LinkedinSvg from '~/assets/images/icons/linkedin.svg?inline'

const name = 'AppFooter'

const components = {
  GithubSvg,
  LinkedinSvg,
}

function data() {
  return {
    year: new Date().getFullYear(),
  }
}
export default { name, components, data }
</script>

<style lang="sass">
footer svg
  height: 30px
  width: auto
</style>
