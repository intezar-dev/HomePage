import { ScrollView } from 'react-native';
// import BlogHeader from './componenet/Blog/BlogHeader/BlogHeader';
// import BlogHome from "./componenet/Blog/BlogHeader/BlogHome"


import Home from './componenet/Home/Home';

export default function App() {
  return (
    <ScrollView style={{}}>
      {/* ***********************1=> BlogPage************************* */}
      {/* <BlogHeader />
      <BlogHome /> */}
      {/* ******************************Blog Page End **********************/}




      {/**************************** 2=>  Home Page ************************* */}
      <Home />
    </ScrollView>
  );
}
