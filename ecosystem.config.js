export default {
  apps: [{
    name: "whisper",
    script: "./dist/index.js",
    interpreter: "bun",
    env: {
      NODE_ENV: "production",
    }
  }]
} 