import babel from 'rollup-plugin-babel';

export default {
  input: 'src/function-batcher.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/function-batcher.js',
      name: 'FunctionBatcher',
      format: 'umd'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
