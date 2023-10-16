<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, numeric, email } from '@vuelidate/validators'

/* const state = reactive({
  price: '',
}) */

const formData = ref({
  price: '',
  email: '',
})

const rules = {
  price: { required, numeric },
  email: { required, email },
}

const v$ = useVuelidate(rules, formData.value)
const onSubmit = async () => {
  const validForm = await v$.value.$validate()
  if (!validForm) return
  console.log(v$.value.price.$errors, formData.value)
}
</script>

<template>
  <v-container class="d-flex align-start justify-center-fill-height">
    <v-responsive max-width="500">
      <h1 class="text-red">Vuelidate</h1>
      <v-card class="pa-1">
        <v-form @submit.prevent="onSubmit">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="v$.price.$model"
                :error-messages="
                  v$.price.$errors.map((e) => e.$message.toString())
                "
                variant="outlined"
                @blur="v$.price.$touch"
                @update:model-value="v$.price.$touch"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="v$.email.$model"
                :error-messages="
                  v$.email.$errors.map((e) => e.$message.toString())
                "
                variant="outlined"
                @blur="v$.email.$touch"
                @update:model-value="v$.email.$touch"
              />
            </v-col>
            <v-col cols="12">
              <v-btn
                color="success"
                type="submit"
                variant="outlined"
                >Enviar</v-btn
              ></v-col
            >
          </v-row>
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>
