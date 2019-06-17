export const  sortByAge = (ObjA, ObjB) =>  ObjB.age - ObjA.age;

export const sortByName = (ObjA, ObjB) =>  {
    const a = ObjA.name.toLowerCase(),
      b = ObjB.name.toLowerCase();
      
    if(a > b)
      return 1;
    if(a < b)
      return -1;
  return 0
}