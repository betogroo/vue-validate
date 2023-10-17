<script setup lang="ts">
import { ref } from 'vue'

const handleSubmit = () => {
  alert('Submit')
}
const title = ref('')
const rules = ref({
  required: (value: string) => !!value || 'Campo Obrigatório',
  counter: (value: string) => value.length >= 6 || 'Mínimo de 6 dígitos',
})
</script>
<template>
  <v-container class="d-flex align-start justify-center fill-height">
    <v-responsive max-width="640">
      <h1>Home page</h1>
      <v-card
        class="pa-4"
        subtitle="Campo obrigatório e mínimo de 6 caracteres"
        title="Vuetify Validation"
        variant="outlined"
      >
        <v-form @submit.prevent="handleSubmit">
          <v-row>
            <v-col cols="12"
              ><v-text-field
                v-model="title"
                label="Password"
                placeholder="Dgite sua senha"
                required
                :rules="[rules.required, rules.counter]"
                type="password"
                variant="outlined"
              >
                <template #message="{ message }">
                  <span class="text-subtitle-1 text-red">{{ message }}</span>
                </template>
                <template #counter="{ counter, value, max = 6 }">
                  <span
                    class="text-subtitle-1"
                    :class="`text-${counter < max ? 'red' : ''}`"
                    >{{ `${value}/${max}` }}
                  </span>
                </template>
              </v-text-field>
            </v-col>
            <v-col class="text-right"
              ><v-btn
                :disabled="title.length === 0 || title.length < 6"
                type="submit"
                >Enviar</v-btn
              ></v-col
            >
          </v-row>
        </v-form>
        <v-row>
          <v-col></v-col>
          <v-col
            ><RouterLink :to="{ name: 'VeeView' }"
              >Vee Validate</RouterLink
            ></v-col
          >
        </v-row>
      </v-card>
    </v-responsive>
  </v-container>
</template>
