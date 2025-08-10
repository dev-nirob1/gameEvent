import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HeroTitle from '@/components/Elements/HeroTitle.vue'
import BaseTitle from '@/components/Elements/BaseTitle.vue'
import SubTitle from '@/components/Elements/SubTitle.vue'
import BaseParagraph from '@/components/Elements/BaseParagraph.vue'
import BaseButton from '@/components/Elements/BaseButton.vue'
import BaseImage from '@/components/Elements/BaseImage.vue'
import ListItem from '@/components/Elements/ListItem.vue'
import InputField from '@/components/Elements/InputField.vue'
import BaseTextArea from '@/components/Elements/BaseTextArea.vue'

const app = createApp(App)
// router
app.use(router)

// elements
app.component('HeroTitle', HeroTitle)
app.component('BaseTitle', BaseTitle)
app.component('SubTitle', SubTitle)
app.component('BaseParagraph', BaseParagraph)
app.component('BaseButton', BaseButton)
app.component('BaseImage', BaseImage)
app.component('ListItem', ListItem)
app.component('InputField', InputField)
app.component('BaseTextArea', BaseTextArea)

app.mount('#app')
