import React from 'react';
import ContactCard from './components/ContactCard'
import './App.css';

function App() {
  return (
    <div className="contacts">
    <ContactCard contact={{
      name:"Mr. Whiskerson",
      imgUrl:"http://placekitten.com/300/200" ,
      phone:"(704) 555-5551",
      email:"test@yorkie.com"}
    }/>
     <ContactCard contact={{
      name:"Mr. Whiskerson",
      imgUrl:"http://placekitten.com/300/200" ,
      phone:"(212) 555-1234",
      email:"mr.whiskaz@catnap.meow"}
    }/>
     <ContactCard contact={{
      name:"Mr. Whiskerson",
      imgUrl:"http://placekitten.com/300/200" ,
      phone:"(212) 555-1234",
      email:"mr.whiskaz@catnap.meow"}
    }/>
     <ContactCard contact={{
      name:"Mr. Whiskerson",
      imgUrl:"http://placekitten.com/300/200" ,
      phone:"(212) 555-1234",
      email:"mr.whiskaz@catnap.meow"}
    }/>
     <ContactCard contact={{
      name:"Mr. Whiskerson",
      imgUrl:"http://placekitten.com/300/200" ,
      phone:"(212) 555-1234",
      email:"mr.whiskaz@catnap.meow"}
    }/>
     <ContactCard contact={{
      name:"Mr. Whiskerson",
      imgUrl:"http://placekitten.com/300/200" ,
      phone:"(212) 555-1234",
      email:"mr.whiskaz@catnap.meow"}
    }/>
     <ContactCard contact={{
      name:"Mr. Whiskerson",
      imgUrl:"http://placekitten.com/300/200" ,
      phone:"(212) 555-1234",
      email:"mr.whiskaz@catnap.meow"}
    }/>
     <ContactCard contact={{
      name:"Mr. Whiskerson",
      imgUrl:"http://placekitten.com/300/200" ,
      phone:"(212) 555-1234",
      email:"mr.whiskaz@catnap.meow"}
    }/>
    </div>
  );
}

export default App;
