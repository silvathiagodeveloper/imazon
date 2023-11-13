import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductPage() {
    const [productInfo, setProductInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        if(!id) {
            return;
        }
    });
    useEffect(() => {
        axios.get('/api/products?id='+id).then(response => {
            setProductInfo(response.data);
        });
    });
    return (
        <Layout>
            <ProductForm {...productInfo}/>
        </Layout>
    )
}