export default () => ({
  // port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },

  jwt_secret: process.env.JWT_SECRET,

  db: {
    type: process.env.DB_TYPE || 'postgres',
    // https://typeorm.io/#/connection-options/common-connection-options
    synchronize: true,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'username',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'dbname',
    // extra: {
    //   connectionLimit: 10,
    // },
    autoLoadEntities: true,
    migrationsRun: true,
    entities: [`${__dirname}/../***/**/*.entity.{js,ts}`],
    // entities: [`${__dirname}/../entity/**/*.{js,ts}`],
    migrations: [`${__dirname}/../***/**/*.migration.{js,ts}`],
    // migrations: [`${__dirname}/../migration/**/*.{js,ts}`],
    migrationsTableName: 'migrations_typeorm',
    cli: {
      migrationsDir: 'migrations',
    },
  },
});
