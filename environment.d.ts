declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GRAPHQL_ENDPOINT: string
    }
  }
}

export {};
