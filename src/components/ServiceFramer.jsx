import { motion, useTransform, useScroll } from "framer-motion";
import { useRef ,useEffect} from "react";
import './servicesframer.css'
import './hooks/useCursor.css'
import useCursor from './hooks/useCursor';
import { gsap } from 'gsap';

const Example = () => {
    const cursorRef = useCursor();
    const sectionRef = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateOnScroll();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0 }); // Change threshold as needed
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
  
    const animateOnScroll = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
      const targetElements = document.querySelectorAll('.cardright');
      targetElements.forEach((targetElement, index) => {
        tl.fromTo(
          targetElement,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.25, duration: 0.6, delay: index * 0.15 }
        );
      });
    };

  return (
    <div id="containerr" ref={sectionRef} className="containerr" style={{ backgroundColor: "#0000" }}>
      <div className="heading ">
        <span className="cursor-scale">
          Services
        </span>
      </div>
      <HorizontalScrollCarousel />

    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  const cards = [
    {
      id: 1,
      title: "Website Development",
      description: "Get a website that not only looks good but works great too. We build websites that are easy to use, ensuring your visitors have a seamless experience and turn into happy customers.",
      bgColor: "#7619EF",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Make your virtual office look as good as your business. Our web design makes sure your website is not just eye-catching but also easy to navigate, creating a positive impression that lasts.",
      bgColor: "#333BF4",
    },
    {
      id: 3,
      title: "SEO",
      description: "Be found when people are searching for what you offer. Our SEO magic helps your business pop up on search engines, bringing in more visitors and potential customers.",
      bgColor: "#EE2AC3",
    },
    {
      id: 4,
      title: "Email Marketing",
      description: "Say hello directly to your audience's inbox. Our email campaigns are crafted to keep your customers engaged, informed, and excited about what you have to offer.",
      bgColor: "#D9D9D9",
    },
    {
      id: 5,
      title: "Branding",
      description: "Tell a story with your brand. We help you create a consistent and memorable brand image that stands out, building trust and making your business unforgettable.",
      bgColor: "#D9D9D9",
    },
    {
      id: 6,
      title: "Content Marketing",
      description: "Speak your audience's language. From blog posts to videos, we create content that not only shows what you know but also connects with your customers, making your brand a go-to resource in your industry.",
      bgColor: "#D9D9D9",
    },
    {
      id: 7,
      title: "SMM",
      description: "Turn your social media into a conversation. We help you connect with your audience, share your story, and build a community around your brand through smart and friendly social media strategies.",
      bgColor: "#D9D9D9",
    }
  
  ];
  return (
    <section className="sectioonn" ref={targetRef} style={{ position: "relative", height: "300vh", backgroundColor: "#00000" }}>
      <div className="carddivv" style={{ position: "sticky", top: "25vh", display: "flex",  alignItems: "center", overflow: "hidden" }}>
        <motion.div className="cardsdiv"style={{ x, display: "flex" }} media="(min-width: 475px)">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
  
    <div key={card.id} className= {`card-${card.id}`}>
      <div className={`cardleft card${card.id}left`}>
        <span className={`cardleftinner card${card.id}lefttext`}>
          {card.title}
        </span>
      </div>
      <div className={` cardright card${card.id}right`}>
            {card.description}
      </div>
    </div>
  );
};

export default Example;
