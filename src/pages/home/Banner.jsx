import { motion } from "framer-motion";
import bannerIMG1 from "../../assets/bannerPhoto/banner-1.jpg"
import bannerIMG2 from "../../assets/bannerPhoto/banner-2.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="flex-1">
      <motion.img
      src={bannerIMG1}
      animate={{y: [100,150,100],transition: {duration:5,repeat: Infinity}}}
      className="max-w-sm rounded-lg shadow-2xl border-blue-300 border-s-5 border-b-5 rounded-t-4xl rounded-br-4xl"
    />
      <motion.img
      src={bannerIMG2}
      animate={{x: [100,150, 100],transition: {duration:5,repeat: Infinity,delay:5}}}
      className="max-w-sm rounded-lg shadow-2xl border-blue-300 border-s-5 border-b-5 rounded-t-4xl rounded-br-4xl"
    />
    </div>
    <div className="flex-1">
      <h1 className="text-5xl font-bold">Remote <motion.span 
      animate = {{color: ["#FF0000","#00FFFF","#0000FF","#00008B",
      "#800080","#FFA500","#808000","#008000","#FFC0CB"],transition: {duration: 5, repeat: Infinity}}}
    >jobs</motion.span> for you!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;