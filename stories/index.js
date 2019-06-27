import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Logo from './Logo.vue'

storiesOf('Logo', module)
  .add('with text', () => '<logo>with text</logo>')
  .add('with emoji', () => '<logo>😀 😎 👍 💯</logo>')
  .add('as a component', () => ({
    components: { Logo },
    template: '<logo>rounded</logo>'
  }))