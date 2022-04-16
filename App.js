import React,{useState} from 'react';
import {StyleSheet,Text,View,TextInput,Image,Button} from 'react-native';

const SuperMan = () => {
  return (
    <View>
      <Text>I am SuperMan from Mars!</Text>
      <Text>I am well known for my SuperPowers</Text>
    </View>
  );
}

const CatWoman = () => {
  return (
    <View>
      <Text>Hi guys I am CatWoman</Text>
      <Text>I am Batman's Friend</Text>
    </View>
  );
}

const BatMan = () => {
  return (
    <View>
      <Text>Hi guys I am Batman</Text>
      <Text>I am Friend of SuperMan</Text>
      <CatWoman/>
    </View>
  );
}

const Kgf = (props) => {
  return (
    <View>
      <Text>Hi guys I am {props.name}!</Text>
    </View>
  );
}

//State Management
const Alien = (props) =>{
  const [isHungry,setIsHungry] = useState(true);

  return (
    <View>

      <Text>I am {props.category},and I am {isHungry ? "I am So much Hungry":"I am not Hungry."}!</Text>
      <Button
      onPress={() =>{
        setIsHungry(false);
      }}
      disabled={!isHungry}
      title={isHungry ? "Give Me Food" : "ThankYou For Giving Me Food"}
      />
    </View>
  );
}

const Alien2 = (props) =>{
  const [isHungry,setIsHungry] = useState(true);

  return (
    <View>

      <Text>I am {props.category},and I am {isHungry ? "I am So much Hungry":"I am not Hungry."}!</Text>
      <Button
      onPress={() =>{
        setIsHungry(true);
      }}
      disabled={!isHungry}
      title={isHungry ? "Give Me Food" : "ThankYou For Giving Me Food"}
      />
    </View>
  );
}

const App = () => {
  const name = 'Davinder Singh';
  const from = "Earth";
  const getfullName = (firstName,secondName,thirdName) => {
    return firstName+ " "+secondName+" "+thirdName;
  }
      return (          
        <View style={styles.container}>
          <Image source={{uri:'https://www.jquery-az.com/html/images/banana.jpg'}}
          style={{width:200,height:200}}
          /> 
        <Kgf name="Rocky"/> 
        <Kgf/>
        <Kgf name="Garuda"/>
        <Kgf name="Adheera"/>
        <SuperMan/>
        <Text>Hi I am Davinder Singh</Text>
        <Text> My Name is : {name}.</Text>
        <Text>I am From {from}</Text>
        <Text>My Full Name is : {getfullName("Davinder","Singh","Binjon")}</Text>

      <TextInput
      style = {styles.textfield}
      defaultValue="Hi Please Enter Your Name : "
      />
     <BatMan/>
       <Alien category="Martian"/> 
       <Alien2 category="Nebulian"/>
     </View>

   
    );
  
  };
  
const styles = StyleSheet.create(
  {
    container :{
      flex:1,
      backgroundColor:'blue',
      alignItems:'center',
      justifyContent:'center',
    },
    textfield :{
      height: 50,
      borderColor: 'white',
      borderWidth: 2,
    }
  }
);
export default App;