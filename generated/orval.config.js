module.exports = {
  users: {
    input: "./api.yaml",
    output: {
      mode: "single",
      target: "./src/users.ts",
      client: "react-query",
      override: {
        mutator: {
          path: "./usersClient.ts",
          name: "usersClient",
        },
      },
    },
  },
};
