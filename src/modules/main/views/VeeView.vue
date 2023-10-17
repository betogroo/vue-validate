<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { object, z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const validationSchema = toTypedSchema(
  object({
    password: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(8, 'No mínimo 8 dígitos'),
    name: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(3, 'Mínimo de 3 caracteres'),
  }),
)

const { handleSubmit, meta, values } = useForm({
  validationSchema,
})

const name = useField('name', validationSchema)
const password = useField('password', validationSchema)

const onSubmit = handleSubmit(async () => {
  console.log(values)
})
</script>

<template>
  <v-container class="d-flex align-start justify-center fill-height">
    <v-responsive max-width="800">
      <v-card>
        <v-card-title>Vee Validate</v-card-title>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            v-model="name.value.value"
            density="compact"
            :error-messages="name.errorMessage.value"
            label="Nome"
            placeholder="Digite sua senha"
            type="text"
            variant="outlined"
          />
          <v-text-field
            v-model="password.value.value"
            counter
            density="compact"
            :error-messages="password.errorMessage.value"
            hint="Mínimo de 8 caracteres"
            label="Senha"
            placeholder="Digit sua senha"
            type="password"
            variant="outlined"
          />
          <v-btn
            :disabled="!meta.valid"
            type="submit"
            >Enviar</v-btn
          >
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>
