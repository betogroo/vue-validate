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
  }),
)

const { handleSubmit, handleReset } = useForm({ validationSchema })

const password = useField('password', validationSchema)

const onSubmit = handleSubmit(async () => {
  console.log(password.value.value)
})
</script>

<template>
  <v-container class="d-flex align-start justify-center fill-height">
    <v-responsive max-width="800">
      {{ password.value }}
      <v-card>
        <v-card-title>Vee Validate</v-card-title>
        <v-form @submit.prevent="onSubmit">
          <v-row>
            <v-col cols="12"
              ><v-text-field
                v-model="password.value.value"
                counter
                density="compact"
                :error-messages="password.errorMessage.value"
                hint="Mínimo de 8 caracteres"
                label="Senha"
                placeholder="Digit sua senha"
                type="password"
                variant="outlined"
            /></v-col>
            <v-col></v-col>
            <v-col cols="12">
              <v-btn type="submit">Enviar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>
