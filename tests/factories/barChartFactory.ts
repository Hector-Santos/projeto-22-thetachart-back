import { faker } from "@faker-js/faker";

export async function barChartFactory() {
  const columnNumber = faker.datatype.number({min:1, max:20});
  const columnNames= [];
  const columnColors= [];
  const columValues=[];
  for(let i = 0; i < columnNumber; i++){
    columnNames.push(faker.lorem.word());
    columnColors.push(faker.color.rgb({ prefix: "#" }));
    columValues.push(faker.datatype.number({min:0, max:100}));
  }
  return {
    title: faker.lorem.words(2),
    columnNumber: columnNumber,
    columnNames: columnNames,
    columnColors:columnColors,
    columnValues:columValues
  };
}

export async function barChartFactoryPreset(columnNumber:number) {
  const columnNames= [];
  const columnColors= [];
  const columValues=[];
  for(let i = 0; i < columnNumber; i++){
    columnNames.push(faker.lorem.word());
    columnColors.push(faker.color.rgb({ prefix: "#" }));
    columValues.push(faker.datatype.number({min:0, max:100}));
  }
  return {
    title: faker.lorem.words(2),
    columnNumber: columnNumber,
    columnNames: columnNames,
    columnColors:columnColors,
    columnValues:columValues
  };
}




