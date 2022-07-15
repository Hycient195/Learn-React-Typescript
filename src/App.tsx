import React from 'react';
import './App.css';
import Salute from './components/01. Basic-Prop';
import ObjAndArrProps from './components/02. Arr_Props';
import ObjProps from './components/03. Obj_Props';
import ChildrenProps from './components/04. Children_Props';
import StringLiteral from './components/05. String_Literal_Props';
import OptionalProps from './components/06. Optional_Props';
import EventProps from './components/07. Event_Props';
import StyleProps from './components/08. Style_Props';
import DestructuringProps from './components/09. Descructuring_Props';
import ShowImportedUser from './components/10. Type_Import_And_Export';
import ComponentReturnTypes from './components/11. Component_Return_Types';
import TypeComposition from './components/12. Type_Compositions';
import TypingUseState from './components/13. Typing_UseState';
import { TypingClassComponent } from './components/14. Typing_Class_Components';
import ComponentProps from './components/15. Component_Props';
import GenericProps from './components/16. Generic_Props_1';
import GenericProps2 from './components/16. Generic_Props_2';
import RestrictProps from './components/17. Props_Restriction.';
import TemplateLiteralTypes from './components/18. Template_Literal_Types';
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
      <ChildrenProps> <h3>Output is here</h3> </ChildrenProps>
      <hr />
      <h1>Optional Props</h1>
      {/* <OptionalProps name='Chike and the river' author='Anonymous' timesRead={40} /> */}
      <OptionalProps name='An African Night Entertainment' timesRead={300} /> {/* Does not throw an error if author is not passed as prop */}
      <hr />
      <EventProps inputValue='Jeff Bezos' handleSubmit={() => console.log("Hey I accept not input arguments")} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event)}/>
      <hr />
      <StyleProps style={{border: '1px solid silver', padding: '2em', backgroundColor: 'tomato'}} />
      <hr />
      <DestructuringProps article={article} />
      <hr />
      <ShowImportedUser user={Users} />
      <hr />
      <ComponentReturnTypes />
      <hr />
      <TypeComposition networkName='Files and print' connectedUsersCount={30} connectedUsers={Users} />
      <hr />
      <TypingUseState />
      <hr />
      <TypingClassComponent input="String passed as prop" />
      <hr />
      <ComponentProps Component={DestructuringProps} />
      <hr />
      <GenericProps name="DummyName" hobbies={["Swimming", "Running"]} />
      {/* <GenericProps2 user={{reg: 315, firstName: "Matt", lastName: "Smatt", isAvaliable: true}} /> */}
      <hr />
      <RestrictProps exists={true} isHidden={true}/>
      <hr />
      <TemplateLiteralTypes property="margin-right" />
    </div>
  );
}

export default App;
