<template>
  <div class="page spaced has-text-white">
    <div v-show="formSent === true">
      <p v-if="formError === false" class="is-size-3 has-text-white">
        Thank you for contacting me. I will get back to you as soon as possible!
      </p>
      <p v-else>Oops! Something went wrong.</p>
    </div>
    <div v-if="formSent === false">
      <h1 class="is-size-3 has-text-white has-text-weight-semibold">
        Feel free to contact me
      </h1>

      <form ref="formspree" class="mt-6" @submit.prevent="submitForm">
        <div class="field">
          <label class="label has-text-info" for="name">Name</label>
          <div class="control has-icons-left">
            <input
              id="name"
              v-model="name"
              class="input"
              type="text"
              placeholder="Your name"
              required
            />
            <span class="icon is-small is-left">
              <UserSolidSvg />
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label has-text-info" for="email">Email</label>
          <div class="control has-icons-left">
            <input
              id="email"
              v-model="email"
              class="input"
              type="email"
              placeholder="hello@example.com"
              required
            />
            <span class="icon is-small is-left">
              <EnvelopeSolidSvg />
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label has-text-info" for="message">Message</label>
          <div class="control">
            <textarea
              id="message"
              v-model="message"
              class="textarea"
              placeholder="Textarea"
              maxlength="2000"
              required
            ></textarea>
          </div>
          <p v-show="message.length === 2000" class="help is-danger">
            Max 2000 characters
          </p>
        </div>

        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button class="button is-link" type="submit">
              <span> Send </span>
              <span class="icon">
                <PaperPlaneSolidSvg />
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import EnvelopeSolidSvg from 'assets/images/icons/solid/envelope.svg?inline'
import UserSolidSvg from 'assets/images/icons/solid/user.svg?inline'
import PaperPlaneSolidSvg from 'assets/images/icons/solid/paper-plane.svg?inline'

const name = 'ContactPage'

const components = {
  EnvelopeSolidSvg,
  UserSolidSvg,
  PaperPlaneSolidSvg,
}

function data() {
  return {
    name: '',
    email: '',
    message: '',
    formSent: false,
    formError: false,
  }
}

const methods = {
  submitForm() {
    console.log('radi li')
    const formData = new FormData()

    formData.append('name', this.name)
    formData.append('email', this.email)
    formData.append('message', this.message)

    // JavaScript file-like object
    const content = '<a id="a"><b id="b">hey!</b></a>' // the body of the new file...
    const blob = new Blob([content], { type: 'text/xml' })

    formData.append('webmasterfile', blob)

    const request = new XMLHttpRequest()
    request.open('POST', 'https://formspree.io/f/mqkgleaz')
    request.send(formData)
  },
}

export default { name, components, data, methods }
</script>

<style></style>
