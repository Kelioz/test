module.exports = {
    api: {
      input: 'swagger.json', 
      output: {
        mode: 'single',
        target: './src/shared/api/api.ts', 
        baseUrl: `https://learnapi.testspace.ybru.ru/api/`,
      },

    },
  };