export const  sortByAge = (ObjA, ObjB) =>  ObjA.age - ObjB.age;

export const sortByName = (ObjA, ObjB) =>  {
    const a = ObjA.name.toLowerCase(),
      b = ObjB.name.toLowerCase();
      
    if(a > b)
      return 1;
    if(a < b)
      return -1;
  return 0
}