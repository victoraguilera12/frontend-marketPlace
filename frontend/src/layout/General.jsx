import Footer from "../components/Footer"
import Navbar from "../components/navbar"
export default function General({children}){

    return(

    <>
        <Navbar/>
        <main className="pt-8 px-6 sm:px-12 lg:px-8 xl:px-24 min-h-screen ">
        {children}
        </main>
       <Footer/>
    </>

    )
}