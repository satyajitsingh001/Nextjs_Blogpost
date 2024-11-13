import Image from "next/image";
import Header from "@/Components/Header";
import Bloglist from "@/Components/Bloglist";
import Footer from "@/Components/Footer";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" autoClose={3000} transition={Bounce} />
      <Header />
      <Bloglist />
      <Footer />
    </>
  );
}
