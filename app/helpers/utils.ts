import axios from 'axios';
import csv from 'csvtojson';
import { SAMPLE_DATA_URL, SAMPLE_TABLE_NAMES } from './constants';

export type SampleTableNamesType = (typeof SAMPLE_TABLE_NAMES)[number] | 'random';

export const fetchSampleData = async (tableName: SampleTableNamesType) => {
  if (tableName === 'random') {
    tableName = SAMPLE_TABLE_NAMES[Math.floor(Math.random() * SAMPLE_TABLE_NAMES.length)];
  }

  try {
    const response = await axios.get(SAMPLE_DATA_URL(tableName));
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

export const runQuery = async (
  tableName: SampleTableNamesType,
  setData: (data: any[]) => void,
  onStartAndEnd?: (isLoading: boolean) => void
) => {
  onStartAndEnd && onStartAndEnd(true);

  const data = await fetchSampleData(tableName || 'random');

  if (!data || data instanceof Error) {
    return;
  }

  setData(data);
  onStartAndEnd && onStartAndEnd(false);
};
