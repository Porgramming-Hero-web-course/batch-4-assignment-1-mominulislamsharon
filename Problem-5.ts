{
  //
  interface Person {
    name: string;
    age: number;
  }
  
  const person: Person = {
    name: "Alice",
    age: 30,
  };
  
  function getProperty<T, K extends keyof T>(obj: T, propertyName: K): T[K] {
    return obj[propertyName];
  }
  
  console.log(getProperty(person, "name")); 
  //
}
