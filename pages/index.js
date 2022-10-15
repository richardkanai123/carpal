import Head from "next/head";
import Car from "../Components/Car";
// import Login from "../Components/Login";
export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>CarPal</title>
        <meta name="description" content="Your Car Maintenance Pal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-wrap justify-center gap-4 align-middle">
        <Car
          imgUrl={"https://i.ibb.co/ypdJPpM/carpalcar.jpg"}
          Reg="KCA 001H"
          Type={"Honda-Fit"}
          CurrentMileage={10000}
          Status={"In-Service"}
        />
        <Car
          imgUrl={"https://i.ibb.co/xf9fjKW/car400.png"}
          Reg="KCA 001H"
          Type="Honda-Fit"
          CurrentMileage={10000}
          Status={"Due"}
        />
      </div>
    </div>
  );
}
