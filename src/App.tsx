import React, { useState } from "react";
import "./index.css";

interface Person {
  name: string;
  age: number;
  imageUrl: string;
  desc?: string;
}
function App() {
  const [people, setPerson] = useState<Person[]>([]);
  const [newPerson, setNewPerson] = useState<Person>({
    name: "",
    age: 0,
    imageUrl: "",
    desc: "",
  });
  const handleForm = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      addPerson(newPerson);
      setNewPerson({
        name: "",
        age: 0,
        imageUrl: "",
        desc: "",
      });
    }
  };
  const addPerson = (newPerson: Person) => {
    setPerson([...people, newPerson]);
  };
  return (
    <div className="mt-8 mb-20 text-2xl grid justify-items-center">
      <div className="p1">
        <p className="font-bold font-mono mb-4">People invited to my party</p>
      </div>
      <div>
        <div>
          <input
            type="text"
            onChange={(e) =>
              setNewPerson({ ...newPerson, name: e.target.value })
            } //because its an object
            onKeyDown={handleForm}
            value={newPerson.name}
            placeholder="Name"
            className="border-2 border-blue-400 w-96 h-8 mb-2 pb-2 px-2"
            required
          />
        </div>
        <div>
          <input
            type="number"
            onChange={(e) =>
              setNewPerson({ ...newPerson, age: Number(e.target.value) })
            }
            onKeyDown={handleForm}
            placeholder="Age"
            className="border-2 border-blue-400 w-96 h-8 mb-2 pb-2 px-2"
            required
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) =>
              setNewPerson({ ...newPerson, imageUrl: e.target.value })
            }
            onKeyDown={handleForm}
            value={newPerson.imageUrl}
            placeholder="ImageUrl"
            className="border-2 border-blue-400 w-96 h-8 mb-2 pb-2 px-2 "
            required
          />
        </div>
        <div>
          <input
            type="text"
            onKeyDown={handleForm}
            value={newPerson?.desc}
            placeholder="Note"
            className="border-2 border-blue-400 w-96 h-8 mb-2 pb-2 px-2"
            onChange={(e) =>
              setNewPerson({ ...newPerson, desc: e.target.value })
            }
          />
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-500  mt-2 w-96 h-11 mb-2 rounded-xl text-slate-100"
            onClick={() => {
              addPerson(newPerson);
            }}
          >
            Register yours!
          </button>
        </div>
      </div>
      <div>
        {people.map((person, index) => (
          <div
            key={index}
            className="border-2 border-stone-400 rounded-xl grid grid-flow-col grid-cols-[90px_200px_160Px_200px] items-center mb-2 px-6"
          >
            <div className="flex">
              <span className="mt-4 mr-1">{index++ + "."}</span>
              <img
                src={`${person.imageUrl}`}
                alt={`${person.imageUrl}`}
                className="mr-6 w-16 h-16 rounded-full "
              />
            </div>
            <div>
              <h2 className="mr-6 font-bold text-lg">{person.name}</h2>
            </div>
            <div>
              <h2 className="mr-6 font-mono text-xl">{person.age} years old</h2>
            </div>
            <div>
              <h2 className="mr-6 font-mono text-lg">{person?.desc}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
