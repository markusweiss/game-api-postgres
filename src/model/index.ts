import { Model } from 'sequelize/types';

interface DataAttributes {
	id: string;
	playername: string;
	score: string;
}

export class DataInstance extends Model<DataAttributes> {}
