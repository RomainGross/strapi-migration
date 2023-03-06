module.exports = ({ env }) => ({
  settings: {
    cors: {
      origin: env(
        "ALLOWED_HOSTS",
        "https://etrangers-en-france.interieur.gouv.fr,https://hipe-strapi.ofii.fr"
      ),
    },
    headers: {
      enabled: true,
    },
  },
  load: {
    before: ["headers"],
  },
});
