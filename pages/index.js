import Head from 'next/head'
import { Button, Space, DatePicker, Card } from 'antd';
import HomeComponent from './components/home/HomeComponent';
export default function Home() {
  const onChange = () => {
    console.log("on change")
  }
  
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
     <HomeComponent/>
    </div>
    </div>
  )
}
