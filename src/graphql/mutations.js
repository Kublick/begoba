/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFormulario = /* GraphQL */ `
  mutation CreateFormulario(
    $input: CreateFormularioInput!
    $condition: ModelFormularioConditionInput
  ) {
    createFormulario(input: $input, condition: $condition) {
      id
      nombre
      pais
      email
      whatsapp
      pregunta1
      pregunta2
      pregunta3
      pregunta4
      pregunta5
      contacto
      preguntaradio
      createdAt
      updatedAt
    }
  }
`;
export const updateFormulario = /* GraphQL */ `
  mutation UpdateFormulario(
    $input: UpdateFormularioInput!
    $condition: ModelFormularioConditionInput
  ) {
    updateFormulario(input: $input, condition: $condition) {
      id
      nombre
      pais
      email
      whatsapp
      pregunta1
      pregunta2
      pregunta3
      pregunta4
      pregunta5
      contacto
      preguntaradio
      createdAt
      updatedAt
    }
  }
`;
export const deleteFormulario = /* GraphQL */ `
  mutation DeleteFormulario(
    $input: DeleteFormularioInput!
    $condition: ModelFormularioConditionInput
  ) {
    deleteFormulario(input: $input, condition: $condition) {
      id
      nombre
      pais
      email
      whatsapp
      pregunta1
      pregunta2
      pregunta3
      pregunta4
      pregunta5
      contacto
      preguntaradio
      createdAt
      updatedAt
    }
  }
`;
