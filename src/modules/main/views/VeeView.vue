<script setup lang="ts"></script>

<template>
  <v-container class="d-flex align-start justify-center fill-height">
    <v-responsive max-width="800">
      <v-card>
        <v-card-title>Vee Validate</v-card-title>
        <v-form>
          <v-row>
            <v-col cols="12"
              ><v-text-field
                counter
                density="compact"
                hint="Mínimo de 8 caracteres"
                label="Senha"
                placeholder="Digit sua senha"
                type="password"
                variant="outlined"
            /></v-col>
            <v-col></v-col>
            <v-col></v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>
