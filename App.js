import React,{useState} from 'react';
import {StyleSheet,Text,View,TextInput,Image,Button,ScrollView,FlatList,SectionList} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

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

//State Management using Boolean
const Alien = (props) =>{
  const [isHungry,setIsHungry] = useState(true);

  return (
    <View>

      <Text>I am {props.category},and I am {isHungry ? "I am So much Hungry":"I am not Hungry."}!</Text>
      {/*here On press False*/}
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
    {/*  Here on press true */}
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
  //State Management using text
  const [text,setText] = useState('');

      return (      
        <ScrollView>    
        <View style={styles.container}>

    {/* textInput using StateManagement */}

    <TextInput
      style = {styles.textfield}
      placeholder="type Here Something To Translate!"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
      /> 
    {/* Effect of textField State on Text */}

        <Text style={{padding: 10, fontSize: 30}}>
          {text.split(' ').map((word) => word && 'U Have Typed Cool').join(' ')}
        </Text>


          <Image source={{uri:'https://www.jquery-az.com/html/images/banana.jpg'}}
          style={{width:200,height:200}}
          /> 
          <Image source={logo} style={{width:100,height:100}}/>
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
     <View style={styles.container2}>
        <FlatList
          data={[
            {key:'Davinder'},
            {key:'Hrithik'},
            {key:'Sharukh'},
            {key:'Dwayen Johnson'},
            {key:'Roman Reigns'},
            {key:'Krrish'}
          ]}
          renderItem={({item}) => 
          <Text style={styles.item}>
            {item.key}
          </Text>
        } 
        />
        
          
     </View>

     <View style={styles.container}>
      <SectionList
        sections={[
          {title:'Names',data: ['Davinder Singh','Sharukh Khan','John Cena','Roman Reigns']},
          {title: 'Dept.',data: ['B.Tech','B.Pharmacy','B.Sc.','HM']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader = {({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor = {(item,index) => index}
      />  
     </View>
     </ScrollView>

   
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
    container2 :{
      height:300,
      backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center',
    },
    textfield :{
      height: 50,
      borderColor: 'white',
      borderWidth: 2,
    },
    item: {
      padding: 8,
      fontSize: 20,
      height: 44,
      color:Colors.white,
    },
    sectionHeader: {
      paddingTop: 3,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 3,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'black',
    }
  }
);
export default App;