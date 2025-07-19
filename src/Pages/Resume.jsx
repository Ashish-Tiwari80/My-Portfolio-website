import project1 from "../assets/images/Tic tac toe game.png";
import project2 from "../assets/images/to do list.png";
import project3 from "../assets/images/Keeper app 1 - Copy.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../Components/footer";

export default function Resume() {
  return (
    <div>
    <section className="education">
      <div className="section-title" style={{gridColumn: "span 3"}}>
        <h2>Education</h2>
      </div>
      <div className="edu-info">
        <ol>
          <li>
            <p className="mb-4 col-7" style={{float: "left"}}><strong>Bachelor of Technology in CSE</strong></p>
            <h6 className="mb-5 col-5" style={{float: "right"}}>(2024 - 2027)</h6>
          </li>
          <p>Harcourt Buttler Technical University [HBTU] Kanpur, Uttar Pradesh</p>
          <p className="text-center" style={{color: "green"}}>GPA: 7.2/10</p>

          <li>
            <p className="mb-4 col-7" style={{float: "left"}}><strong >Bachelor of Science</strong></p>
            <h6 className="mb-5 col-5" style={{float: "right"}}>(2021 - 2024)</h6>
          </li>
          <p>Chhatrapati Shahu Ji Maharaj University [CSJMU] Kanpur, Uttar Pradesh</p>
          <p className="text-center" style={{color: "green"}}>GPA: 7.7/10</p>
        </ol>
        <h3 className="ms-5 mb-4" style={{color: "gray"}}>Achivements</h3>
        <ul>
          <li> GATE (CS) 2024 : Qualified</li>
        </ul>
      </div>
    </section>
    <hr />
    <section className="mb-4">
      <div className="section-title">
        <h2>Projects</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas asperiores sunt, error perspiciatis mollitia iusto id repellendus eligendi</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-4">
      <div className="col">
        <Card className="h-auto">
          <Card.Img variant="top" src={project1} alt="..." />
          <Card.Body>
            <Card.Title>Tic-Tac-Toe</Card.Title>
            <Card.Text>
              A minimalist web-based implementation of the classic Tic-Tac-Toe game, basic game logic, and responsive design principles. 
              Built using HTML, CSS, and JavaScript, the project features an intuitive playerX-vs-playerO interface, win/draw detection, 
              and instant game reset functionality.
            </Card.Text>
            <Button variant="primary" href="https://github.com/Ashish-Tiwari80/Tic-Tac-Toe-game.git">View Project</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col">
        <Card className="h-auto">
          <Card.Img variant="top" src={project2} alt="..." />
          <Card.Body>
            <Card.Title>To-Do-App</Card.Title>
            <Card.Text>
              A sleek and responsive task management tool built with React.js, designed to streamline daily productivity. 
              The app features dynamic task creation & deletion managed through React's stateful components and hooks.  
              This project demonstrates practical proficiency in React fundamentals, component-driven design, and efficient state management.
            </Card.Text>
            <Button variant="primary" href="https://github.com/Ashish-Tiwari80/To-Do-List.git">View Project</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col">
        <Card className="h-auto">
          <Card.Img variant="top" src={project3} alt="..." />
          <Card.Body>
            <Card.Title>Keeper App</Card.Title>
            <Card.Text>
              Keeper is a modern note-taking app built using React.js with a sticky-note UI. Users can add, view, and delete notes 
              via component-based architecture. State is managed with React hooks for smooth, real-time updates. 
              Notes persist across sessions using local storage. Designed with a vibrant, responsive layout for seamless experience.
            </Card.Text>
            <Button variant="primary" href="https://github.com/Ashish-Tiwari80/Keeper-App.git">View Project</Button>
          </Card.Body>
        </Card>
      </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}
