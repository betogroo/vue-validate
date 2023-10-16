<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, numeric, email, minLength } from '@vuelidate/validators'

/* const state = reactive({
  price: '',
}) */

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
  console.log(v$.value.price.$errors, formData.value)
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
            :error-messages="v$.name.$errors.map((e) => e.$message.toString())"
            variant="outlined"
            @blur="v$.name.$touch"
            @update:model-value="v$.name.$touch"
            ><template #message="{ message }"
              ><small>{{ message }}</small></template
            >
          </v-text-field>
          <v-text-field
            v-model.number="v$.price.$model"
            :error-messages="v$.price.$errors.map((e) => e.$message.toString())"
            type="number"
            variant="outlined"
            @blur="v$.price.$touch"
            @update:model-value="v$.price.$touch"
          />
          <v-text-field
            v-model="v$.email.$model"
            :error-messages="v$.email.$errors.map((e) => e.$message.toString())"
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
