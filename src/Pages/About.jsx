import Skills from "../Components/Skills";
import Footer from "../Components/footer";

export default function About() {
  const currAge = new Date().getFullYear()-2004;
  
  return (
    <div>
    <div className="mx-5">
      <div className="section-title text-center">
        <h2>About</h2>
        <p className="lead mt-3">
          Hey! I'm a web developer who loves combining design and code to build smooth, clean, and interactive websites. 
          I'm skilled in HTML, CSS, JavaScript, and React — and I also enjoy solving problems in C++.
          Whether it's building a portfolio site or exploring a cool side project, I'm always excited to create and learn. 
          Let's build something awesome!
        </p>
      </div>
      <br/><br/>

      <div class="col-lg-10 mx-5 content">
            <h3>Web Developer.</h3>
            <p class="fst-italic py-3">
              I'm a passionate Web Developer with a strong focus on creating clean, user-centered digital experiences.
              With a solid background in front-end development.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul className="list-unstyled">
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>26 Aug 2004</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 80038 52077</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kanpur UP, INDIA</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul className="list-unstyled">
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{currAge}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BACHELOR</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>ashishti2023@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p class="py-3">
              I specialize in combining creativity with technical expertise to deliver high-quality websites and applications.
              I take pride in attention to detail and a strong sense of writing clean & scalable code.
            </p>
          </div>
      
      <Skills />
      </div>
      <Footer />
    </div>
  );
}
