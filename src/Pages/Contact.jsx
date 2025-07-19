import Footer from "../Components/footer";

export default function Contact() {
  return (
    <div>
      <section id="contact" class="contact section">

      <div class="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Got a project idea or just want to chat about tech? Feel free to reach out -- I'm just a message away! 👋
          <br />
          Let's connect and build something awesome together!
        </p>
      </div>

      <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-5">

            <div class="info-wrap">
              <div class="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>14 Krishna-nagar Tikra, Kanpur, UP 209217</p>
                </div>
              </div>

              <div class="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>+91 80038 52077</p>
                </div>
              </div>

              <div class="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Me</h3>
                  <p>ashishtiwa970@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <form action="forms/contact.php" method="post" class="php-email-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-4">

                <div class="col-md-6">
                  <label for="name-field" class="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" class="form-control" required="" fdprocessedid="d6zdbw"/>
                </div>

                <div class="col-md-6">
                  <label for="email-field" class="pb-2">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email-field" required="" fdprocessedid="dj5m4"/>
                </div>

                <div class="col-md-12">
                  <label for="subject-field" class="pb-2">Subject</label>
                  <input type="text" class="form-control" name="subject" id="subject-field" required="" fdprocessedid="zs4cfd"/>
                </div>

                <div class="col-md-12">
                  <label for="message-field" class="pb-2">Message</label>
                  <textarea class="form-control" name="message" rows="5" id="message-field" required=""></textarea>
                </div>

                <div class="col-md-12 text-center">
                  {/* <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div> */}

                  <button type="submit" fdprocessedid="e8kag1b">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

     </section>
     <Footer />
    </div>
  );
}