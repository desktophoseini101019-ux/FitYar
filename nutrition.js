function mealTotals(meals){return meals.reduce((a,m)=>({calories:a.calories+(Number(m.calories)||0),protein:a.protein+(Number(m.protein)||0),carbs:a.carbs+(Number(m.carbs)||0),fat:a.fat+(Number(m.fat)||0)}),{calories:0,protein:0,carbs:0,fat:0})}
function todayMeals(){const t=dateKey();return Store.get().meals.filter(m=>m.date===t)}
