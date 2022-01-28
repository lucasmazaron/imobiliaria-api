module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
       process.env.ENTITIES
     ],
     migrations: [
        process.env.MIGRATIONS
     ],
     cli: {
      "migrationsDir": `./dist/database/migrations/`
      }
}