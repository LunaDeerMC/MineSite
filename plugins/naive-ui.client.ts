import { 
  create, 
  NButton, 
  NCard, 
  NForm, 
  NFormItem, 
  NInput, 
  NSelect, 
  NTable, 
  NDataTable,
  NSpace,
  NModal,
  NMessageProvider,
  NConfigProvider
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NCard,
    NForm,
    NFormItem,
    NInput,
    NSelect,
    NTable,
    NDataTable,
    NSpace,
    NModal,
    NMessageProvider,
    NConfigProvider
  ]
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(naive)
})