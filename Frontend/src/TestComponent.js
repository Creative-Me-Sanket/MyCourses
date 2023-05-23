import React,{useState} from 'react';
import Accordion from './Components/Accordion';
import Button from './Components/Button';
import Card from './Components/Card';
import CheckBox from './Components/CheckBox';
import DropDown from './Components/DropDown';
import EnrolledCoursesCard from './Components/EnrolledCoursesCard';
import HorizontalCard from './Components/HorizontalCard';
import Progressbar from './Components/Progressbar';
import RadioButtonGroup from './Components/RadioButtonGroup';
import SearchBar from './Components/SearchBar';
import Switch from './Components/Switch';
import TextArea from './Components/TextArea';
import TextInput from './Components/TextInput';

function TestComponent() {
  const [state, setstate] = useState(true);
  const [selected, setSelected] = useState('');
  return (
    <div className="App">
      <Button className="btn btn-outline-primary"/>
      <TextInput containerClassName="container" label="Name" name="name" helpText="Enter Your Email"/>
      <TextArea name="Address" label="Address" rows="3"/>
      <RadioButtonGroup name="gender" ops={[{
        value:"male",
        label:"Male",
      },{
        value:"female",
        label:"Female"
      }]}
      onClick={
        (event)=>{
          console.log(event.target.value);
        }
      }
      />
      <br/>
      <CheckBox value="Study" label="Study"  name="hobby"/>
      <br/>
      <Switch 
      label="Dark Mode"
      name="Theme"
      value={state}
      onChange={()=>{
        setstate(!state)
        console.log(state)
      }}
      />
      <br/>
      <Accordion items={[{
        head:"Accordion 1",
        data:"This is Accordion 1"
      },{
        head:"Accordion 2",
        data:"This is Accordion 2"
      }]}/>
      <br/>
      <DropDown onChange={(event)=>{
        console.log(event.target.value);
      }} ops={['Nashik','Dhule','Pune','Mumbai','Nagpur']}/>
      <br/>
      <Progressbar progress={50}/>
      <br/>
      <SearchBar/>
      <br/>
      <Card/>
      <br/>
      <HorizontalCard/>
      <br/>
      <EnrolledCoursesCard/>
    </div>
  );
}

export default TestComponent;
