import product_img from '../../Assets/product-img-01.png'

import product_img2 from '../../Assets/product-img-02.png'

import product_img3 from '../../Assets/product-img-03.png'

import { Card } from '../../Components/Product_Card/index'
import { Container } from "react-bootstrap";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Banner } from '../../Components/Banner'
import "./style.css";
import { useNavigate } from 'react-router-dom';

export const Printed_Models = () => {

//  const navigate = useNavigate()
//  navigate('sports-product-listing')
// //  navigate('sports-product-listing')
// //  navigate('sports-product-listing')

    return (
        <>
            <UserLayout>

                <Banner
                    heading="3D PRINTED MODELS"
                    descripction="Revolutionize dentistry with our precision-crafted 3D printed models, setting a new standard for accuracy. Elevate patient care by embracing cutting-edge technology that guarantees a perfect fit." />
                <Card
                    img={product_img}
                    heading="Upper 3D Model"
                    descripction="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..

    "
                    descripction2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
                    price="59.34" text="Add to cart"
                />
                <Card
                    img={product_img2}
                    heading="Lower 3D Model"
                    descripction="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    "
                    descripction2="                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
                    price="59.34" text="Add to cart"
                />
                <Card
                    img={product_img3}
                    heading="Upper 3D Model"
                    descripction="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    descripction2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.

                    "
                    price="59.34" text="Add to cart"
                />

            </UserLayout>
        </>
    );
};
