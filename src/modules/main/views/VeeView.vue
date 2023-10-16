<script setup lang="ts">
import { ref } from 'vue'

const password = ref('')
const onSubmit = () => {
  console.log(password.value)
}
</script>

<template>
  <v-container class="d-flex align-start justify-center fill-height">
    <v-responsive max-width="800">
      <v-card>
        <v-card-title>Vee Validate</v-card-title>
        <v-form @submit.prevent="onSubmit">
          <v-row>
            <v-col cols="12"
              ><v-text-field
                v-model="password"
                counter
                density="compact"
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
