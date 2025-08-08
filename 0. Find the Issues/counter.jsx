import React from 'react';
import { Text, View, Button } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0)

  return (
    <View style={marginTop: 50, padding: 20}}>
      <Text>Count is: {count}</Text>
      <Button 
        title="Increase"
        onPress={() => setCount(count + 1)}
      />
      <Button 
        title="Decrease"
        onPress={() => setCount(count - 1)}
      />
    </View>
  );
}

export default CounterApp;
