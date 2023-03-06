module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "strapi-postgres"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        username: env("DATABASE_USERNAME", "strapi-user"),
        password: env("DATABASE_PASSWORD", "!ChangeMe!"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {
        useNullAsDefault: true,
        pool: {
          min: 1,
          max: 50,
          idleTimeoutMillis: 500,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000,
        },
      },
    },
  },
});
