import { DataTypes, Model, Sequelize } from 'sequelize';
interface DataAttributes {
	id: string;
	gamer: string;
	score: string;
}


export class DataInstance extends Model<DataAttributes> {}

DataInstance.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		gamer: {
			type: DataTypes.STRING,
			allowNull: false
		},
		score: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		tableName: 'gamescore',
		sequelize: new Sequelize
	}
);
