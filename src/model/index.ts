import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';
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
		sequelize: db,
		tableName: 'gamescore'

	}
);
