
import './App.css';
import IdCard from './components/IdCard';
import H1 from './components/H1';
import Greetings from './components/greetings';
import Random from './components/random';
import BoxColor from './components/boxColor';
import CreditCard from './components/creditCard';

function App() {
  return (
  
    <div className="App">
      <H1 title="IdCard"/>
      <div className="first">
        <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
      </div>
      <H1 title="Greetings"/>
      <div className="second">
          <Greetings
            lang="de"
            children= "Ludwig"
          />
          <Greetings
            lang="fr"
            children= "François"
          />
      </div>
      <H1 title="Random"/>
          <Random
            min={1}
            max={6}
          />
          <Random
            min={1}
            max={100}
          />
      <H1 title="BoxColor"/>
      <div className="third">
          <BoxColor
            r={255}
            g={0}
            b={0}
          />
          <BoxColor
            r={128}
            g={255}
            b={0}
          />
      </div>
      <H1 title="CreditCard"/> 
      <div className="fourth">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="11aa99"
            color="white"
          />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="eeeeee"
            color="#222222"
          />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="ddbb55"
            color="white"
          />
      </div>

  
    </div>
  );
}

export default App;

// import React from 'react'
// import CreditCard from './components/creditCard';


// function App() {
//   return (
//     <div>
//       <CreditCard />
//       <CreditCard />
//     </div>
//   )
// }
// export default App;