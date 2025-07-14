// app/_layout.js
import { Stack } from 'expo-router';
import NameProvider from './NameProvider'; //


const Layout = () => {
  return (
    <NameProvider>
      <Stack />
    </NameProvider>
  );
}
export default Layout;
