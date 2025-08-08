import React from "react";
import "./Education.css";

function Education() {
  return (
    <div>
      <h1>My Education Life</h1>
      <div className="education">
        <div className="range">
          <button>Basic</button>
          <button>Middle Level</button>
          <button>Tertiary</button>
        </div>
        <div className="write-ups">
          <div className="write-up basic">
            <h3>Mole D/A JHS</h3>I grew up in a small, close-knit community
            nestled in the Savannah Region of Ghana—a place where everyone knew
            each other by name, and the rhythm of life was shaped by tradition,
            simplicity, and resilience. It was in this humble environment that I
            began my educational journey, attending the local primary and junior
            high schools. Despite limited resources, our teachers were
            dedicated, and the spirit of perseverance ran deep in our
            classrooms. The challenges we faced—from long walks to school to
            studying by lantern light—taught me the value of hard work,
            determination, and the importance of education as a tool for
            transformation.
          </div>
          <div className="write-up high">
            <h3>TAMALE SENIOR HIGH</h3>
            <h4>TAMALE</h4>
            In 2021, I was privileged to gain admission into Tamale Senior High
            School, widely regarded as the best senior high school in Ghana.
            There, I pursued a three-year course in General Arts—a program that
            broadened my worldview and sharpened both my intellectual and social
            skills. My time at Tamale SHS was transformative. The school's
            strong culture of discipline and academic excellence shaped me into
            a more focused, responsible, and goal-driven individual. Beyond the
            classroom, I learned valuable life lessons—how to manage my time
            effectively, how to stand up for myself in challenging situations,
            and most importantly, how to be a voice and a support system for
            others. The experiences, friendships, and leadership roles I
            embraced during those years continue to inspire and guide me today.{" "}
          </div>
          <div className="write-up uni">
            <h3>KWAME NKRUMAH UNIVERSITY OF SCIENCE AND TECHNOLOGY</h3>
            <h4>KUMASI</h4>
            In 2024, I was honored to gain admission into the prestigious Kwame
            Nkrumah University of Science and Technology (KNUST) to pursue a
            four-year degree in Business Administration. Stepping onto the
            vibrant and intellectually stimulating campus of KNUST marked the
            beginning of a new chapter in my life—one filled with growth,
            exploration, and purpose. While my academic focus is rooted in
            business—where I continue to deepen my understanding of leadership,
            entrepreneurship, and strategic thinking—my time at the university
            has also opened unexpected doors. It was here that I discovered my
            passion for web development and programming. What started as casual
            curiosity quickly evolved into a deep love for building and
            designing digital experiences. The logic, creativity, and
            problem-solving nature of coding ignited something in me. I began
            spending hours learning HTML, CSS, JavaScript, and frameworks like
            React. Each line of code felt like a step closer to bringing my
            ideas to life and solving real-world problems. This passion has not
            only transformed the way I think but has also inspired me to dream
            bigger. It's pushing me daily to become a better version of
            myself—more disciplined, more creative, and more resilient.
            Alongside my academic and tech pursuits, I've also embraced
            leadership roles that have shaped my character. From serving on
            student committees to helping organize events, I've learned the
            importance of teamwork, communication, and servant leadership. These
            experiences continue to mold me into someone who not only strives
            for personal excellence but also uplifts others. The journey so far
            has been nothing short of transformative. And I know—I'm just
            getting started.
          </div>
        </div>
      </div>
      <h1>My Core Skills</h1>
      <div className="skills">
        <div className="skill-cercle">
          <h2>CSS</h2>
          <div className="circle" data-percent="90">
            <div className="inner-circle">
              <span>90%</span>
            </div>
          </div>
        </div>
        <div className="skill-cercle">
          <h2>HTML</h2>
          <div className="circle" data-percent="80" id="c1">
            <div className="inner-circle">
              <span>80%</span>
            </div>
          </div>
        </div>
        <div className="skill-cercle">
          <h2>JavaScript</h2>
          <div className="circle" data-percent="85" id="c2">
            <div className="inner-circle">
              <span>85%</span>
            </div>
          </div>
        </div>
        <div className="skill-cercle">
          <h2>REACT</h2>
          <div className="circle" data-percent="85" id="c3">
            <div className="inner-circle">
              <span>85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
