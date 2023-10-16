/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ListTasks } from '../pages/list-tasks';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import { SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{
          backgroundColor: theme.color.background,
          flex: 1,
        }}>
        <StatusBar barStyle={'light-content'} />
        <ListTasks />
      </SafeAreaView>
    </ThemeProvider>
  );
}
