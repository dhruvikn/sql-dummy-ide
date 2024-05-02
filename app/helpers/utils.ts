import axios from 'axios';
import csv from 'csvtojson';
import { SAMPLE_DATA_URL, SampleDataTypes } from './constants';

export type SampleDataType = (typeof SampleDataTypes)[number] | 'random';

export const fetchSampleData = async (type: SampleDataType) => {
  if (type === 'random') {
    type = SampleDataTypes[Math.floor(Math.random() * SampleDataTypes.length)];
  }

  try {
    const response = await axios.get(SAMPLE_DATA_URL(type));
    const dataCSV: string = response?.data;

    if (dataCSV?.length) {
      const parsedData = await csv().fromString(dataCSV);

      if (!parsedData?.length) {
        return '';
      }

      return parsedData;
    }
  } catch (error) {
    console.error(error);
    return new Error('Failed to fetch data');
  }
};
