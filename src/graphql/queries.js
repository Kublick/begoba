/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFormulario = /* GraphQL */ `
  query GetFormulario($id: ID!) {
    getFormulario(id: $id) {
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
export const listFormularios = /* GraphQL */ `
  query ListFormularios(
    $filter: ModelFormularioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormularios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
