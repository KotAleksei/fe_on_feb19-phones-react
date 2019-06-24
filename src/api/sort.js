export const  sortByAge = (ObjA, ObjB) =>  ObjA.age - ObjB.age;

export const sortByName = (ObjA, ObjB) =>  ObjA.name.localeCompare(ObjB.name);