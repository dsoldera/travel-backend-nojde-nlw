import fastify from "fastify"
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import { env } from "./env"

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.listen({ 
  port: env.PORT 
}).then(() => {
  console.log(`Server running on Port ${env.PORT}!`)
})