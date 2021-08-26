import moment from 'moment';
import { DateType } from '@/core/enums';

export const DateUtils = {
	convertDate: (dateType: DateType , date: Date) => {
		return moment(date).format(dateType);
	}
};