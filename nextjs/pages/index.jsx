import React, { useEffect } from "react";
import moment from "moment";
import logo from "../public/logo.svg";
import Image from "next/image";

const App = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <p>I am using Next.js</p>
        <p>
          Lorem ipsum dolor sit amet, at quo meis nonumy, mel no causae
          salutandi iudicabit, et iuvaret appellantur cum. Vis aperiri principes
          ei, id qui doctus instructior signiferumque. Ut alia vidit quo, no pri
          sint possim vocent. Ad vim mollis facilisi dissentias, ne vis saperet
          adipiscing. Ex nisl populo saperet mea. Hinc labore sanctus pri no,
          pro in intellegebat conclusionemque. Veniam nusquam eam no, sit
          minimum fabellas reformidans cu, ei tation tempor nonumes mea. Pro an
          ipsum tation.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {data.map((cat) => (
          <figure key={cat.id}>
            <Image
              id={cat.id}
              src={cat.url}
              alt={cat.alt}
              width="200px"
              height="200px"
            />
          </figure>
        ))}
      </header>
    </div>
  );
};

export async function getServerSideProps() {
  const resp = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  const data = await resp.json();
  return { props: { data } };
}

export default App;
