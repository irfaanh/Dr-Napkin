import ProductList from '../Components/Products'
import WhyNapkin from '../Components/WhyNapkin'
import FAQSection from '../Components/FAQ'
import HeroSection from '../Components/Hero'
import LandingBlogSection from '../Components/LandingBlogSection'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <ProductList/>
        <WhyNapkin/>
        <FAQSection/>
        <LandingBlogSection/>
    </>
  )
}

export default Home