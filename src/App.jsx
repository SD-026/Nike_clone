import Nav from "./components/Nav";
import { Hero,  PopularProduct,
  SpecialOffer,
  Footer,
  Services,
  Subscribe,
  SuperQuality,
  Customereview
} from "./sections/index";

const App = () => (
  <main className="relative">
    <Nav/>
        <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding"> 
    <PopularProduct/>
   </section>
   <section className="padding"> 
    <SuperQuality/>
   </section>
   <section className="padding-x py-10"> 
    <Services/>
   </section>
   <section className="padding"> 
    <SpecialOffer/>
   </section>
   <section className="padding bg-pale-blue"> 
    <Customereview/>
   </section>
   <section className="padding-x xm:py-32 py-16 w-full"> 
   <Subscribe/>
   </section>
   <section className="padding-x bg-black padding-t pb-8"> 
    <Footer/>
   </section>


  </main>
)
export default App;