<template>
  <div class="page spaced">
    <p class="is-size-3 is-size-5-mobile has-text-white mb-4">I'm Nikola,</p>
    <h1
      class="title is-size-1 is-size-3-mobile has-text-white has-text-centered"
    >
      a Full Stack web developer
    </h1>

    <div class="technologies">
      <div class="technology frontend p-4">
        <div class="is-flex">
          <div class="top mr-4">
            <span>
              <FrontendSvg />
            </span>
          </div>
          <div class="has-text-weight-bold is-size-3">Frontend</div>
        </div>
        <div class="mt-5">
          <span>
            <HtmlSvg />
            <!-- <img src="~/assets/images/icons/html.svg" alt="html logo" /> -->
          </span>
          <span>
            <!-- <img src="~/assets/images/icons/css.svg" alt="" /> -->
            <CssSvg />
          </span>
          <span>
            <!-- <img src="~/assets/images/icons/javascript.svg" alt="" /> -->
            <JavascriptSvg />
          </span>
          <span>
            <!-- <img src="~/assets/images/icons/vue.svg" alt="" /> -->
            <VueSvg />
          </span>
          <span>
            <!-- <img src="~/assets/images/icons/sass.svg" alt="" /> -->
            <SassSvg />
          </span>
          <span>
            <!-- <img src="~/assets/images/icons/bulma.svg" alt="" /> -->
            <BulmaSvg />
          </span>
          <span>
            <!-- <img src="~/assets/images/icons/webpack.svg" alt="" /> -->
            <WebpackSvg />
          </span>
          <span>
            <!-- <img src="~/assets/images/icons/nuxt.svg" alt="" /> -->
            <NuxtSvg />
          </span>
        </div>
      </div>

      <div class="technology frontend p-4 mt-6">
        <div class="is-flex">
          <div class="top mr-4">
            <span>
              <BackendSvg />
            </span>
          </div>
          <div class="has-text-weight-bold is-size-3">Backend</div>
        </div>
        <div class="mt-5">
          <span>
            <NodejsSvg />
          </span>
          <span>
            <ExpressSvg />
          </span>
          <span>
            <MongodbSvg />
          </span>
          <span>
            <SocketIoSvg />
          </span>
          <span>
            <MysqlSvg />
          </span>
          <span>
            <FirebaseSvg />
          </span>
          <span>
            <GraphqlSvg />
          </span>
        </div>
      </div>

      <div class="technology frontend p-4 mt-6">
        <div class="is-flex">
          <div class="top mr-4">
            <span>
              <OtherSvg />
            </span>
          </div>
          <div class="has-text-weight-bold is-size-3">Other</div>
        </div>
        <div class="mt-5">
          <span>
            <LinuxSvg />
          </span>
          <span>
            <SeoSvg />
          </span>
          <span>
            <ResponsiveSvg tooltip="responsive design" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.technologies
  margin-top: 3rem
  .technology
    background: #c4c4c4
    .top
      svg
        height: 50px
        width: auto
    span
      margin: 0 .5rem
      svg
        height: 60px
        width: auto
</style>

<script>
import FrontendSvg from '~/assets/images/icons/frontend.svg?inline'
import HtmlSvg from '~/assets/images/icons/html.svg?inline'
import CssSvg from '~/assets/images/icons/css.svg?inline'
import JavascriptSvg from '~/assets/images/icons/javascript.svg?inline'
import VueSvg from '~/assets/images/icons/vue.svg?inline'
import SassSvg from '~/assets/images/icons/sass.svg?inline'
import BulmaSvg from '~/assets/images/icons/bulma.svg?inline'
import WebpackSvg from '~/assets/images/icons/webpack.svg?inline'
import NuxtSvg from '~/assets/images/icons/nuxt.svg?inline'

import BackendSvg from '~/assets/images/icons/backend.svg?inline'
import NodejsSvg from '~/assets/images/icons/nodejs.svg?inline'
import ExpressSvg from '~/assets/images/icons/express.svg?inline'
import FirebaseSvg from '~/assets/images/icons/firebase.svg?inline'
import GraphqlSvg from '~/assets/images/icons/graphql.svg?inline'
import MongodbSvg from '~/assets/images/icons/mongodb.svg?inline'
import MysqlSvg from '~/assets/images/icons/mysql.svg?inline'
import SocketIoSvg from '~/assets/images/icons/socket-io.svg?inline'

import OtherSvg from '~/assets/images/icons/other.svg?inline'
import LinuxSvg from '~/assets/images/icons/linux.svg?inline'
import SeoSvg from '~/assets/images/icons/seo.svg?inline'
import ResponsiveSvg from '~/assets/images/icons/responsive.svg?inline'

const name = 'HomePage'

const components = {
  FrontendSvg,
  HtmlSvg,
  CssSvg,
  JavascriptSvg,
  VueSvg,
  SassSvg,
  BulmaSvg,
  WebpackSvg,
  NuxtSvg,

  BackendSvg,
  NodejsSvg,
  ExpressSvg,
  FirebaseSvg,
  GraphqlSvg,
  MongodbSvg,
  MysqlSvg,
  SocketIoSvg,

  OtherSvg,
  LinuxSvg,
  SeoSvg,
  ResponsiveSvg,
}

export default { name, components }
</script>
