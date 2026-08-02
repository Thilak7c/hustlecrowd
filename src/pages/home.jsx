import { NavbarDark, FooterDark } from '../components'
import { Cards2Dark, HeroDark3, ContactDark, TestimonialsDark, Companies, HeroDark4, HeroDark5, TestimonialsDark2 } from '../sections'
import { CTA2 } from '../sections/CTA2'
import FAQ from '../sections/Faqs'
import { HowItWorks } from '../sections/HowItWorks'
import { Portfolio } from '../sections/Portfolio'
import { Pricing } from '../sections/Pricing'
import { ProblemSection } from '../sections/Problem'
import { ProductsSection } from '../sections/Products4'
import Services3 from '../sections/Services3'
import { Testimonials } from '../sections/Testimonials'

const Home = () => {
  return (
    <>

    {/* V5 - Shopify Niche */}
      <NavbarDark />
      <HeroDark5  />
      <ProblemSection /> 
      <ProductsSection />
      {/* <Pricing />
      <Testimonials />
      <FAQ />
      <CTA2 />
      {/* <TestimonialsDark2 /> */}
      {/* <ContactDark /> */}
      <FooterDark />



      {/* V4 - Ecommerce Niche */}
      {/* <NavbarDark />
      <HeroDark4  />
      <Services3 />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA2 /> */}
      {/* <TestimonialsDark2 /> */}
      {/* <ContactDark /> */}
      {/* <FooterDark /> */}

      {/* V3 */}
      {/* <NavbarDark />
      <HeroDark3  />
      <Companies />
      <Cards2Dark />
      <TestimonialsDark />
      <ContactDark />
      <FooterDark /> */}

      {/* V2 */}
      {/* <NavbarDark />
      <HeroDark2  />
      <Companies />
      <Cards2Dark />
      <TeamDark items={TEAM}/>
      <ContactDark />
      <FooterDark /> */}

      {/* V1 */}
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <HeroDark /> */}
      {/* <Cards2 /> */}
      {/* <Clients title="Previous clients" products={COMPANIES} />  
      {/* <CardsSlider title="Free templates" products={UI_TEMPLATES} />  
      {/* <CardsSlider title="Previous clients" products={COMPANIES} />   */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  )
}

export default Home

const TEAM =[
  {
      "id":1,
      'title':'Thilak Sundaram',
      'desc':"Frontend Developer",
      'coverImg':'https://cdn-images-1.medium.com/v2/resize:fit:750/1*oK2okOFUedthWOdugi_RTA.png',
      'authorDesc':'Web Developer',
      'url':'https://www.linkedin.com/in/thilak-sundaram-898936171/',

  },
  {
      "id":2,
      'title':'Muhd Kamal',
      'desc':"Fullstack Developer",
      'coverImg':'https://cdn-images-1.medium.com/v2/resize:fit:750/1*O05Nj0YCHDbE33Gx6fHhxA.png',
      'authorDesc':'Web Developer',
      'url':'https://howtothilaks.gumroad.com/l/weego-ehailing-mobile-app',

  },
]