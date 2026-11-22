import type { ThemeConfig } from 'antd';

export const colors = {
  green50: '#e8f4e8',
  green400: '#33a133',
  green500: '#008a00',
  green600: '#006e00',
  teal500: '#097288',
  teal600: '#075b6d',
  teal700: '#054452',
  yellow200: '#fbe5a3',
  yellow500: '#f6bd18',
  yellow600: '#c59713',
  red500: '#d62429',
  grey25: '#f7f7f7',
  grey50: '#edeeee',
  grey100: '#dbdddf',
  grey200: '#b8bcbe',
  grey400: '#71797d',
  grey500: '#4d575d',
  grey600: '#3e464a',
  grey800: '#1f2325',
  white: '#ffffff',
};

export const webappTheme: ThemeConfig = {
  token: {
    colorPrimary: colors.green500,
    colorSuccess: colors.green500,
    colorInfo: colors.teal500,
    colorWarning: colors.yellow500,
    colorError: colors.red500,
    colorLink: colors.teal500,
    colorLinkHover: colors.teal600,
    colorLinkActive: colors.teal700,

    colorTextBase: colors.grey800,
    colorTextSecondary: colors.grey500,
    colorTextTertiary: colors.grey400,
    colorBgBase: colors.white,
    colorBgLayout: colors.grey25,
    colorBorder: colors.grey100,
    colorBorderSecondary: colors.grey50,

    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  components: {
    Button: {
      colorPrimaryHover: colors.green400,
      colorPrimaryActive: colors.green600,
    },
    Layout: {
      siderBg: colors.white,
      headerBg: colors.white,
      bodyBg: colors.grey25,
    },
    Menu: {
      itemSelectedBg: colors.green50,
      itemSelectedColor: colors.green500,
      itemHoverBg: colors.grey25,
      itemColor: colors.grey600,
      groupTitleColor: colors.grey400,
      groupTitleFontSize: 11,
      itemBorderRadius: 8,
    },
    Card: {
      colorBorderSecondary: colors.grey50,
    },
    Table: {
      headerBg: colors.grey25,
      headerColor: colors.grey800,
      headerSplitColor: 'transparent',
      rowHoverBg: colors.grey25,
      borderColor: colors.grey50,
      headerSortActiveBg: colors.grey50,
      bodySortBg: colors.grey25,
    },
    Segmented: {
      itemSelectedBg: colors.white,
      trackBg: colors.grey50,
    },
  },
};
