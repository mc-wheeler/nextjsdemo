import Head from 'next/head';
import Counter from '../components/Counter';

export default function Home() {
    return(
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>
                Matthew Wheeler
            </h1>
            <Counter />
        </div>
    );
}