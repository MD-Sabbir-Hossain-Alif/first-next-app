import Image from "next/image";
import ClipingMask from "../../assets/fb-css_design.png";

export const metadata = {
    title: "About",
    description: "This is about page, all info is here",
};

const AboutPage = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mt-15">This is About Page</h1>
            <p className="text-center">I am sabbir from about page</p>

            <div className="flex justify-center items-center gap-4 mt-6">
                <Image
                    src="/sabbir.png"
                    alt="mustafisur rahman"
                    height="500"
                    width="300"
                    loading="eager"
                ></Image>
                <Image
                    src={ClipingMask}
                    alt="Dear In cliping mask image"
                    height="auto"
                    width="300"
                ></Image>

                <Image
                    src="https://images.unsplash.com/photo-1774244764160-c6db8d01c4a8"
                    alt="Unsplash Image"
                    height="500"
                    width="300"
                ></Image>
            </div>
        </div>
    );
};

export default AboutPage;
