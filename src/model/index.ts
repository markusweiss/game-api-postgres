import { Model } from 'sequelize';
interface DataAttributes {
	gamer: string;
	score: string;
}

export class DataInstance extends Model<DataAttributes> {}
