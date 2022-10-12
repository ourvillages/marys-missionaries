<script setup lang="ts">
import { toFormValidator } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as zod from 'zod'

const { login } = useDirectusAuth()

const validationSchema = toFormValidator(
  zod.object({
    email: zod
      .string()
      .min(1, 'This is required')
      .email({ message: 'Must be a valid email' }),
    password: zod.string().min(8, { message: 'Too small' }),
  })
)

const { handleSubmit, errors, useFieldModel } = useForm({
  validationSchema: validationSchema,
})

const onSubmit = handleSubmit(async (values) => {
  try {
    console.log(values)
    await login({ email: values.email, password: values.password })
  } catch (e) {}
})

const [email, password] = useFieldModel(['email', 'password'])
</script>

<template>
  <div class="flex justify-center items-center mt-52">
    <div class="w-full max-w-xs">
      <form
        @submit.prevent="onSubmit"
        novalidate
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="identity-input mb-4">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Email</label
          >
          <input
            name="email"
            type="email"
            v-model="email"
            id="identity"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            aria-describedby="emailHelp"
          />
          <span
            class="text-xs text-red-700"
            id="emailHelp"
            v-if="errors.email"
            >{{ errors.email }}</span
          >
        </div>

        <div class="password-input mb-6">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password</label
          >

          <input
            name="password"
            type="password"
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="*******"
          />

          <span
            class="text-xs text-red-700"
            id="passwordHelp"
            v-if="errors.password"
            >{{ errors.password }}</span
          >
        </div>

        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
