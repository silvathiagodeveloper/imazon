import Featured from "@/components/Featured";
import Header from "@/components/Header";

export default function HomePage({product}){
    return (
        <div>
            <Header />
            <Featured product={product} />
        </div>
    );
}


export function getServerSideProps(){
    const product = {
        _id: '655170dfa2271ba3d551e171',
        title: 'Macbook 14 Pro',
        category: {id:1, name:'Notebooks'},
        description: 'Lorem ipsumm f sd fsd f sd fsdf sdflsdf sk dfsld fsdf f fsd f dfsd fds fds fdgfdg fdg fd gdfg dfgdfgdfg dfgdfgdfgdf gdfgdfgdf gdfgdf g',
        price: 1595,
        images: ['https://mycommerce-e2.s3.amazonaws.com/1701945942450.png'],
        properties: {Cor: 'Branco'}
    }
    return {
        props: { product : JSON.parse(JSON.stringify(product))}
    };
}