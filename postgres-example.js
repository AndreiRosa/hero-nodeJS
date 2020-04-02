const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'herois', 
  'andreirosa', 
  'andrei123', 
  {
    host: 'localhost',
    dialect: 'postgres',
    quoteIdentifiers: false,
    operatorsAliases: false
  },
);

(async () => {
  const Herois = sequelize.define(
    'herois',
    {
      id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        required: true,
      },
      poder: {
        type: Sequelize.STRING,
        required: true,
      },
    },
    {
      tableName: 'TB_HEROIS',
      freezeTableName: false,
      timestamps: false,
    },
  );

  await Herois.sync();
  const result = await Herois.create({
    nome: 'John',
    poder: 'Hancock',
  });
  console.log(
    'result',
    await Herois.findAll({ raw: true, attributes: ['nome', 'poder', 'id'] }),
  );
})();
