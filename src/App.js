import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import { StackPage } from "./Stack/StackVisualisation";
import { SortingPage } from "./Sorting/SortingVisualisation";
import { MiscAlgorithmsPage } from "./Misc/MiscAlgorithmVisualisations";
import { SimpleAlgorithmsPage } from "./Simple/SimpleAlgorithmVisualisations";

function App() {
  return (
    <div className="App">
      <nav>
        {pages.map(page => (
          <Link
            key={page.title}
            to={page.path}
            getProps={({ isCurrent }) => {
              return {
                style: {
                  border: isCurrent ? "1px solid #008f11" : "none"
                }
              };
            }}
          >
            {page.title}
          </Link>
        ))}
      </nav>
      <main>
        <Router>
          {pages.map(page => (
            <page.component key={page.title} path={page.path} />
          ))}
        </Router>
      </main>
    </div>
  );
}

const Home = () => (
  <div>
    <h1>Welcome to a crash introduction to data structures and algorithms!</h1>
    <p>
      From the tabs above you'll find visualizations to help you write and
      understand different algorithms with the help of simple data structures.
    </p>
    <p>
      The source code is annotated with links and hints to sources on the web -
      and remember to ask any and all questions from the instructors!
    </p>
    <hr></hr>
    <h2>What is a Data Structure?</h2>
    <p>
      A data structure is a particular way of organizing data in a computer so
      that it can be used effectively.<br></br>(from:&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.geeksforgeeks.org/data-structures/"
      >
        GeeksForGeeks
      </a>
      )
    </p>
    <h2>What about algorithms?</h2>
    <p>
      An algorithm is a step by step method of solving a problem.<br></br>It is
      commonly used for data processing, calculation and other related computer
      and mathematical operations.<br></br>An algorithm is also used to
      manipulate data in various ways, such as inserting a new data item,
      <br></br>
      searching for a particular item or sorting an item.<br></br>(from:&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.techopedia.com/definition/3739/algorithm"
      >
        Techopedia
      </a>
      )
    </p>
  </div>
);

const pages = [
  { component: Home, title: "Home", path: "/" },
  {
    component: SimpleAlgorithmsPage,
    title: "Simple algorithms",
    path: "/simple"
  },
  { component: StackPage, title: "Stack", path: "/stack" },
  { component: SortingPage, title: "Sorting", path: "/sorting" },
  { component: MiscAlgorithmsPage, title: "Misc algorithms", path: "/misc" }
];

export default App;
