import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.black,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const backgroundStyle = {
    backgroundColor: Colors.blue,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        >
      
        <View
          style={{
            backgroundColor:  Colors.white,
          }}>

          <Section title="Davinder Singh"> 
          <Text> hi i am </Text>   
          <Text> Davinder Singh. </Text>          

          </Section>
          <Section title="I am from Earth">
         
          </Section>
          <Section title="Class">
        
          </Section>
          <Section title="Learn More">
          
          </Section>


          <Section title="Davinder Singh">          
          </Section>
          <Section title="I am from Earth">
         
          </Section>
          <Section title="Debug">
        
          </Section>
          <Section title="Learn More">
          
          </Section>


          <Section title="Davinder Singh">          
          </Section>
          <Section title="I am from Earth">
         
          </Section>
          <Section title="Debug">
        
          </Section>
          <Section title="Learn More">
          
          </Section>
       
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
