import React from 'react';
import './App.css';
import Salute from './components/01. Basic-Prop';
import ObjAndArrProps from './components/02. Arr_Props';
import ObjProps from './components/03. Obj_Props';
import ChildrenProps from './components/04. Children_Props';
import StringLiteral from './components/05. String_Literal_Props';
import OptionalProps from './components/06. Optional_Props';
import EventProps from './components/07. Event_Props';
import { Users, article } from './constants';

function App() {
  return (
    <div className="App">
      <Salute name='John' />
      <hr />
      <ObjProps article={article} />
      <hr />
      <ObjAndArrProps  users={Users} />
      <hr />   
      <StringLiteral loadingState='loading' /> {/* Only loading states of "loading" and "loaded can be passed as input argument to the <Loading/> component" */}
      <hr />
      <ChildrenProps> <em>Hi there</em> </ChildrenProps>
      <hr />
      <h1>Optional Props</h1>
      <OptionalProps name='Chike and the river' author='Anonymous' timesRead={40} />
      <OptionalProps name='An African Night Entertainment' timesRead={300} /> {/* Does not throw an error if author is not passed as prop */}
      <hr />
      <EventProps inputValue='Jeff Bezos' handleSubmit={() => console.log("Hey I accept not input arguments")} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event)}/>
    </div>
  );
}

export default App;
