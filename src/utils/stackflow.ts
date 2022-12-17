import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import MainPage from 'src/components/pages/MainPage';
import DetailPage from 'src/components/pages/DetailPage';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  
  // 페이지 등록
  activities: {
    MainPage,
    DetailPage,
  },

  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      // 테마
      theme: 'cupertino',
      backgroundColor: '#212124',
    }),
  ],
  
  initialActivity: () => 'MainPage',
});
