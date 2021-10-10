import { Breakpoints, ScreenSize } from '@/enums';
import { useQuasar } from 'quasar';
import { useScreenSize } from './use-screen-size';

jest.mock('quasar', () => ({
  useQuasar: jest.fn(() => ({
    screen: {
      width: 0,
    },
  })),
}));

describe('use-screen-size', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('uses quasar composable to return ScreenSize.Small', () => {
    (useQuasar as jest.Mock).mockReturnValueOnce({
      screen: {
        width: 0,
      },
    });
    const { screenSize } = useScreenSize();
    expect(useQuasar).toHaveBeenCalledTimes(1);
    expect(screenSize.value).toEqual(ScreenSize.Small);
  });

  test('uses quasar composable to return ScreenSize.Medium', () => {
    (useQuasar as jest.Mock).mockReturnValueOnce({
      screen: {
        width: Breakpoints.Medium + 1,
        height: Breakpoints.Medium + 1,
      },
    });
    const { screenSize } = useScreenSize();
    expect(useQuasar).toHaveBeenCalledTimes(1);
    expect(screenSize.value).toEqual(ScreenSize.Medium);
  });

  test('uses quasar composable to return ScreenSize.Large', () => {
    (useQuasar as jest.Mock).mockReturnValueOnce({
      screen: {
        width: Breakpoints.Large + 1,
      },
    });
    const { screenSize } = useScreenSize();
    expect(useQuasar).toHaveBeenCalledTimes(1);
    expect(screenSize.value).toEqual(ScreenSize.Large);
  });

  test('uses quasar composable to return ScreenSize.VeryLarge', () => {
    (useQuasar as jest.Mock).mockReturnValueOnce({
      screen: {
        width: Breakpoints.VeryLarge + 1,
      },
    });
    const { screenSize } = useScreenSize();
    expect(useQuasar).toHaveBeenCalledTimes(1);
    expect(screenSize.value).toEqual(ScreenSize.VeryLarge);
  });
});
