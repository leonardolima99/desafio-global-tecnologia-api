exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      email: "usuariocomum@teste.com.br",
      nivel_acesso: "funcionario",
      senha: "$2a$10$/7pYkC9sYPosHV.D9PLHAu9foHQBN46k18LekZvLDbuViBA3NgAXG",
    },
    {
      id: 2,
      email: "usuarioadm@teste.com.br",
      nivel_acesso: "administrador",
      senha: "$2a$10$/7pYkC9sYPosHV.D9PLHAu9foHQBN46k18LekZvLDbuViBA3NgAXG",
    },
  ]);
};
