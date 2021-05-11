import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalMeal from "../../../components/layout/modals/meal/modal_meal";
import TableMealsItem from "./table_meals_item";

const TableMeals = (props) => {
  const [isopen, setisopen] = useState(false);
  const [meals, setMeals] = useState([
    {
      create: "02.12",
      _id: "1",
      meal_type: "아침",
      mealDesc: ["수박"],
      calorie: 200,
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:3601/api/meals") //
      .then((result) => {
        console.log(result);
        console.log({ data: result.data.data });
        let meals = result.data.data;
        for (let i = 0; i < meals.length; i++) {
          const item = meals[i];
          // item.id = i;
          console.log(item);
          item.time = Time(item.create);
          item.create = getMD(item.create);
          // console.log({ item });
          //날짜
          // getMD()
          //칼로리
          item.calorie = item.calorie + "kal";
          meals[i] = item;
        }
        setMeals(meals);
      });
  }, []);
  function getMD(create) {
    const d = new Date(create);
    const md = d.getMonth() + 1 + "." + d.getDate(); // 데이터 객체 에서 월 , 일 만 가지고 와서 문자열로 만들어 준다
    return md;
  }
  function Time(create) {
    const time = create.split("T")[1];
    const time2 = time.split(".")[0];
    return time2;
  }

  return (
    <>
      <table className="main_table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>식사시간</th>
            <th>아침/점심/저녁</th>
            <th>식단 내역</th>
            <th>칼로리</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <TableMealsItem
              key={meal._id}
              meal={meal} //
              isopen={isopen}
              setisopen={setisopen}
            />
          ))}
        </tbody>
      </table>

      {/* modal */}
      <>{isopen ? <ModalMeal /> : null}</>
    </>
  );
};

export default TableMeals;