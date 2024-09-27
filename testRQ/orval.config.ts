module.exports = {
    api: {
      input: 'swagger.json', // Путь к вашему файлу спецификации
      output: {
        mode: 'single',
        target: './src/api.ts', // Путь, куда будет сгенерирован API
        client: 'react-query', 
        baseUrl: `https://learnapi.testspace.ybru.ru/api/`
      },

    },
  };