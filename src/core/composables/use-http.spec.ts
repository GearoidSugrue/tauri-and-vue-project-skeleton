import { useHttp } from './use-http';
import axios from 'axios';

jest.mock('axios', () => ({
  create: jest.fn(() => 'http instance'),
}));

jest.mock('axios-retry', () => jest.fn());

describe('user-http', () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  test('useHttp creates and returns an axios http instance', () => {
    (axios.create as jest.Mock).mockReturnValue('http instance');
    const http = useHttp();
    expect(axios.create).toHaveBeenCalledWith({ timeout: 30000 });
    expect(http).toEqual({ http: 'http instance' });
  });

  test('useHttp only creates a http instance once', () => {
    (axios.create as jest.Mock).mockReturnValue('http instance');
    useHttp();
    expect(axios.create).toHaveBeenCalledTimes(1);
    useHttp();
    expect(axios.create).toHaveBeenCalledTimes(1);
  });
});
