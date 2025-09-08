import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>e-commerce</title>
      </Head>
      <div style={{height: '100vh', margin:0, padding:0}}>
        <iframe
          src="/original.html"
          title="Original HTML"
          style={{border:0, width:'100%', height:'100vh'}}
        />
      </div>
    </>
  )
}
