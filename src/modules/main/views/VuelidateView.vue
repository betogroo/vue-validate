<script setup lang="ts">
import { ref } from 'vue'
import { useVuelidate, ErrorObject } from '@vuelidate/core'
import { required, numeric, email, minLength } from '@vuelidate/validators'

const formData = ref({
  name: '',
  price: '',
  email: '',
})

const rules = {
  name: { required, minLength: minLength(6) },
  price: { required, numeric },
  email: { required, email },
}

const v$ = useVuelidate(rules, formData.value)

const onSubmit = async () => {
  const validForm = await v$.value.$validate()
  if (!validForm) return
  console.log(v$.value)
}

const errorMessages = (error: ErrorObject[]) => {
  const uid = error.map((e) => e.$message.toString())
  return uid
}
</script>

<template>
  <v-container class="d-flex align-start justify-center fill-height">
    <v-responsive max-width="640">
      <h1 class="text-red">Vuelidate</h1>
      <v-card class="pa-4">
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            v-model="v$.name.$model"
            :error-messages="errorMessages(v$.name.$errors)"
            variant="outlined"
            @blur="v$.name.$touch"
            @update:model-value="v$.name.$touch"
          />
          <v-text-field
            v-model.number="v$.price.$model"
            :error-messages="errorMessages(v$.price.$errors)"
            variant="outlined"
            @blur="v$.price.$touch"
            @update:model-value="v$.price.$touch"
          />
          <v-text-field
            v-model="v$.email.$model"
            :error-messages="errorMessages(v$.email.$errors)"
            variant="outlined"
            @blur="v$.email.$touch"
            @update:model-value="v$.email.$touch"
          />
          <v-btn
            color="success"
            type="submit"
            variant="outlined"
            >Enviar</v-btn
          >
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>
